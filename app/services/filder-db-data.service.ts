import { Injectable } from 'angular2/core';

import { LoadJsonDataService } from '../../app/services/load-json-data.service';
import { AllDataBaseData } from '../types/database-data/all-database-data';


@Injectable()
export class FilterDbDataService {

    constructor(
        private _userInputService: UserInputService
    ) {
        this.initialize();
    }

    initialize() {
    }

}
