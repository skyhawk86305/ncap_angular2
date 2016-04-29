import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { ValidationResult } from '../../app/types/enums/validation-result.enum';

export class Question {
  question_id: number;
  page_id: number;
  sort_order: number;
  answer_type_id: number;
  answer_type: string;
  validation_type: ValidationType;
  question_text: string;
  answer_lookup_id: number;
  answer_lookup: string;
  tracking_key: string;

  // Below not populated from JSON file
  validation_result: ValidationResult;
  show_validation: boolean;
}
