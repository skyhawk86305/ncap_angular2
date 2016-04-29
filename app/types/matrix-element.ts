import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';
import { UserInput } from  '../../app/types/user-input';

import { ApplicationStateService } from '../../app/services/application.state.service';

export class MatrixElement {
    question_id: number;
    sort_order: number;
    answer_category: string;
    text: string;
    tracking_key: string;
    validation_type: ValidationType;
    // Below not populated from JSON file
    validation_result: ValidationResult;

    constructor(
        private _applicationStateService: ApplicationStateService
    ) {
    }

    validate() {
        let result: ValidationResult;

        if (this.validation_type === ValidationType.optional) {
            result = ValidationResult.ok;
        } else {
            let userInput: UserInput = this._applicationStateService.getUserInput(this.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (this.validation_type === ValidationType.requested) ?
                    ValidationResult.RequestedMissing : ValidationResult.RequiredMissing;
            }
        }

        this.validation_result = result;
    }

}
