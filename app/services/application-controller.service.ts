import { Injectable } from 'angular2/core';
import { UserInputSingleton } from '../../app/services/user-input.singleton';
import { QuestionContainerComponent } from  '../../app/components/question-containter/question-containter.component';

@Injectable()
export class ApplicationControllerService {

    public diagMode: boolean = false;
    shownRequestedValidation: number = 0;

    private _currentPageNumber: number = 1;
    private _totalPages: number = 40; // xyzzy5
    private _QuestionContainerComponent: QuestionContainerComponent;

    constructor(
        
    ) {
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
