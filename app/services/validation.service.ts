import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';

import { ApplicationStateService } from '../../app/services/application.state.service';

@Injectable()
export class ValidationService {

    constructor(
        private _applicationStateService: ApplicationStateService
    ) {
    }

    validatePage(pageId: number): boolean {
        let result = false;

        // Find questions and interate through

        return result;
    }

    validateQuestion(questionId: number): boolean {
        let result = false;

        // If a matrix question iterate through all rows

        return result;
    }

    validateMatrixRow(questionId: number): boolean {
        let result = false;
        return result;
    }
}
