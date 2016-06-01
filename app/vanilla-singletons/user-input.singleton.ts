import { UserInput } from  '../../app/types/database-data/user-input';

export class UserInputSingleton {

    private static _instance: UserInputSingleton = new UserInputSingleton();
    private _UserInput: UserInput[] = new Array<UserInput>();

    public static instanceOf(): UserInputSingleton {
        return UserInputSingleton._instance;
    }

    constructor() {
        // Default values
        this.setUserInput('respondent_type', 'parent');
        this.setUserInput('asd_yes_no', '1');
        this.setUserInput('proband_DOB', '2010-05-01'); // plugh - find the correct default and calculate
        UserInputSingleton._instance = this;
    }

    getAllUserInput() {
        return this._UserInput;
    }

    getUserInput(trackingKey: string) {
        let item: UserInput = this._UserInput.find((i: UserInput) => i.trackingKey === trackingKey);

        return item;
    }

    setUserInput(trackingKey: string, enteredValue: string) {
        // Is this item already in the array?
        let userInputEntry: UserInput = this._UserInput.find((i: UserInput) => i.trackingKey === trackingKey);
        if (!userInputEntry) {
            userInputEntry = new UserInput();
            userInputEntry.trackingKey = trackingKey;
            this._UserInput.push(userInputEntry);
        }

        userInputEntry.storedValue = enteredValue;
    }

    // Used to set User Input data to a known state (for testing purposes)
    defaultUserInput(data: UserInput[]) {
        this._UserInput = data;
    }

    /**
     * This is used by the ReContact page.  If the user had previous entered his contact
     *  information but changed his mind later, the contact data needs to be removed from the _UserInput.
     *
     * @param trackingKey   Question tracking key
     */
    removeUserInput(trackingKey: string) {
        for (let i = 0; i < this._UserInput.length; i++) {
            let key = this._UserInput[i].trackingKey;
            if (key === trackingKey) {
                this._UserInput.splice(i, 1);
            }
        }
    }
}
