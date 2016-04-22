import { Injectable } from 'angular2/core';

@Injectable()
export class ApplicationStateService {
    private _currentPage: number;
    private _totalPages: number;

    constructor() {
        this.initialize();
    }

    initialize() {
        this._currentPage = 1;


    }

    getCurrentPage() {
        return this._currentPage;
    }

    getPercentageComplete() {
        let percentage: number = this._currentPage * this._totalPages * 100;
        percentage = Math.round(percentage);

        return percentage;
    }

}
