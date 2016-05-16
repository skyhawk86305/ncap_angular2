import { UserInput } from  '../../app/types/user-input';

export class UserInputSingleton {

    private static _instance: UserInputSingleton = new UserInputSingleton();
    private _UserInput: UserInput[] = new Array<UserInput>();

    public static instanceOf(): UserInputSingleton {
        return UserInputSingleton._instance;
    }

    constructor() {
        UserInputSingleton._instance = this;
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

    // Used to set User Input data to a known state
    defaultUserInput(data: UserInput[]) {
        this._UserInput = data;
    }
}


