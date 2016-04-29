import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';

export class MatrixElement {
    question_id: number;
    sort_order: number;
    answer_category: string;
    text: string;
    tracking_key: string;
    validation_type: ValidationType;

    // Below not populated from JSON file
    validation_result: ValidationResult;
}
