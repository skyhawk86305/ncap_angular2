import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';
import { USERINPUT_SCENARIO1 } from  '../../app/seed-data-for-debugging/json-user-input-senario1';

import { PageComponent } from  '../../app/components/page/page.component';

@Injectable()
export class ApplicationStateService {

    private _currentPageNumber: number;
    private _totalPages: number;
    private _pageComponent: PageComponent;
    private _UserInput: UserInput[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this._currentPageNumber = 25;
        this._UserInput = new Array<UserInput>();
        //this._UserInput = USERINPUT_SCENARIO1; // Default User Input data to a known state
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

    getAllUserInput() {
        return this._UserInput;
    }

    getUserInput(trackingKey: string) {
        let item: UserInput = this._UserInput.find(i => i.trackingKey === trackingKey);

        return item;
    }

    setUserInput(trackingKey: string, enteredValue: string) {
        // Is this item already in the array?
        let userInputEntry: UserInput = this._UserInput.find(i => i.trackingKey === trackingKey);
        if (!userInputEntry) {
            userInputEntry = new UserInput();
            userInputEntry.trackingKey = trackingKey;
            this._UserInput.push(userInputEntry);
        }

        userInputEntry.storedValue = enteredValue;
    }

    next() {
        this._currentPageNumber++;
        this._pageComponent.getQuestionsToRender();
    }

    back() {
        this._currentPageNumber--;
        this._pageComponent.getQuestionsToRender();
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
