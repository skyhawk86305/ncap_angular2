import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';
import { AnswerCategory } from '../../app/types/enums/answer-category';
import { FormatCategory } from '../../app/types/enums/format-category';

export class QuestionNew {
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

  question_id: number;
  page_id: number;
  sort_order: number;
  answer_type_id: number;
  answer_type: string;
  validation_type: ValidationType;
  question_text: string;
  //answer_lookup_id: number;
  //answer_lookup: string;

  // Below not populated from JSON file
  validation_result: ValidationResult;
  show_validation: boolean;
}

// 
// import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

//bypass_property is import { ValidationType } from '../../../app/types/enums/validation-type.enum'; 


    //answerCategory: string; // = this.getAnswerCategory();

    // Not imported from DB
    // getAnswerCategory(): string {
    //     let result: string = AnswerCategory[this.sre_anca_id];
    //     console.log(result);

    //     return result;
    // }

