import { QuestionContainerComponent } from  '../../app/components/page-level/question-containter/question-containter.component';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';
import { PageQuestion } from '../../app/types/database-data/new/page-question';

export class NavigationSingleton {

    private static _instance: NavigationSingleton = new NavigationSingleton();
    public diagMode = false; // Is the app in Diagnostic Mode?
    public shownRequestedValidation: number = 0; // We only show 'Requested Validation' message three times
    private _currentPageNumber: number = 1;
    private _observer: QuestionContainerComponent; // We could use an interface instead of coupling to the class' type

    public static instanceOf(): NavigationSingleton {
        return NavigationSingleton._instance;
    }

    constructor() {
        NavigationSingleton._instance = this;
    }

    // xyzzy5 - try to remove dependence on this method + trigger when necessary from a Singleton
    runValidationOnCurrentQuestions(): ValidationResult {
        let questionsToValidate = NavigationSingleton.instanceOf().getQuestionsToRender().questions;
        let aggregateResult: ValidationResult = ValidationSingleton.instanceOf()
            .validateQuestionArray(questionsToValidate);
        return aggregateResult;
    }

    getQuestionsToRender(): { questions: PageQuestion[], pageVisible: boolean, renderButtons: boolean } {
        // Find questions for current page
        let pageId = NavigationSingleton.instanceOf().getCurrentPageNumber();
        let questions: PageQuestion[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);

        let atLeastOneVisibleQuestion = false;

        for (let curQuestion of questions) {
            atLeastOneVisibleQuestion = atLeastOneVisibleQuestion || curQuestion.visible;
        }

        return { questions: questions, pageVisible: atLeastOneVisibleQuestion, renderButtons: pageId > 2 };
    }

    // Navigation
    next() {
        let aggregateResult = this.runValidationOnCurrentQuestions();

        // Requested Validation message is only shown three times 
        if (aggregateResult === ValidationResult.requested) {
            if (NavigationSingleton.instanceOf().shownRequestedValidation >= 3) {
                aggregateResult = ValidationResult.ok;
            }
            NavigationSingleton.instanceOf().shownRequestedValidation++;
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

            // Verify page is has at leat one visible Question            
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
        NavigationSingleton.instanceOf().runValidationOnCurrentQuestions();
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
    registerAsObserver(QuestionContainerComponent: QuestionContainerComponent) {
        this._observer = QuestionContainerComponent;
    };
}
