import { Injectable } from '@angular/core';
import { UserInputService } from '../../app/services/user-input.service';
import { PageControllerComponent } from  '../../app/components/page-controller/page-controller.component';

@Injectable()
export class ApplicationStateService {

    public diagMode: boolean = false;
    shownRequestedValidation: number = 0;

    private _currentPageNumber: number = 1;
    private _totalPages: number = 40; // xyzzy5
    private _pageControllerComponent: PageControllerComponent;

    constructor(
        private _userInputService: UserInputService
    ) {
    }

    registerPageControllerComponent(pageControllerComponent: PageControllerComponent) {
        this._pageControllerComponent = pageControllerComponent;
    };

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

    next() {
        this._currentPageNumber++;

        this._pageControllerComponent.getQuestionsToRender();
    }

    back() {
        this._currentPageNumber--;
        this._pageControllerComponent.getQuestionsToRender();
    }

    requestPageControlRevalidate() {
        // xyzzy This may not be efficient. Maybe tune later?
        this._pageControllerComponent.runValidationOnCurrentQuestions();
    }
}
