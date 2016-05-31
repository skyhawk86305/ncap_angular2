import { IObservable } from '../../app/other-logic/i-observable';
import { AnswerCategory } from '../../app/types/enums/answer-category.enum';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { Page } from '../../app/types/database-data/page';

export class NavigationSingleton {

    private static _instance: NavigationSingleton = new NavigationSingleton();

    public show_validation: boolean;
    public diagMode = false; // Is the app in Diagnostic Mode?
    public shownRequestedValidationOnPages: number[] = new Array<number>(); // Pages already shown Requested Validation 

    private _currentPageNumber: number = 1;
    private _observers: Array<IObservable> = new Array<IObservable>();

    public static instanceOf(): NavigationSingleton {
        return NavigationSingleton._instance;
    }

    constructor() {
        NavigationSingleton._instance = this;
    }

    getPageToRender(): Page {
        // plugh need to reconcile use of page number and page id
        let result = SeedDataSingleton.instanceOf().getPage(this._currentPageNumber);

        return result;
    }

    getQuestionsToRender(): { questions: PageQuestion[], pageVisible: boolean, renderButtons: boolean } {
        // Find questions for current page
        let pageId = NavigationSingleton.instanceOf().getCurrentPageNumber();
        let questions: PageQuestion[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);

        let atLeastOneVisibleQuestion = false;

        for (let curQuestion of questions) {
            if (curQuestion.sre_anca_id !== AnswerCategory.No_Answer) {
                atLeastOneVisibleQuestion = atLeastOneVisibleQuestion || curQuestion.visible;
            }
        }

        return { questions: questions, pageVisible: atLeastOneVisibleQuestion, renderButtons: pageId > 2 };
    }

    // Navigation
    next() {
        let aggregateResult = ValidationSingleton.instanceOf().validatePage(this._currentPageNumber);

        // Requested Validation message is only shown once per page, max three times on the survey 
        if (aggregateResult === ValidationResult.requested) {
            if (this.shownRequestedValidationOnPages.length >= 3 ||
                this.shownRequestedValidationOnPages.indexOf(this.getCurrentPageNumber()) > -1) {
                aggregateResult = ValidationResult.ok;
            } else {
                this.shownRequestedValidationOnPages.push(this.getCurrentPageNumber());
            }
        }

        // If validation should be shown update show_validation property in the questions
        if (aggregateResult !== ValidationResult.ok) {
            this.show_validation = true;
        }

        // If validation was ok, then go to the next page
        if (aggregateResult === ValidationResult.ok) {
            this._currentPageNumber++;
            this.show_validation = false;

            // Verify page is has at least one visible Question            
            let questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
            let avoidInfinteLoopCount = 0; // avoid an infinite loop
            while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
                console.log('Skipping page ' + this._currentPageNumber + ' because there are no visible questions');
                this._currentPageNumber++;
                questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
            }

            this.notifyObservers();
        } else {
            console.log('Calculated aggregate validation is: ValidationResult.' + ValidationResult[aggregateResult]);
        }

    }

    back() {
        this._currentPageNumber--;

        // Verify page is has at leat one visible Question            
        let questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
        let avoidInfinteLoopCount = 0;
        while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page ' + this._currentPageNumber + ' because there are no visible questions');
            this._currentPageNumber--;
            questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
        }

        this.notifyObservers();
    }

    requestPageControlRevalidate() {
        // plugh - This may not be efficient + it validatin might be called several times
        ValidationSingleton.instanceOf().validatePage(this._currentPageNumber);
    }

    getCurrentPageNumber() {
        return this._currentPageNumber;
    }

    setPageNumber(pageNumber: number) {
        this._currentPageNumber = pageNumber;
    }

    getPercentageComplete() {
        let totalPages = SeedDataSingleton.instanceOf().totalPages;
        let percentage: number = (this._currentPageNumber / totalPages) * 100;
        percentage = Math.round(percentage);

        return percentage;
    }

    // Observer registration. Components register here to be notified of changes
    registerAsObserver(observer: IObservable) {
        this._observers.push(observer);
    };

    // Loop through all registered observers, notifying each one
    notifyObservers() {
        for (let curObserver of this._observers) {
            if (curObserver) {
                curObserver.oberservedDataChanged();
            }
        }
    }
}
