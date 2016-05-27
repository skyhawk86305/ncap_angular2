import { AnswerCategory } from '../../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../../app/types/enums/format-category.enum';
import { ValidationType } from '../../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

export class SubuQuestion {

  // Not populated directly from DB Data:
  validation_result: ValidationResult;
  previouslySelectedStoredValue: number;

  constructor(
    public sre_parent_id: string,
    public sre_uid: number,
    public sre_sort_order: number,
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
    public error_msg_lang1: number,
    public bypass_var: string
  ) { }

  get text(): string {
    // xyzzy5 - Switch according to value in tracking_key
    return this.txt_parent_lang1;
  }

}
