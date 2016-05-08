import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';
import { USERINPUT_SCENARIO1 } from  '../../app/seed-data-for-debugging/json-user-input-senario1';

@Injectable()
export class UserInputService {

    private _UserInput: UserInput[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this._UserInput = new Array<UserInput>();
        this._UserInput = USERINPUT_SCENARIO1; // Default User Input data to a known state
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
}
