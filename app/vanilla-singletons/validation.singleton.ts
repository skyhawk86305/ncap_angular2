import { SubuQuestion } from '../../app/types/database-data/subu-question';
import { Page } from '../../app/types/database-data/page';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { UserInput } from  '../../app/types/user-input';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';
import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { UserInputSingleton } from '../../app/vanilla-singletons/user-input.singleton';

export class ValidationSingleton {

    private static _instance: ValidationSingleton = new ValidationSingleton();

    public static instanceOf(): ValidationSingleton {
        return ValidationSingleton._instance;
    }

    constructor() {
        ValidationSingleton._instance = this;
    }

    validateQuestionArray(questions: PageQuestion[]): ValidationResult {
        let aggregateResult: ValidationResult = ValidationResult.ok;

        for (let curQuestion of questions) {
            curQuestion.validation_result = ValidationSingleton.instanceOf().validateQuestion(curQuestion);

            if (curQuestion.validation_result > aggregateResult) {
                aggregateResult = curQuestion.validation_result; // xyzzy Note this code relies on the int values of the enum
            }
        }

        return aggregateResult;
    }

    validatePage(pageId: number): ValidationResult {
        // Get all questions on page
        let questionsToValidate: PageQuestion[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);
        // Run validation on all questions
        let aggregateResult: ValidationResult = ValidationSingleton.instanceOf().validateQuestionArray(questionsToValidate);

        return aggregateResult;
    }

    validateQuestion(question: PageQuestion): ValidationResult {
        let result: ValidationResult;

        if (question.bypass_enum_code === ValidationType.optional || question.bypass_enum_code === ValidationType.notApplicable) {
            result = ValidationResult.ok;
        } else {
            let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(question.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (question.bypass_enum_code === ValidationType.requested) ?
                    ValidationResult.requested : ValidationResult.required;
            }
        }

        // xyzzy5 cater for Matrix types 
        console.log('xyzzy validation');

        return result;
    }

    validateMatrixElement(matrixElement: SubuQuestion) {
        let result: ValidationResult;

        if (matrixElement.bypass_enum_code === ValidationType.optional) {
            result = ValidationResult.ok;
        } else {
            let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(matrixElement.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                result = (matrixElement.bypass_enum_code === ValidationType.requested) ?
                    ValidationResult.requested : ValidationResult.required;
            }
        }

        matrixElement.validation_result = result;
    }

}
