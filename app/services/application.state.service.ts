import { Injectable } from 'angular2/core';



@Injectable()
export class ApplicationStateService {

    private _currentPage: number;
    private _totalPages: number;
    private _UserInputMap: { [key: string]: string; } = {};

    constructor() {
        this.initialize();
    }

    initialize() {
        this._currentPage = 1;

        this._UserInputMap['test1'] = '1test';
        this._UserInputMap['test2'] = '2test';
    }

    getCurrentPage() {
        return this._currentPage;
    }

    getPercentageComplete() {
        let percentage: number = this._currentPage * this._totalPages * 100;
        percentage = Math.round(percentage);

        return percentage;
    }

    getUserInput() {
        return this._UserInputMap;
    }

}
