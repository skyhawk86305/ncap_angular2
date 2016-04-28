import { Injectable } from 'angular2/core';

import { UserInput } from  '../../app/types/user-input';

import { MatrixElement } from '../../app/types/matrix-element';
import { MATRIXELEMENTS } from '../../app/seed-data/json-matrix-elements';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';

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

    validateQuestion(questionId: number): boolean {
        let result = false;

        // If a matrix question iterate through all rows

        return result;
    }

    validateMatrixRow(matrixElement: MatrixElement): ValidationResult {
        let result: ValidationResult;

        if (matrixElement.validation_type = 'OPTIONAL') {
            result = ValidationResult.ok;
        } else {
            let userInput: UserInput = this._applicationStateService.getUserInput(matrixElement.tracking_id);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (matrixElement.validation_type === 'REQUESTED') ?
                    ValidationResult.RequestedMissing : ValidationResult.RequiredMissing;
            }
        }

        return result;
    }


}
