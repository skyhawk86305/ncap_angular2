import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../../app/types/enums/format-category.enum';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

export class PageQuestion {

    constructor(
        sre_sort_order: number,
        sre_uid: number,
        has_subu: number,
        block: string,
        sre_foca_id: FormatCategory,
        sre_anca_id: AnswerCategory,
        bypass_enum_code: number,
        higher_lvl_uid: number,
        txt_parent_lang1: string,
        txt_legalrep_lang1: string,
        txt_selfreport_lang1: string,
        parent_sre_dona_id: number,
        legalrep_sre_dona_id: number,
        selfreport_sre_dona_id: number,
        tracking_key: string,
        def_disp_value: string,
        parent_sre_varu_id: number,
        legalrep_sre_varu_id: number,
        selfreport_sre_varu_id: number,
        error_msg_lang1: string,
        bypass_var: string
    ) {
        this.sre_sort_order = sre_sort_order;
        this.sre_uid = sre_uid;
        this.has_subu = has_subu;
        this.block = block;
        this.sre_foca_id = sre_foca_id;
        this.sre_anca_id = sre_anca_id;
        this.bypass_enum_code = bypass_enum_code;
        this.higher_lvl_uid = higher_lvl_uid;
        this.txt_parent_lang1 = txt_parent_lang1;
        this.txt_legalrep_lang1 = txt_legalrep_lang1;
        this.txt_selfreport_lang1 = txt_selfreport_lang1;
        this.parent_sre_dona_id = parent_sre_dona_id;
        this.legalrep_sre_dona_id = legalrep_sre_dona_id;
        this.selfreport_sre_dona_id = selfreport_sre_dona_id;
        this.tracking_key = tracking_key;
        this.def_disp_value = def_disp_value;
        this.parent_sre_varu_id = parent_sre_varu_id;
        this.legalrep_sre_varu_id = legalrep_sre_varu_id;
        this.selfreport_sre_varu_id = selfreport_sre_varu_id;
        this.error_msg_lang1 = error_msg_lang1;
        this.bypass_var = bypass_var;
    }

    public sre_sort_order: number;
    public sre_uid: number;
    public has_subu: number;
    public block: string;
    public sre_foca_id: FormatCategory;
    public sre_anca_id: AnswerCategory;
    public bypass_enum_code: number;
    public higher_lvl_uid: number;
    public txt_parent_lang1: string;
    public txt_legalrep_lang1: string;
    public txt_selfreport_lang1: string;
    public parent_sre_dona_id: number;
    public legalrep_sre_dona_id: number;
    public selfreport_sre_dona_id: number;
    public tracking_key: string;
    public def_disp_value: string;
    public parent_sre_varu_id: number;
    public legalrep_sre_varu_id: number;
    public selfreport_sre_varu_id: number;
    public error_msg_lang1: string;
    public bypass_var: string;

    // Below not populated directly from DB Data
    validation_result: ValidationResult;
    validation_type: ValidationType;
    show_validation: boolean;
    toolTipId: number; // xyzzy Temp property to get Tooltips partially working
    page_id: number; // Used iin Diag mode

    get visible(): boolean {
        let result = this.sre_anca_id !== AnswerCategory.Skip;
        return result;
    }

    get question_text(): string {
        // xyzzy5 - Switch according to value in tracking_key
        return this.txt_parent_lang1;
    }
}
