import { IObservable } from '../../app/other-logic/i-observable';
import { ICustomValidator} from '../../app/other-logic/i-custom-validator';
import { AnswerCategory } from '../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../app/types/enums/format-category.enum';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { PageType } from '../../app/types//enums/page-type.enum';

export class NavigationSingleton {

    private static _instance: NavigationSingleton = new NavigationSingleton();

    public showValidationStatusOnPageNumber: Array<boolean>;
    public shownRequestedValidationOnPages: number[] = new Array<number>(); // Pages already shown Requested Validation 
    public showPageLevelValidationMessage = false;
    public diagMode = false; // Is the app in Diagnostic Mode?

    private _currentPageIndex: number = 0;

    private _observersOfNavigation: Array<IObservable> = new Array<IObservable>();
    private _customPageValidators: Array<ICustomValidator>;

    public static instanceOf(): NavigationSingleton {
        return NavigationSingleton._instance;
    }

    constructor() {
        // Initialize
        let totalPages = SeedDataSingleton.instanceOf().totalPages;
        this.showValidationStatusOnPageNumber = new Array<boolean>(totalPages);
        this._customPageValidators = new Array<ICustomValidator>();

        NavigationSingleton._instance = this;
    }

    public validateEntirePage() {
        // plugh - This may not be efficient + validation might be called several times
        ValidationSingleton.instanceOf().validatePage(this.currentPageId);
    }

    // Observer registration. Components register here to be notified of changes
    public registerAsObserverOfNavigation(observer: IObservable) {
        this._observersOfNavigation.push(observer);
    };

    // Custom Validator Registration. This will override regular validation AT THE PAGE LEVEL
    public registerAsCustomValidator(validator: ICustomValidator) {
        this._customPageValidators[this.currentPageNumber] = validator;
    };

    get showValidation(): boolean {
        let showValidationForCurrentPage = this.showValidationStatusOnPageNumber[this._currentPageIndex];
        showValidationForCurrentPage = !!showValidationForCurrentPage; // Undefine should be false;

        return showValidationForCurrentPage;
    }

    set showValidation(value: boolean) {
        this.showValidationStatusOnPageNumber[this._currentPageIndex] = value;
    }

    get currentPageId(): number {
        let pageId = SeedDataSingleton.instanceOf().getPageIdFromIndex(this._currentPageIndex);

        return pageId;
    }

    get currentPageNumber(): number {
        return this._currentPageIndex + 1;
    }

    get percentageComplete(): number {
        let totalPages = SeedDataSingleton.instanceOf().totalPages;
        let percentage: number = (this.currentPageNumber / totalPages) * 100;
        percentage = Math.round(percentage);

        return percentage;
    }

    // Navigation
    next() {
        let aggregateResult: ValidationResult;

        // Is there a custom validator to call?
        if (this._customPageValidators[this.currentPageNumber]) {
            let customValidationResult = this._customPageValidators[this.currentPageNumber].customValidate();
            aggregateResult = customValidationResult ? ValidationResult.ok : ValidationResult.required;
        }

        // Regular Validation
        if (!this._customPageValidators[this.currentPageNumber]) {
            aggregateResult = ValidationSingleton.instanceOf().validatePage(this.currentPageId);

            // Requested Validation message is only shown once per page, max three times on the survey 
            if (aggregateResult === ValidationResult.requested) {
                if (this.shownRequestedValidationOnPages.length >= 3 ||
                    this.shownRequestedValidationOnPages.indexOf(this.currentPageId) > -1) {
                    this.showPageLevelValidationMessage = false;
                    aggregateResult = ValidationResult.ok;
                } else {
                    this.shownRequestedValidationOnPages.push(this.currentPageId);
                    this.showPageLevelValidationMessage = true;
                }
            }

            // If validation should be shown update show_validation property in the questions
            if (aggregateResult !== ValidationResult.ok) {
                this.showValidation = true;
            }
        }

        // If validation was ok, then go to the next page
        if (aggregateResult === ValidationResult.ok) {
            this._currentPageIndex++;

            // Verify page is has at least one visible Question            
            let questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.currentPageId);
            let avoidInfinteLoopCount = 0; // avoid an infinite loop
            while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
                console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
                this._currentPageIndex++;
                questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.currentPageId);
            }

            this._notifyObserversOfNavigation();
        } else {
            console.log('Calculated aggregate validation is: ValidationResult.' + ValidationResult[aggregateResult]);
        }

    }

    back() {
        this._currentPageIndex--;
        this.showValidation = true; // Always show validation when moving back to a page
        this.showPageLevelValidationMessage = false; // Never show page level validation message if we just moved back

        // Verify page is has at leat one visible Question            
        let questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.currentPageId);
        let avoidInfinteLoopCount = 0;
        while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
            this._currentPageIndex--;
            this.showValidation = true; // Always show validation when moving back to a page
            this.showPageLevelValidationMessage = false; // Never show page level validation message if we just moved back
            questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.currentPageId);
        }

        this._notifyObserversOfNavigation();
    }

    /**
     * This is used by the ReContact page since the page.  If the user doesn't want to be contacted,
     *  transition to the next page without any validation.
     */
    public nextWithNoValidation() {
        this._currentPageIndex++;

        // Verify page is has at least one visible Question            
        let questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.currentPageId);
        let avoidInfinteLoopCount = 0; // avoid an infinite loop
        while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
            this._currentPageIndex++;
            questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.currentPageId);
        }

        this._notifyObserversOfNavigation();
    }

    setPageId(pageId: number) {
        let pageIndex = SeedDataSingleton.instanceOf().getPageIndexFromPageId(pageId);
        this._currentPageIndex = pageIndex;
    }

    // Loop through all registered observers, notifying each one
    private _notifyObserversOfNavigation() {
        console.log('Number of observers: ' + this._observersOfNavigation.length);
        for (let curObserver of this._observersOfNavigation) {
            if (curObserver) {
                curObserver.oberservedDataChanged();
            }
        }
    }


}
