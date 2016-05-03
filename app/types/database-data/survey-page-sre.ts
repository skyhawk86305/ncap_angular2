import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

export class SurveyPageSre {
    SURVEY_ID: number;
    SEQ_ID: number;
    SEQ_PAG_ID: number;
    SRE_SORT_ORDER: number;
    SEQ_SRE_UID: number;
    SEQ_SUBU_GROUP: number;
    PAGE_SORT_ORDER: number;

    //  validation_type: ValidationType;

    // Below not populated from JSON file
    validation_result: ValidationResult;
    show_validation: boolean;
}
