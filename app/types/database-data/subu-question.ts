import { AnswerCategory } from '../enums/answer-category.enum';
import { FormatCategory } from '../enums/format-category.enum';
import { ValidationType } from '../enums/validation-type.enum';
import { ValidationResult } from '../enums/validation-result.enum';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';

export class SubuQuestion {

  // Not populated directly from DB Data:
  validation_result: ValidationResult;
  previouslySelectedStoredValue: number;

  constructor(
    public page_id: number,
    public sre_parent_id: string,
    public sre_uid: number,
    public sre_sort_order: number,
    public block: string,
    private parent_sre_disp_id: number,
    private legalrep_sre_disp_id: number,
    private selfreport_sre_disp_id: number,
    public sre_foca_id: FormatCategory,
    public sre_anca_id: AnswerCategory,
    public bypass_enum_code: ValidationType,
    public higher_lvl_uid: number,
    private txt_parent_lang1: string,
    private txt_legalrep_lang1: string,
    private txt_selfreport_lang1: string,
    private parent_sre_dona_id: number,
    private legalrep_sre_dona_id: number,
    private selfreport_sre_dona_id: number,
    public tracking_key: string,
    public def_disp_value: string,
    private parent_sre_varu_id: number,
    private legalrep_sre_varu_id: number,
    private selfreport_sre_varu_id: number,
    public error_msg_lang1: number,
    public bypass_var: string
  ) { }

  get text(): string {
    // plugh - move to a common location using an Interface to support all places this logic is used?
    let userInput = UserInputSingleton.instanceOf().getUserInput('respondent_type');
    let storedValue = userInput ? userInput.storedValue : null;
    let result: string;

    // Switch according to respondent_type
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
