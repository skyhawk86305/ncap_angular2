import { QuestionContainerComponent } from  '../../app/components/question-containter/question-containter.component';

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

    // Navigation
    next() {
        this._currentPageNumber++;
        this._QuestionContainerComponent.getQuestionsToRender();
    }

    back() {
        this._currentPageNumber--;
        this._QuestionContainerComponent.getQuestionsToRender();
    }

    // Methods to notify the Page Controller of changes
    registerQuestionContainerComponent(QuestionContainerComponent: QuestionContainerComponent) {
        this._QuestionContainerComponent = QuestionContainerComponent;
    };

    requestPageControlRevalidate() {
        // xyzzy This may not be efficient. Maybe tune later?
        this._QuestionContainerComponent.runValidationOnCurrentQuestions();
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
