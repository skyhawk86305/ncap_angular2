import { IObservable } from '../../app/other-logic/i-observable';
import { ICustomValidator} from '../../app/other-logic/i-custom-validator';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';

export class NavigationSingleton {

    private static _instance: NavigationSingleton = new NavigationSingleton();

    public DisplayValidationAtQuestionLevel: boolean = false;
    public DisplayValidationAtPageLevel: boolean = false;
    public diagMode = false; // Is the app in Diagnostic Mode?
    private _pagesThatHaveDisplayedRequestedValidationMessage: number[] = new Array<number>(); // Pages already shown Requested Validation 

    private _currentPageIndex: number = 0;

    private _observersOfNavigation: Array<IObservable> = new Array<IObservable>();
    private _customPageValidators: Array<ICustomValidator>;

    public static instanceOf(): NavigationSingleton {
        return NavigationSingleton._instance;
    }

    constructor() {
        // Initialize
        this._customPageValidators = new Array<ICustomValidator>();

        NavigationSingleton._instance = this;
    }

    set PageId(pageId: number) {
        // Translate the pageId to an array index (i.e. true position of page in squence)
        let pageIndex = SeedDataSingleton.instanceOf().getPageIndexFromPageId(pageId);
        this._currentPageIndex = pageIndex;
    }

    get CurrentPageId(): number {
        let pageId = SeedDataSingleton.instanceOf().getPageIdFromIndex(this._currentPageIndex);

        return pageId;
    }

    get CurrentPageNumber(): number {
        return this._currentPageIndex + 1;
    }

    get PercentageComplete(): number {
        let totalPages = SeedDataSingleton.instanceOf().totalPages;
        let percentage: number = (this.CurrentPageNumber / totalPages) * 100;
        percentage = Math.round(percentage);

        return percentage;
    }

    // Observer registration. Components register here to be notified of changes
    public registerAsObserverOfNavigation(observer: IObservable) {
        this._observersOfNavigation.push(observer);
    };

    // Custom Validator Registration. This will override regular validation AT THE PAGE LEVEL
    public registerAsCustomValidator(validator: ICustomValidator) {
        this._customPageValidators[this.CurrentPageNumber] = validator;
    };

    public validateEntirePage() {
        // plugh - This may not be efficient + validation might be called several times
        ValidationSingleton.instanceOf().validatePage(this.CurrentPageId);
    }

    // Navigation
    public next() {
        let aggregateResult: ValidationResult;

        // Is there a custom validator to call?
        if (this._customPageValidators[this.CurrentPageNumber]) {
            let customValidationResult = this._customPageValidators[this.CurrentPageNumber].customValidate();
            aggregateResult = customValidationResult ? ValidationResult.ok : ValidationResult.required;
        }

        // Regular Validation
        if (!this._customPageValidators[this.CurrentPageNumber]) {
            aggregateResult = ValidationSingleton.instanceOf().validatePage(this.CurrentPageId);

            // Requested Validation message is only shown once per page, max three times on the survey 
            if (aggregateResult === ValidationResult.requested) {
                if (this._pagesThatHaveDisplayedRequestedValidationMessage.length >= 3 ||
                    this._pagesThatHaveDisplayedRequestedValidationMessage.indexOf(this.CurrentPageId) > -1) {
                    this.DisplayValidationAtQuestionLevel = false;
                    this.DisplayValidationAtPageLevel = false;
                    aggregateResult = ValidationResult.ok;
                } else {
                    this._pagesThatHaveDisplayedRequestedValidationMessage.push(this.CurrentPageId);
                    this.DisplayValidationAtQuestionLevel = true;
                    this.DisplayValidationAtPageLevel = true;
                }
            }

            // If validation should be shown update show_validation property in the questions
            if (aggregateResult === ValidationResult.required) {
                this.DisplayValidationAtQuestionLevel = true;
                this.DisplayValidationAtPageLevel = true;
            }
        }

        // If validation was ok, then go to the next page
        if (aggregateResult === ValidationResult.ok) {
            this._currentPageIndex++;
            this.DisplayValidationAtQuestionLevel = false;
            this.DisplayValidationAtPageLevel = false;


            // Verify page is has at least one visible Question            
            let questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.CurrentPageId);
            let avoidInfinteLoopCount = 0; // avoid an infinite loop
            while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
                console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
                this._currentPageIndex++;
                questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.CurrentPageId);
            }

            // Since next just moved us to a new page, don't show the page level validation but do show the questoin level valiation if it has been show before 
            this.DisplayValidationAtPageLevel = false;
            if (this._pagesThatHaveDisplayedRequestedValidationMessage.indexOf(this.CurrentPageId) > -1) {
                this.DisplayValidationAtQuestionLevel = true;
            }

            this._notifyObserversOfNavigation();

        } else {
            console.log('Calculated aggregate validation is: ValidationResult.' + ValidationResult[aggregateResult]);
        }

    }

    public back() {
        this._currentPageIndex--;

        // Verify page is has at least one visible Question            
        let questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.CurrentPageId);
        let avoidInfinteLoopCount = 0;
        while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
            this._currentPageIndex--;
            questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.CurrentPageId);
        }

        ValidationSingleton.instanceOf().validatePage(this.CurrentPageId);
        this.DisplayValidationAtPageLevel = false; // Never show page level validation message if we just moved back
        this.DisplayValidationAtQuestionLevel = true; // Always show validation when moving back to a page
        if (this._pagesThatHaveDisplayedRequestedValidationMessage.indexOf(this.CurrentPageId) === -1) {
            this._pagesThatHaveDisplayedRequestedValidationMessage.push(this.CurrentPageId);
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
        let questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.CurrentPageId);
        let avoidInfinteLoopCount = 0; // avoid an infinite loop
        while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
            this._currentPageIndex++;
            questionsToRender = SeedDataSingleton.instanceOf().getQuestionsToDisplayByPageId(this.CurrentPageId);
        }

        this._notifyObserversOfNavigation();
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
