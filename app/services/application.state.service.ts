import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';

@Injectable()
export class ApplicationStateService {

    private _currentPageNumber: number;
    private _totalPages: number;
    private _UserInput: UserInput[];

    constructor() {
        this.initialize();
    }

    initialize() {
        this._currentPageNumber = 1;
        //this._UserInput = new Array<UserInput>();
        this._UserInput = [
            {
                'trackingKey': 'sex_at_birth',
                'storedValue': 'Male'
            },
            {
                'trackingKey': 'asd_yes_no',
                'storedValue': 'Yes'
            },
            {
                'trackingKey': 'middleNameMother_confirm',
                'storedValue': 'No'
            },
            {
                'trackingKey': 'middleName_confirm',
                'storedValue': 'Yes'
            },
            {
                'trackingKey': 'ethnicity',
                'storedValue': 'Prefer not to answer'
            },
            {
                'trackingKey': 'WalkByOneself',
                'storedValue': 'Don\'t know'
            },
            {
                'trackingKey': 'VerbalSkill',
                'storedValue': 'Speaks in 2 words combinations'
            },
            {
                'trackingKey': 'edu_level_mother',
                'storedValue': 'High school graduate (or equivalent)'
            },
            {
                'trackingKey': 'breastfed',
                'storedValue': 'No'
            },
            {
                'trackingKey': 'tobacco_use_mother',
                'storedValue': 'No'
            },
            {
                'trackingKey': 'breastfed_duration',
                'storedValue': '7-12 months'
            },
            {
                'trackingKey': 'Second_hand_smoke_freq_mother',
                'storedValue': '1+ times per day'
            },
            {
                'trackingKey': 'seafood_freq_mother',
                'storedValue': 'Don\'t know'
            },
            {
                'trackingKey': 'prescr_drugs_mother',
                'storedValue': 'Don\'t know'
            },
            {
                'trackingKey': 'OTC_drugs_mother',
                'storedValue': 'No'
            }
        ];
    }

    getCurrentPageNumber() {
        return this._currentPageNumber;
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

    addUserInput(trackingKey: string, enteredValue: string) {
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
    }

    back() {
        this._currentPageNumber--;
    }

}
