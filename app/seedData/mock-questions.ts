import { Question } from './question';

export var QUESTIONS: Question[] = [
  {
    "pageId": 1,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUIRED",
    "question_text": "Has the child ever been diagnosed with ASD <tooltip id=\"1\"/>, which includes Asperger syndrome, childhood disintegrative disorder, and pervasive developmental disorders not otherwise specified (PDD-NOS)?",
    "answer_lookup_id": 29,
    "answer_lookup": "DOM_YES_NO",
    "tracking_key": "asd_yes_no"
  },
  {
    "pageId": 1,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "What was the child's sex at birth?",
    "answer_lookup_id": 23,
    "answer_lookup": "DOM_SEX",
    "tracking_key": "sex_at_birth"
  },
  {
    "pageId": 1,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "What is the child's ethnicity  <tooltip id=\"7\"/> ?",
    "answer_lookup_id": 11,
    "answer_lookup": "DOM_ETHNICITY",
    "tracking_key": "ethnicity"
  }
  ,
  {
    "pageId": 2,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Does the child have a middle name?",
    "answer_lookup_id": 29,
    "answer_lookup": "DOM_YES_NO",
    "tracking_key": "middleName_confirm"
  },
  {
    "pageId": 2,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Does the mother have a middle name?",
    "answer_lookup_id": 29,
    "answer_lookup": "DOM_YES_NO",
    "tracking_key": "middleNameMother_confirm"
  },
  {
    "pageId": 2,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Does the child currently walk on their own?",
    "answer_lookup_id": 33,
    "answer_lookup": "DOM_YES_NO_DK_NA_Q_1",
    "tracking_key": "WalkByOneself"
  },
  {
    "pageId": 3,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "What best describes the child's current verbal skill?",
    "answer_lookup_id": 26,
    "answer_lookup": "DOM_VERBAL_SKILL",
    "tracking_key": "VerbalSkill"
  },
  {
    "pageId": 3,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "What was the highest grade of school the mother completed or the highest degree received <u>at the time the child was born</u>?",
    "answer_lookup_id": 10,
    "answer_lookup": "DOM_EDU_LEVEL",
    "tracking_key": "edu_level_mother"
  },
  {
    "pageId": 3,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Did the mother breastfeed the child?",
    "answer_lookup_id": 32,
    "answer_lookup": "DOM_YES_NO_DK_PNTA",
    "tracking_key": "breastfed"
  },
  {
    "pageId": 4,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "How long did the mother breastfeed the child?",
    "answer_lookup_id": 6,
    "answer_lookup": "DOM_AGE_5",
    "tracking_key": "breastfed_duration"
  },
  {
    "pageId": 4,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Did the mother use tobacco products during the three months prior to pregnancy through the first year of the child\\'s life?",
    "answer_lookup_id": 32,
    "answer_lookup": "DOM_YES_NO_DK_PNTA",
    "tracking_key": "tobacco_use_mother"
  },
  {
    "pageId": 5,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "How often was the mother exposed to second-hand smoke during the three months prior to pregnancy through the first year of the child\\'s life?",
    "answer_lookup_id": 14,
    "answer_lookup": "DOM_FREQ_2",
    "tracking_key": "Second_hand_smoke_freq_mother"
  },
  {
    "pageId": 6,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "How often did the mother eat fish, shellfish, or other seafood during the three months prior to pregnancy through the first year of the child\\'s life?",
    "answer_lookup_id": 14,
    "answer_lookup": "DOM_FREQ_2",
    "tracking_key": "seafood_freq_mother"
  },
  {
    "pageId": 7,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Did the mother take any prescription medicine during the three months prior to pregnancy through the first year of the child\\'s life?",
    "answer_lookup_id": 32,
    "answer_lookup": "DOM_YES_NO_DK_PNTA",
    "tracking_key": "prescr_drugs_mother"
  },
  {
    "pageId": 8,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Did the mother take any over-the-counter medicine during the three months prior to pregnancy through the first year of the child\\'s life?",
    "answer_lookup_id": 32,
    "answer_lookup": "DOM_YES_NO_DK_PNTA",
    "tracking_key": "OTC_drugs_mother"
  },
  // {
  //     "pageId": 9,
  //     "answer_type_id": 1,
  //     "answer_type": "RadioButtons",
  //     "validation_type": "REQUESTED",
  //     "question_text": "How many residences did the mother live in during the three months prior to pregnancy through the first year of the child\\'s life?",
  //     "answer_lookup_id": 18,
  //     "answer_lookup": "DOM_NUMBER_1",
  //     "tracking_key": "residence_number_mother"
  // },
  // {
  //     "pageId": 10,
  //     "answer_type_id": 1,
  //     "answer_type": "RadioButtons",
  //     "validation_type": "REQUESTED",
  //     "question_text": "Was any residence where the mother lived during the three months prior to pregnancy through the first year of the child\\'s life built before 1978?",
  //     "answer_lookup_id": 30,
  //     "answer_lookup": "DOM_YES_NO_DK",
  //     "tracking_key": "residence_pre_78_mother"
  // },
  // {
  //     "pageId": 11,
  //     "answer_type_id": 1,
  //     "answer_type": "RadioButtons",
  //     "validation_type": "REQUESTED",
  //     "question_text": "How often were air fresheners, candles, sprays or similar products used inside the mother\\'s home during the three months prior to pregnancy through the first year of the child\\'s life?",
  //     "answer_lookup_id": 15,
  //     "answer_lookup": "DOM_FREQ_3",
  //     "tracking_key": "home_fragrance_freq_mother"
  // },
  {
    "pageId": 12,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "What was the highest grade of school the father completed or the highest degree received at the time the child was born?",
    "answer_lookup_id": 10,
    "answer_lookup": "DOM_EDU_LEVEL",
    "tracking_key": "edu_level_father"
  },
  {
    "pageId": 13,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Did the father use tobacco products during the three months prior to pregnancy?",
    "answer_lookup_id": 32,
    "answer_lookup": "DOM_YES_NO_DK_PNTA",
    "tracking_key": "tobacco_use_father"
  },
  {
    "pageId": 14,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "How often was the father exposed to second-hand smoke during the three months prior to pregnancy?",
    "answer_lookup_id": 14,
    "answer_lookup": "DOM_FREQ_2",
    "tracking_key": "Second_hand_smoke_freq_father"
  },
  {
    "pageId": 15,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "How often did the father eat fish, shellfish, or other seafood during the three months prior to pregnancy?",
    "answer_lookup_id": 14,
    "answer_lookup": "DOM_FREQ_2",
    "tracking_key": "seafood_freq_father"
  },
  {
    "pageId": 16,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Did the father take any prescription medicine during the three months prior to pregnancy?",
    "answer_lookup_id": 32,
    "answer_lookup": "DOM_YES_NO_DK_PNTA",
    "tracking_key": "prescr_drugs_father"
  },
  {
    "pageId": 17,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "Did the father take any over-the-counter medicine during the three months prior to pregnancy?",
    "answer_lookup_id": 32,
    "answer_lookup": "DOM_YES_NO_DK_PNTA",
    "tracking_key": "OTC_drugs_father"
  },
  {
    "pageId": 18,
    "answer_type_id": 1,
    "answer_type": "RadioButtons",
    "validation_type": "REQUESTED",
    "question_text": "How often was the child exposed to second-hand smoke <u>during the first year of their life</u>.",
    "answer_lookup_id": 14,
    "answer_lookup": "DOM_FREQ_2",
    "tracking_key": "Second_hand_smoke_freq_child"
  },
  // {
  //     "pageId": 19,
  //     "answer_type_id": 1,
  //     "answer_type": "RadioButtons",
  //     "validation_type": "REQUESTED",
  //     "question_text": "Does the child have siblings?",
  //     "answer_lookup_id": 30,
  //     "answer_lookup": "DOM_YES_NO_DK",
  //     "tracking_key": "has_sibling"
  // },
  // {
  //     "pageId": 20,
  //     "answer_type_id": 1,
  //     "answer_type": "RadioButtons",
  //     "validation_type": "REQUESTED",
  //     "question_text": "How many of the child\\'s siblings have received a diagnosis of ASD, which includes Asperger syndrome, childhood disintegrative disorder, and pervasive developmental disorder not otherwise specified (PDD-NOS)?",
  //     "answer_lookup_id": 19,
  //     "answer_lookup": "DOM_NUMBER_2",
  //     "tracking_key": "nb_sibling_with_ASD"
  // },
  // {
  //     "pageId": 21,
  //     "answer_type_id": 1,
  //     "answer_type": "RadioButtons",
  //     "validation_type": "REQUESTED",
  //     "question_text": "How many of the child\\'s siblings have NOT received a diagnosis of ASD?",
  //     "answer_lookup_id": 19,
  //     "answer_lookup": "DOM_NUMBER_2",
  //     "tracking_key": "nb_sibling_without_ASD"
  // },
  // {
  //     "pageId": 22,
  //     "answer_type_id": 1,
  //     "answer_type": "RadioButtons",
  //     "validation_type": "REQUIRED",
  //     "question_text": "Please select one of the following:",
  //     "answer_lookup_id": 22,
  //     "answer_lookup": "DOM_RECONTACT",
  //     "tracking_key": "recontact"
  // }
];
