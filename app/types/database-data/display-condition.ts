// import { ValidationType } from '../../../app/types/enums/validation-type.enum';
// import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

export class DisplayCondition {
    id: number;
    condition_group: number;
    obj_order: number;
    logical_operator: string;
    sre_uid_lhs: number;
    relation: string;
    dom_sub_id_rhs: number;
    comments: string;
}
