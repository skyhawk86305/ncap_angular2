import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../../app/types/enums/format-category.enum';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { displayConditionDict } from '../../../app/seed-data/display_condition_dict';
import { DisplayCondition } from '../../../app/types/database-data/display_condition';

export class PageQuestion {

    // Not populated directly from DB Data:
    page_id: number; // Used in Diag mode
    toolTipId: number; // xyzzy Temp property to get Tooltips partially working
    validation_result: ValidationResult;
    validation_type: ValidationType;
    show_validation: boolean;

    constructor(
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
            result = false;
            console.log('parent_sre_disp_id = ' + this.parent_sre_disp_id + ' for ' + this.txt_parent_lang1);

            let displayConditions: DisplayCondition[] = displayConditionDict[this.parent_sre_disp_id];

            for (let curDisplayCondition of displayConditions) {
                if (curDisplayCondition.relation === 'EQUAL') {
                    console.log('EQUAL tracking_key ' + curDisplayCondition.tracking_key);
                    result = false;
                    let userInput = UserInputSingleton.instanceOf().getUserInput(curDisplayCondition.tracking_key);
                    if (userInput) {
                        let expectedValue = userInput.storedValue;
                        console.log('expectedValue is ' + expectedValue);
                        console.log('stored_value is ' + curDisplayCondition.stored_value);
                        result = (+expectedValue === +curDisplayCondition.stored_value);
                        console.log('result is ' + result);
                    }
                }
            }

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
