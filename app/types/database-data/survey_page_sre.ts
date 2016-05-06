import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

export class SurveyPageSre {
    survey_id: number;
    seq_id: number;
    seq_pag_id: number;
    sre_sort_order: number;
    seq_sre_uid: number;
    seq_subu_group: number;
    page_sort_order: number;

    //  validation_type: ValidationType;

    // Below not populated from JSON file
    validation_result: ValidationResult;
    show_validation: boolean;
}
