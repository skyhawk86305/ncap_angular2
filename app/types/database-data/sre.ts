// 
// import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { AnswerCategory } from '../../../app/types/enums/answer-category';
import { FormatCategory } from '../../../app/types/enums/format-category';

//bypass_property is import { ValidationType } from '../../../app/types/enums/validation-type.enum'; 

export class Sre {
    obj_uid: number;
    block: string;
    parent_sre_disp_id: number;
    legalrep_sre_disp_id: number;
    selfreport_sre_disp_id: number;
    sre_foca_id: FormatCategory;
    sre_anca_id: AnswerCategory;
    bypass_property: string;
    higher_lvl_uid: number;
    txt_parent_lang1: string;
    txt_legalrep_lang1: string;
    txt_selfreport_lang1: string;
    parent_sre_dona_id: number;
    legalrep_sre_dona_id: number;
    selfreport_sre_dona_id: number;
    tracking_key: string;
    def_disp_value: string;
    parent_sre_varu_id: number;
    legalrep_sre_varu_id: number;
    selfreport_sre_varu_id: number;
    error_msg_lang1: string;
    bypass_var: string;
}
