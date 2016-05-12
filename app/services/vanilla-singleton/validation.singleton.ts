import { MatrixElement } from '../../../app/types/matrix-element';
import { Question } from '../../../app/types/question';
import { UserInput } from  '../../../app/types/user-input';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';

export class ValidationSingleton {

    private static _instance: ValidationSingleton = new ValidationSingleton();

    public static getInstance(): ValidationSingleton {
        return ValidationSingleton._instance;
    }

    constructor() {
        if (ValidationSingleton._instance) {
            throw new Error('Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.');
        }
        ValidationSingleton._instance = this;
    }

    validatePage(pageId: number): ValidationResult {
        let result: ValidationResult;

        // Find questions and interate through
        // xyzzy5

        return result;
    }

    validateQuestion(question: Question) {
        let result: ValidationResult;

        if (question.validation_type === ValidationType.optional || question.validation_type === ValidationType.notApplicable) {
            result = ValidationResult.ok;
        } else {
            let userInput: UserInput = UserInputSingleton.getInstance().getUserInput(question.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (question.validation_type === ValidationType.requested) ?
                    ValidationResult.requested : ValidationResult.required;
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
            let userInput: UserInput = UserInputSingleton.getInstance().getUserInput(matrixElement.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (matrixElement.validation_type === ValidationType.requested) ?
                    ValidationResult.requested : ValidationResult.required;
            }
        }

        matrixElement.validation_result = result;
    }

}
