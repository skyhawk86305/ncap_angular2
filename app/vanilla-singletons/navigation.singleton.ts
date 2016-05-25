import { AnswerCategory } from '../../app/types/enums/answer-category.enum';
import { NgSwitchPageTypeComponent } from '../../app/components/page-level/ng-switch-page-type/ng-switch-page-type.component';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { Page } from '../../app/types/database-data/page';

export class NavigationSingleton {

    private static _instance: NavigationSingleton = new NavigationSingleton();
    public diagMode = false; // Is the app in Diagnostic Mode?
    public shownRequestedValidationOnPages: number[] = new Array<number>(); // Track which pages have already displayed the Requested Validation message 
    private _currentPageNumber: number = 1;
    private _observer: NgSwitchPageTypeComponent; // We could use an interface instead of coupling to the class' type

    public static instanceOf(): NavigationSingleton {
        return NavigationSingleton._instance;
    }

    constructor() {
        NavigationSingleton._instance = this;
    }

    getPageToRender(): Page {
        let result = SeedDataSingleton.instanceOf().getPage(this._currentPageNumber); //xyzzy5 need to reconcile use of page number and page id

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
            let curQuestions: PageQuestion[] = NavigationSingleton.instanceOf().getQuestionsToRender().questions;
            for (let curQuestion of curQuestions) {
                curQuestion.show_validation = true;
            }
        }

        // If validation was ok, then go to the next page
        if (aggregateResult === ValidationResult.ok) {
            this._currentPageNumber++;

            // Verify page is has at least one visible Question            
            let questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
            let avoidInfinteLoopCount = 0; // avoid an infinite loop
            while (avoidInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
                console.log('Skipping page ' + this._currentPageNumber + ' because there are no visible questions');
                this._currentPageNumber++;
                questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
            }

            if (this._observer) {
                this._observer.oberservedDataChanged();
            }
        } else {
            console.log('Aggregate validation is ' + ValidationResult[aggregateResult]);
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

        if (this._observer) {
            this._observer.oberservedDataChanged();
        }
    }

    requestPageControlRevalidate() {
        // xyzzy This may not be efficient. Tune later?
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

    // Observer registration. We could change to use a vanilla interface
    registerAsObserver(component: NgSwitchPageTypeComponent) {
        this._observer = component;
    };
}

