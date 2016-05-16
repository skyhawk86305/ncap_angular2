import { Question } from  '../../app/types/question';
import { QuestionContainerComponent } from  '../../app/components/question-containter/question-containter.component';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';

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

    // xyzzy5 - try to remove dependence on this method + trigger when necssary from a Singleton
    runValidationOnCurrentQuestions(): ValidationResult {
        let aggregateResult: ValidationResult = ValidationSingleton.instanceOf()
            .validateQuestionArray(NavigationSingleton.instanceOf().getQuestionsToRender().questions);
        return aggregateResult;
    }

    getQuestionsToRender(): { questions: Question[], pageVisible: boolean, renderButtons: boolean } {
        // filter the quesions to the page we are concerned with
        let pageId = NavigationSingleton.instanceOf().getCurrentPageNumber();
        let questions: Question[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);

        let atLeastOneVisibleQuestion = false;

        for (let curQuestion of questions) {
            atLeastOneVisibleQuestion = atLeastOneVisibleQuestion || curQuestion.visible();
        }

        console.log('qu count is ' + questions.length);

        return { questions: questions, pageVisible: atLeastOneVisibleQuestion, renderButtons: pageId > 2 };
    }

    // Navigation
    next() {
        let aggregateResult = this.runValidationOnCurrentQuestions();

        // Requested Validation is only asked for up to three times 
        if (aggregateResult === ValidationResult.requested) {
            if (NavigationSingleton.instanceOf().shownRequestedValidation >= 3) {
                aggregateResult = ValidationResult.ok;
            }
            NavigationSingleton.instanceOf().shownRequestedValidation++;
        }

        let curQuestions: Question[] = NavigationSingleton.instanceOf().getQuestionsToRender().questions;

        // If validation should be show update show_validation property in the questions
        if (aggregateResult !== ValidationResult.ok) {
            for (let curQuestion of curQuestions) {
                curQuestion.show_validation = true;
            }
        }

        // If validation was ok, then let go to the next page
        if (aggregateResult === ValidationResult.ok) {
            this._currentPageNumber++;

            // Verify page is has at leat one visible Question            
            let questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
            let avoideInfinteLoopCount = 0; // avoid an infinite loop
            while (avoideInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
                console.log('Skipping page ' + this._currentPageNumber + ' becuase there are no visible questions');
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
        let avoideInfinteLoopCount = 0;
        while (avoideInfinteLoopCount++ < 10 && !questionsToRender.pageVisible) {
            console.log('Skipping page ' + this._currentPageNumber + ' becuase there are no visible questions');
            this._currentPageNumber--;
            questionsToRender = NavigationSingleton.instanceOf().getQuestionsToRender();
        }

        if (this._observer) {
            this._observer.oberservedDataChanged();
        }
    }

    requestPageControlRevalidate() {
        // xyzzy This may not be efficient. Maybe tune later?
        NavigationSingleton.instanceOf().runValidationOnCurrentQuestions();
    }

    // Current page, percentage compelte etc
    getCurrentPageNumber() {
        return this._currentPageNumber;
    }

    setPageNumber(pageNumber: number) {
        console.log('** App State Service: setPageNumber ' + pageNumber);
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
