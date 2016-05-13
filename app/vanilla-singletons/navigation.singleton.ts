import { Question } from  '../../app/types/question';
import { QuestionContainerComponent } from  '../../app/components/question-containter/question-containter.component';
import { ValidationResult } from  '../../app/types/enums/validation-result.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { ValidationSingleton } from '../../app/vanilla-singletons/validation.singleton';

export class NavigationSingleton {

    private static _instance: NavigationSingleton = new NavigationSingleton();

    private _QuestionContainerComponent: QuestionContainerComponent;
    private _currentPageNumber: number = 1;
    private _totalPages: number = 40; // xyzzy5

    // xyzzy5 these should not stay here 
    public diagMode: boolean = false;
    shownRequestedValidation: number = 0;

    public static instanceOf(): NavigationSingleton {
        return NavigationSingleton._instance;
    }

    constructor() {
        if (NavigationSingleton._instance) {
            throw new Error('Error: Instantiation failed: Use .instanceOf() instead of new.');
        }
        NavigationSingleton._instance = this;
    }

    // xyzzy5 - try to remove dependance on this method + trigger when necssary from a Singleton
    runValidationOnCurrentQuestions(): ValidationResult {
        let aggregateResult: ValidationResult = ValidationSingleton.instanceOf()
            .validateQuestionArray(NavigationSingleton.instanceOf().getQuestionsToRender());
        return aggregateResult;
    }

    getQuestionsToRender(): Question[] {
        // filter the quesions to the page we are concerned with
        let pageId = NavigationSingleton.instanceOf().getCurrentPageNumber();
        let result: Question[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);

        // Todo: hack, improve later
        // xyzzy5
        //this.renderButtons = pageId > 2;

        console.log('qu count is ' + result.length);

        return result;
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

        let curQuesions: Question[] = NavigationSingleton.instanceOf().getQuestionsToRender()

        // If validation should be show update show_validation property in the questions
        if (aggregateResult !== ValidationResult.ok) {
            for (let curQuestion of curQuesions) {
                curQuestion.show_validation = true;
            }
        }

        // If validation was ok, then let go to the next page
        if (aggregateResult === ValidationResult.ok) {
            this._currentPageNumber++;
            if (this._QuestionContainerComponent) {
                this._QuestionContainerComponent.refreshFromModel();
            }
        } else {
            console.log('Aggregate validation is ' + ValidationResult[aggregateResult]);
        }

    }

    back() {
        this._currentPageNumber--;
        if (this._QuestionContainerComponent) {
            this._QuestionContainerComponent.refreshFromModel();
        }
    }

    // Methods to notify the Page Controller of changes
    registerQuestionContainerComponent(QuestionContainerComponent: QuestionContainerComponent) {
        this._QuestionContainerComponent = QuestionContainerComponent;
    };

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

    setTotalPages(totalPages: number) {
        this._totalPages = totalPages;
    }

    getPercentageComplete() {
        let percentage: number = (this._currentPageNumber / this._totalPages) * 100;
        percentage = Math.round(percentage);

        return percentage;
    }
}
