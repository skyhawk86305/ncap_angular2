import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';

import { UserInputService } from '../../app/services/user.input.service';

import { PageComponent } from  '../../app/components/page/page.component';

@Injectable()
export class ApplicationStateService {

    private _currentPageNumber: number;
    private _totalPages: number;
    private _pageComponent: PageComponent;

    constructor(
        private _userInputService: UserInputService
    ) {
        this.initialize();
    }

    initialize() {
        this._currentPageNumber = 3;
    }

    registerPageComponent(pageComponent: PageComponent) {
        this._pageComponent = pageComponent;
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
        this._pageComponent.getQuestionsToRender();
    }

    back() {
        this._currentPageNumber--;
        this._pageComponent.getQuestionsToRender();
    }

    requestPagecontrolRevalidate() {
        // xyzzy this may not be particualr efficient. Maybe tune later?
        this._pageComponent.runValidationOnCurrentQuestions();
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
