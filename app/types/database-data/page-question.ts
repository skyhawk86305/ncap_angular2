import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../../app/types/enums/format-category.enum';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { displayConditionDict } from '../../../app/seed-data/display_condition_dict';
import { DisplayCondition } from '../../../app/types/database-data/display_condition';
import { ProcessDisplayCondition } from '../../../app/other-logic/process-display-conditions';

export class PageQuestion {

    // Not populated directly from DB Data:
    toolTipId: number; // xyzzy Temp property to get Tooltips partially working
    validation_result: ValidationResult;
    validation_type: ValidationType;
    show_validation: boolean;

    constructor(
        public page_id: number,
        public sre_sort_order: number,
        public sre_uid: number,
        public has_subu: number,
        public block: string,
        public parent_sre_disp_id: number,
        public legalrep_sre_disp_id: number,
        public selfreport_sre_disp_id: number,
        public sre_foca_id: FormatCategory,
        public sre_anca_id: AnswerCategory,
        public bypass_enum_code: ValidationType,
        public higher_lvl_uid: number,
        public txt_parent_lang1: string,
        public txt_legalrep_lang1: string,
        public txt_selfreport_lang1: string,
        public parent_sre_dona_id: number,
        public legalrep_sre_dona_id: number,
        public selfreport_sre_dona_id: number,
        public tracking_key: string,
        public def_disp_value: string,
        public parent_sre_varu_id: number,
        public legalrep_sre_varu_id: number,
        public selfreport_sre_varu_id: number,
        public error_msg_lang1: string,
        public bypass_var: string
    ) { }

    get visible(): boolean {
        let result = this.sre_anca_id !== AnswerCategory.Skip;

        // Is there a disp_id to check
        // xyzzy - switch on parent, legal etc
        if (this.parent_sre_disp_id > 0) {
            result = ProcessDisplayCondition.processDisplayCondition(this);
        }

        return result;
    }

    get question_text(): string {
        let userInput = UserInputSingleton.instanceOf().getUserInput('respondent_type');
        let storedValue = userInput ? userInput.storedValue : null;
        let result: string;

        // Switch according to value in tracking_key
        switch (storedValue) {
            case 'legalrep':
                result = this.txt_legalrep_lang1;
                break;
            case 'parent':
                result = this.txt_parent_lang1;
                break;
            case 'selfreport':
                result = this.txt_selfreport_lang1;
                break;
            default:
                result = this.txt_parent_lang1;
                break;
        }

        return result;
    }
}
