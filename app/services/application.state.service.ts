import { Injectable } from 'angular2/core';

import { UserInputService } from '../../app/services/user.input.service';

import { PageControllerComponent } from  '../../app/components/page.controller/page.controller.component';

@Injectable()
export class ApplicationStateService {

    shownRequestedValidation: number = 0;

    private _currentPageNumber: number;
    private _totalPages: number;
    private _pageControllerComponent: PageControllerComponent;

    constructor(
        private _userInputService: UserInputService
    ) {
        this.initialize();
    }

    initialize() {
        this._currentPageNumber = 3;
    }

    registerPageControllerComponent(pageControllerComponent: PageControllerComponent) {
        this._pageControllerComponent = pageControllerComponent;
    };

    getCurrentPageNumber() {
        return this._currentPageNumber;
    }

    setPageNumber(pageNumber: number) {
        this._currentPageNumber = pageNumber;
    }

    getPercentageComplete() {
        let percentage: number = this._currentPageNumber * this._totalPages * 100;
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

    requestPagecontrolRevalidate() {
        // xyzzy This may not be efficient. Maybe tune later?
        this._pageControllerComponent.runValidationOnCurrentQuestions();
    }
}

// export interface CallbackType { (): void; }
    // private _observerCallbacks: CallbackType[];
        // this._observerCallbacks = new Array<CallbackType>();
    // Code to implement Observe Callbacks - all comonents intersted in notificatrion will register with this code
    // Components that with to SUBCRIBE call this
    // registerObserverCallback(callback: () => void) {
    //     this._observerCallbacks.push(callback);
    // };

    // Components that wish to PUSH notifications call this
    // notifyObservers() {
    //     for (let curCallback of this._observerCallbacks) {
    //         curCallback();
    //     }
    // };
