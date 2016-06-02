import { IObservable } from '../../app/other-logic/i-observable';
import { ICustomValidator} from '../../app/other-logic/i-custom-validator';
import { AnswerCategory } from '../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../app/types/enums/format-category.enum';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { Page } from '../../app/types/database-data/page';
import { PageType } from '../../app/types//enums/page-type.enum';

export class NavigationSingleton {

    private static _instance: NavigationSingleton = new NavigationSingleton();

    public showValidationStatusForEachPage: Array<boolean>;
    public diagMode = false; // Is the app in Diagnostic Mode?
    public shownRequestedValidationOnPages: number[] = new Array<number>(); // Pages already shown Requested Validation 

    private _currentPageIndex: number = 0;
    private _observers: Array<IObservable> = new Array<IObservable>();
    private _customPageValidator: Array<ICustomValidator>;

    public static instanceOf(): NavigationSingleton {
        return NavigationSingleton._instance;
    }

    constructor() {
        let totalPages = SeedDataSingleton.instanceOf().totalPages;
        this.showValidationStatusForEachPage = new Array<boolean>(totalPages);
        this._customPageValidator = new Array<ICustomValidator>();
        NavigationSingleton._instance = this;
    }

    get showValidation(): boolean {
        let showValidationForCurrentPage = this.showValidationStatusForEachPage[this._currentPageIndex];
        showValidationForCurrentPage = !!showValidationForCurrentPage; // Undefine should be false;

        return showValidationForCurrentPage;
    }

    set showValidation(value: boolean) {
        this.showValidationStatusForEachPage[this._currentPageIndex] = value;
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

    getPageToRender(): Page {
        let result = SeedDataSingleton.instanceOf().getPageByIndex(this._currentPageIndex);

        return result;
    }

    getQuestionsToRender(): { questions: PageQuestion[], pageVisible: boolean, renderButtons: boolean } {
        // Find questions for current page
        let pageId = this.currentPageId;
        let questions: PageQuestion[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);

        let atLeastOneVisibleQuestion = false;

        for (let curQuestion of questions) {
            if (curQuestion.sre_anca_id !== AnswerCategory.No_Answer) {
                atLeastOneVisibleQuestion = atLeastOneVisibleQuestion || curQuestion.visible;
            }
            // Always show the page if it has a visible PreQ_Intro or Section_Title
            if (curQuestion.sre_foca_id === FormatCategory.PreQ_Intro || curQuestion.sre_foca_id === FormatCategory.Section_Title) {
                atLeastOneVisibleQuestion = atLeastOneVisibleQuestion || curQuestion.visible;
            }
        }

        // Always Display any Residental Block Page
        let curPageType: PageType = SeedDataSingleton.instanceOf().getPagebyPageId(pageId).page_type;
        if ([PageType.residentialBlockPart1, PageType.residentialBlockPart2, PageType.residentialBlockPart3].indexOf(curPageType) > -1) {
            atLeastOneVisibleQuestion = true;
        }

        return { questions: questions, pageVisible: atLeastOneVisibleQuestion, renderButtons: pageId > 2 };
    }

    // Navigation
    next() {
        let aggregateResult: ValidationResult;

        // Is there a custom validator to call?
        if (this._customPageValidator[this.currentPageNumber]) {
            let customValidationResult = this._customPageValidator[this.currentPageNumber].customValidate();
            aggregateResult = customValidationResult ? ValidationResult.ok : ValidationResult.required;
        }

        // Regular Validation
        if (!this._customPageValidator[this.currentPageNumber]) {
            aggregateResult = ValidationSingleton.instanceOf().validatePage(this.currentPageId);

            // Requested Validation message is only shown once per page, max three times on the survey 
            if (aggregateResult === ValidationResult.requested) {
                if (this.shownRequestedValidationOnPages.length >= 3 ||
                    this.shownRequestedValidationOnPages.indexOf(this.currentPageId) > -1) {
                    aggregateResult = ValidationResult.ok;
                } else {
                    this.shownRequestedValidationOnPages.push(this.currentPageId);
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
            let questionsToRender = this.getQuestionsToRender();
            let avoidInfinteLoopCount = 0; // avoid an infinite loop
            while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
                console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
                this._currentPageIndex++;
                questionsToRender = this.getQuestionsToRender();
            }

            this.notifyObservers();
        } else {
            console.log('Calculated aggregate validation is: ValidationResult.' + ValidationResult[aggregateResult]);
        }

    }

    back() {
        this._currentPageIndex--;

        // Verify page is has at leat one visible Question            
        let questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
        let avoidInfinteLoopCount = 0;
        while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
            this._currentPageIndex--;
            questionsToRender = this.getQuestionsToRender();
        }

        this.notifyObservers();
    }

    /**
     * This is used by the ReContact page since the page.  If the user doesn't want to be contacted,
     *  transition to the next page without any validation.
     */
    nextWithNoValidation() {
        this._currentPageIndex++;

        // Verify page is has at least one visible Question            
        let questionsToRender = this.getQuestionsToRender();
        let avoidInfinteLoopCount = 0; // avoid an infinite loop
        while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page index ' + this._currentPageIndex + ' because there are no visible questions');
            this._currentPageIndex++;
            questionsToRender = this.getQuestionsToRender();
        }

        this.notifyObservers();
    }

    requestPageControlRevalidate() {
        // plugh - This may not be efficient + it validatin might be called several times
        ValidationSingleton.instanceOf().validatePage(this.currentPageId);
    }

    setPageId(pageId: number) {
        let pageIndex = SeedDataSingleton.instanceOf().getPageIndexFromPageId(pageId);
        this._currentPageIndex = pageIndex;
    }

    // Observer registration. Components register here to be notified of changes
    registerAsObserver(observer: IObservable) {
        this._observers.push(observer);
    };

    // Loop through all registered observers, notifying each one
    notifyObservers() {
        console.log('Number of observers: ' + this._observers.length);
        for (let curObserver of this._observers) {
            if (curObserver) {
                curObserver.oberservedDataChanged();
            }
        }
    }

    // Observer registration. Components register here to be notified of changes
    registerAsCustomValidator(validator: ICustomValidator) {
        this._customPageValidator[this.currentPageNumber] = validator;
    };

}
