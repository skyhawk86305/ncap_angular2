import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';

import { MatrixElement } from '../../app/types/matrix-element';
import { Question } from '../../app/types/question';

//import { MATRIXELEMENTS } from '../../app/seed-data/json-matrix-elements';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';
import { ValidationType } from '../../app/types/enums/validation-type.enum';

import { ApplicationStateService } from '../../app/services/application.state.service';
import { SeedDataService } from '../../app/services/seed.data.service';

@Injectable()
export class ValidationService {

    constructor(
        private _applicationStateService: ApplicationStateService,
        private _seedDataService: SeedDataService
    ) {
    }

    validatePage(pageId: number): boolean {
        let result = false;

        // Find questions and interate through

        return result;
    }

    validateQuestion(question: Question) {
        let result: ValidationResult;

        if (question.validation_type === ValidationType.optional) {
            result = ValidationResult.ok;
        } else {
            let userInput: UserInput = this._applicationStateService.getUserInput(question.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (question.validation_type === ValidationType.requested) ?
                    ValidationResult.RequestedMissing : ValidationResult.RequiredMissing;
            }
        }

        // xyzzy5 cater for Matrix types 

        question.validation_result = result;
    }


    validateMatrixElement(matrixElement: MatrixElement) {
        let result: ValidationResult;

        if (matrixElement.validation_type === ValidationType.optional) {
            result = ValidationResult.ok;
        } else {
            let userInput: UserInput = this._applicationStateService.getUserInput(matrixElement.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (matrixElement.validation_type === ValidationType.requested) ?
                    ValidationResult.RequestedMissing : ValidationResult.RequiredMissing;
            }
        }

        matrixElement.validation_result = result;
    }
}


