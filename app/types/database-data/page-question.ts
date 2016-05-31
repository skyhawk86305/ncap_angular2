import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../../app/types/enums/format-category.enum';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { SeedDataSingleton } from '../../../app/vanilla-singletons/seed-data.singleton';
import { ProcessDisplayCondition } from '../../../app/other-logic/process-display-conditions';
import { Page } from '../../../app/types/database-data/page';

export class PageQuestion {

    // constants
    public static LEGAL_REP: string = 'legalrep';
    public static PARENT: string = 'parent';
    public static SELF_REPORT: string = 'selfreport';

    // Not populated directly from DB Data:
    validation_result: ValidationResult;
    validation_type: ValidationType;

    constructor(
        public page_id: number,
        public sre_sort_order: number,
        public sre_uid: number,
        public has_subu: number,
        public block: string,
        private parent_sre_disp_id: number,
        private legalrep_sre_disp_id: number,
        private selfreport_sre_disp_id: number,
        public sre_foca_id: FormatCategory,
        public sre_anca_id: AnswerCategory,
        public bypass_enum_code: ValidationType,
        public higher_lvl_uid: number,
        public txt_parent_lang1: string,
        public txt_legalrep_lang1: string,
        public txt_selfreport_lang1: string,
        private parent_sre_dona_id: number,
        private legalrep_sre_dona_id: number,
        private selfreport_sre_dona_id: number,
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

        let userInput = UserInputSingleton.instanceOf().getUserInput('respondent_type');
        let storedValue = userInput ? userInput.storedValue : null;

        // Switch according to respondent_type
        switch (storedValue) {
            case 'legalrep':
                if (this.legalrep_sre_disp_id > 0) {
                    result = ProcessDisplayCondition.processDisplayCondition(this.legalrep_sre_disp_id, this);
                }
                break;
            case 'parent':
                if (this.parent_sre_disp_id > 0) {
                    result = ProcessDisplayCondition.processDisplayCondition(this.parent_sre_disp_id, this);
                }
                break;
            case 'selfreport':
                if (this.selfreport_sre_disp_id > 0) {
                    result = ProcessDisplayCondition.processDisplayCondition(this.selfreport_sre_disp_id, this);
                }
                break;
            default:
                console.log('respondent_type not supported: ' + storedValue);
                break;
        }

        return result;
    }

    get page(): Page {
        let result = SeedDataSingleton.instanceOf().getPage(this.page_id);
        return result;
    }

    get question_text(): string {
        let userInput = UserInputSingleton.instanceOf().getUserInput('respondent_type');
        let storedValue = userInput ? userInput.storedValue : null;
        let result: string;

        // Switch according to respondent_type
        switch (storedValue) {
            case PageQuestion.LEGAL_REP:
                result = this.txt_legalrep_lang1;
                break;
            case PageQuestion.PARENT:
                result = this.txt_parent_lang1;
                break;
            case PageQuestion.SELF_REPORT:
                result = this.txt_selfreport_lang1;
                break;
            default:
                result = this.txt_parent_lang1;
                break;
        }

        return result;
    }

    get sre_dona_id(): number {
        let result: number;

        let userInput = UserInputSingleton.instanceOf().getUserInput('respondent_type');
        let storedValue = userInput ? userInput.storedValue : null;

        // Switch according to respondent_type
        switch (storedValue) {
            case PageQuestion.LEGAL_REP:
                result = this.legalrep_sre_dona_id;
                console.log('using legalrep_sre_dona_id');
                break;
            case PageQuestion.PARENT:
                result = this.parent_sre_dona_id;
                console.log('using parent_sre_dona_id');
                break;
            case PageQuestion.SELF_REPORT:
                result = this.selfreport_sre_dona_id;
                console.log('using selfreport_sre_dona_id');
                break;
            default:
                console.log('respondent_type not supported: ' + storedValue);
                break;
        }

        return result;


    }


}
