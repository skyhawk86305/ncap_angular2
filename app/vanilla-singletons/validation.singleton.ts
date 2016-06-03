import { SubuQuestion } from '../../app/types/database-data/subu-question';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { UserInput } from  '../../app/types/database-data/user-input';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';
import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { SeedDataSingleton } from '../../app/vanilla-singletons/seed-data.singleton';
import { UserInputSingleton } from '../../app/vanilla-singletons/user-input.singleton';
import { SeedDataMatrixSingleton } from '../../app/vanilla-singletons/seed-data-matrix.singleton';
import { NavigationSingleton } from '../../app/vanilla-singletons/navigation.singleton';
import { AnswerCategory } from '../../app/types/enums/answer-category.enum';

export class ValidationSingleton {

    private static _instance: ValidationSingleton = new ValidationSingleton();

    public static instanceOf(): ValidationSingleton {
        return ValidationSingleton._instance;
    }

    constructor() {
        ValidationSingleton._instance = this;
    }

    public validatePage(pageId: number): ValidationResult {
        // Get all questions on page
        let questionsToValidate: PageQuestion[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);
        // Run validation on all questions
        let aggregateResult: ValidationResult = this._validateQuestionArray(questionsToValidate);

        return aggregateResult;
    }

    public validateQuestion(question: PageQuestion): ValidationResult {
        let result: ValidationResult;

        let isMatrix: boolean = [10, 11, 12, 13, 14, 15].indexOf(question.sre_anca_id) > -1;

        // if (question.sre_anca_id === AnswerCategory.Skip) {
        //     result = ValidationResult.ok;
        // }

        // If not a matrix does this questions need validating?
        if (!isMatrix && result === undefined) {
            result = this._validateNonMatrixQuestion(question);
        }

        if (isMatrix) {
            result = this._validateMatrixQuestion(question);
        }

        return result;
    }

    public calculateAggregateValidationCSS(question: PageQuestion) {
        let aggregateResult: ValidationResult = this.validateQuestion(question);
        let resultingCss = '';

        if (NavigationSingleton.instanceOf().DisplayValidationAtPageLevel) {
            resultingCss = this._translateValidationResultToCssClass(aggregateResult);
        }
        return resultingCss;
    }

    public calculateSubuElementValidationCSS(curMatrixElement: SubuQuestion) {
        let validationResult = this._validateSubuElement(curMatrixElement);
        let resultingCss = this._translateValidationResultToCssClass(validationResult);
        return resultingCss;
    }

    private _translateValidationResultToCssClass(validationResult: ValidationResult) {
        let resultingCss = '';

        switch (validationResult) {
            case ValidationResult.requested:
                resultingCss = 'ncap-requested';
                break;
            case ValidationResult.required:
                resultingCss = 'ncap-required';
                break;
            default:
                resultingCss = '';
                break;
        }

        return resultingCss;
    }

    private _validateSubuElement(curMatrixElement: SubuQuestion): ValidationResult {
        let result: ValidationResult;

        let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(curMatrixElement.tracking_key);
        let storedValue = userInput ? userInput.storedValue : '';
        let fieldPopulated: boolean = storedValue !== null && storedValue.length > 0;

        if (fieldPopulated) {
            result = ValidationResult.ok;
        }

        // Special case: If Yes selected then '_noticed' must also be populated
        if (userInput && +userInput.storedValue === 1
            && curMatrixElement.sre_anca_id === AnswerCategory.RadioButtons_in_Matrix_DropDownLastCol) {
            let userInput2: UserInput = UserInputSingleton.instanceOf().getUserInput(curMatrixElement.tracking_key + '_noticed');
            if (!userInput2) {
                fieldPopulated = false;
                result = ValidationResult.required;
            }
        }

        if (result === undefined) {
            switch (curMatrixElement.bypass_enum_code) {
                case ValidationType.requested:
                    result = ValidationResult.requested;
                    break;
                case ValidationType.required:
                    result = ValidationResult.required;
                    break;
                default:
                    result = ValidationResult.ok;
                    break;
            }
        }

        return result;
    }

    private _validateQuestionArray(questions: PageQuestion[]): ValidationResult {
        let aggregateResult: ValidationResult = ValidationResult.ok;

        for (let curQuestion of questions) {
            curQuestion.validation_result = ValidationSingleton.instanceOf().validateQuestion(curQuestion);

            // Higher numberic values are stronger. Note this code relies on us hard-coding int values of the enum 
            if (curQuestion.validation_result > aggregateResult) {
                aggregateResult = curQuestion.validation_result;
            }
        }

        return aggregateResult;
    }

    private _validateNonMatrixQuestion(question: PageQuestion): ValidationResult {
        let result: ValidationResult;

        if (question.bypass_enum_code === ValidationType.optional || question.bypass_enum_code === ValidationType.notApplicable) {
            result = ValidationResult.ok;
        }

        // Some data has a tracking key of null + is flagged as required/requested! Ignore these:
        if (result === undefined && question.tracking_key === null) {
            result = ValidationResult.ok;
        }

        // If a decision was not made above then validate
        if (result === undefined) {
            let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(question.tracking_key);
            let storedValue = userInput ? userInput.storedValue : '';
            let populated = storedValue !== null && storedValue.length > 0;
            if (populated) {
                result = ValidationResult.ok;
            } else {
                // Value was not populated. Reture required or requested
                result = (question.bypass_enum_code === ValidationType.requested) ? ValidationResult.requested : ValidationResult.required;
            }
        }
        return result;
    }

    private _validateMatrixQuestion(question: PageQuestion): ValidationResult {
        let agregateResult: ValidationResult = ValidationResult.ok;

        let matrixElements: SubuQuestion[] = SeedDataMatrixSingleton.instanceOf().getMatrixElementsForSreUid(question.sre_uid);

        for (let curSubu of matrixElements) {
            let curResult: ValidationResult;
            if (curSubu.bypass_enum_code === ValidationType.optional || curSubu.bypass_enum_code === ValidationType.notApplicable) {
                curResult = ValidationResult.ok;
            } else {
                curResult = this._validateSubuElement(curSubu);
            }

            // Higher numberic values are stronger. Note this code relies on us hard-coding int values of the enum 
            if (curResult > agregateResult) {
                agregateResult = curResult;
            }
        }

        return agregateResult;
    }

}
