import { ValidationType } from '../../app/types/enums/validation-type.enum';

export class MatrixElement {
    question_id: number;
    sort_order: number;
    answer_category: string;
    text: string;
    tracking_id: string;
    validation_type: ValidationType;
    // Below not populated from JSON file
    validation_result: string;
}
