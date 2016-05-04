export var QUESTIONS_JSON =
  `
  [
    {
      "question_id": 1000,
      "page_id": 1,
      "sort_order": 1,
      "answer_type_id": 1,
      "answer_type": "Home",
      "validation_type": 2,
      "question_text": "N/A",
      "answer_lookup_id": -1,
      "answer_lookup": "DOM_RESPONDENT_TYPE",
      "tracking_key": "respondent_type"
    }
      ,
    {
      "question_id": 1010,
      "page_id": 2,
      "sort_order": 1,
      "answer_type_id": 1,
      "answer_type": "Consent",
      "validation_type": 2,
      "question_text": "N/A",
      "answer_lookup_id": -1,
      "answer_lookup": "DOM_YES_NO",
      "tracking_key": "initial_consent"
    }
    ,
    {
      "question_id": 1020,
      "page_id": 3,
      "sort_order": 1,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 2,
      "question_text": "Has the child ever been diagnosed with ASD <tooltip id='1'/>, which includes Asperger syndrome, childhood disintegrative disorder, and pervasive developmental disorders not otherwise specified (PDD-NOS)?",
      "answer_lookup_id": 29,
      "answer_lookup": "DOM_YES_NO",
      "tracking_key": "asd_yes_no"
    }
  ,
    {
      "question_id": 1030,
      "page_id": 3,
      "sort_order": 2,
      "answer_type_id": 0,
      "answer_type": "Date_MonthDayYear",
      "validation_type": 2,
      "question_text": "What is the child's date of birth? (mm/dd/yyyy):",
      "answer_lookup_id": -1,
      "answer_lookup": "NONE",
      "tracking_key": "proband_DOB"
    },
    {
      "question_id": 1040,
      "page_id": 3,
      "sort_order": 3,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 2,
      "question_text": "What was the child's sex at birth?",
      "answer_lookup_id": 23,
      "answer_lookup": "DOM_SEX",
      "tracking_key": "sex_at_birth"
    },
    {
      "question_id": 1050,
      "page_id": 4,
      "sort_order": 3,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "What is the child's ethnicity  <tooltip id='8'/> ?",
      "answer_lookup_id": 11,
      "answer_lookup": "DOM_ETHNICITY",
      "tracking_key": "ethnicity"
    },
    {
      "question_id": 1060,
      "page_id": 4,
      "sort_order": 4,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Does the child have a middle name?",
      "answer_lookup_id": 29,
      "answer_lookup": "DOM_YES_NO",
      "tracking_key": "middleName_confirm"
    }
          ,
    {
      "question_id": 1070,
      "page_id": 4,
      "sort_order": 5,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Does the mother have a middle name?",
      "answer_lookup_id": 29,
      "answer_lookup": "DOM_YES_NO",
      "tracking_key": "middleNameMother_confirm"
    },
    {
      "question_id": 1080,
      "page_id": 4,
      "sort_order": 6,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Does the child currently walk on their own?",
      "answer_lookup_id": 33,
      "answer_lookup": "DOM_YES_NO_DK_NA_Q_1",
      "tracking_key": "WalkByOneself"
    }
    ,
    {
      "question_id": 1090,
      "page_id": 5,
      "sort_order": 7,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "What best describes the child's current verbal skill?",
      "answer_lookup_id": 26,
      "answer_lookup": "DOM_VERBAL_SKILL",
      "tracking_key": "VerbalSkill"
    },
    {
      "question_id": 1100,
      "page_id": 5,
      "sort_order": 8,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "What was the highest grade of school the mother completed or the highest degree received <u>at the time the child was born</u>?",
      "answer_lookup_id": 10,
      "answer_lookup": "DOM_EDU_LEVEL",
      "tracking_key": "edu_level_mother"
    }
    ,
    {
      "question_id": 1110,
      "page_id": 5,
      "sort_order": 9,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Did the mother breastfeed the child?",
      "answer_lookup_id": 32,
      "answer_lookup": "DOM_YES_NO_DK_PNTA",
      "tracking_key": "breastfed"
    },
    {
      "question_id": 1120,
      "page_id": 6,
      "sort_order": 10,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How long did the mother breastfeed the child?",
      "answer_lookup_id": 6,
      "answer_lookup": "DOM_AGE_5",
      "tracking_key": "breastfed_duration"
    }
    ,
    {
      "question_id": 1130,
      "page_id": 6,
      "sort_order": 11,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Did the mother use tobacco products during the three months prior to pregnancy through the first year of the child's life?",
      "answer_lookup_id": 32,
      "answer_lookup": "DOM_YES_NO_DK_PNTA",
      "tracking_key": "tobacco_use_mother"
    }
            ,
    {
      "question_id": 1140,
      "page_id": 7,
      "sort_order": 12,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How often was the mother exposed to second-hand smoke during the three months prior to pregnancy through the first year of the child's life?",
      "answer_lookup_id": 14,
      "answer_lookup": "DOM_FREQ_2",
      "tracking_key": "Second_hand_smoke_freq_mother"
    }
    ,
    {
      "question_id": 1150,
      "page_id": 8,
      "sort_order": 13,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How often did the mother eat fish, shellfish, or other seafood during the three months prior to pregnancy through the first year of the child's life?",
      "answer_lookup_id": 14,
      "answer_lookup": "DOM_FREQ_2",
      "tracking_key": "seafood_freq_mother"
    }               

                  ,
    {
      "question_id": 1160,
      "page_id": 9,
      "sort_order": 14,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Did the mother take any prescription medicine during the three months prior to pregnancy through the first year of the child's life?",
      "answer_lookup_id": 32,
      "answer_lookup": "DOM_YES_NO_DK_PNTA",
      "tracking_key": "prescr_drugs_mother"
    },
    {
      "question_id": 1170,
      "page_id": 10,
      "sort_order": 15,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Did the mother take any over-the-counter medicine during the three months prior to pregnancy through the first year of the child's life?",
      "answer_lookup_id": 32,
      "answer_lookup": "DOM_YES_NO_DK_PNTA",
      "tracking_key": "OTC_drugs_mother"
    },
    {
      "question_id": 1180,
      "page_id": 11,
      "sort_order": 16,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How many residences did the mother live in during the three months prior to pregnancy through the first year of the child's life?",
      "answer_lookup_id": 18,
      "answer_lookup": "DOM_NUMBER_1",
      "tracking_key": "residence_number_mother"
    },
    {
      "question_id": 1190,
      "page_id": 12,
      "sort_order": 17,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Was any residence where the mother lived during the three months prior to pregnancy through the first year of the child's life built before 1978?",
      "answer_lookup_id": 30,
      "answer_lookup": "DOM_YES_NO_DK",
      "tracking_key": "residence_pre_78_mother"
    },
    {
      "question_id": 1200,
      "page_id": 13,
      "sort_order": 18,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How often were air fresheners, candles, sprays or similar products used inside the mother's home during the three months prior to pregnancy through the first year of the child's life?",
      "answer_lookup_id": 15,
      "answer_lookup": "DOM_FREQ_3",
      "tracking_key": "home_fragrance_freq_mother"
    },
    {
      "question_id": 1210,
      "page_id": 14,
      "sort_order": 19,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "What was the highest grade of school the father completed or the highest degree received at the time the child was born?",
      "answer_lookup_id": 10,
      "answer_lookup": "DOM_EDU_LEVEL",
      "tracking_key": "edu_level_father"
    },
    {
      "question_id": 1220,
      "page_id": 15,
      "sort_order": 20,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Did the father use tobacco products during the three months prior to pregnancy?",
      "answer_lookup_id": 32,
      "answer_lookup": "DOM_YES_NO_DK_PNTA",
      "tracking_key": "tobacco_use_father"
    },
    {
      "question_id": 1230,
      "page_id": 16,
      "sort_order": 21,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How often was the father exposed to second-hand smoke during the three months prior to pregnancy?",
      "answer_lookup_id": 14,
      "answer_lookup": "DOM_FREQ_2",
      "tracking_key": "Second_hand_smoke_freq_father"
    },
    {
      "question_id": 1240,
      "page_id": 17,
      "sort_order": 22,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How often did the father eat fish, shellfish, or other seafood during the three months prior to pregnancy?",
      "answer_lookup_id": 14,
      "answer_lookup": "DOM_FREQ_2",
      "tracking_key": "seafood_freq_father"
    },
    {
      "question_id": 1250,
      "page_id": 18,
      "sort_order": 23,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Did the father take any prescription medicine during the three months prior to pregnancy?",
      "answer_lookup_id": 32,
      "answer_lookup": "DOM_YES_NO_DK_PNTA",
      "tracking_key": "prescr_drugs_father"
    },
    {
      "question_id": 1260,
      "page_id": 19,
      "sort_order": 24,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Did the father take any over-the-counter medicine during the three months prior to pregnancy?",
      "answer_lookup_id": 32,
      "answer_lookup": "DOM_YES_NO_DK_PNTA",
      "tracking_key": "OTC_drugs_father"
    },
    {
      "question_id": 1270,
      "page_id": 20,
      "sort_order": 25,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How often was the child exposed to second-hand smoke <u>during the first year of their life</u>.",
      "answer_lookup_id": 14,
      "answer_lookup": "DOM_FREQ_2",
      "tracking_key": "Second_hand_smoke_freq_child"
    },
    {
      "question_id": 1280,
      "page_id": 21,
      "sort_order": 26,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "Does the child have siblings?",
      "answer_lookup_id": 30,
      "answer_lookup": "DOM_YES_NO_DK",
      "tracking_key": "has_sibling"
    },
    {
      "question_id": 1290,
      "page_id": 22,
      "sort_order": 27,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How many of the child's siblings have received a diagnosis of ASD, which includes Asperger syndrome, childhood disintegrative disorder, and pervasive developmental disorder not otherwise specified (PDD-NOS)?",
      "answer_lookup_id": 19,
      "answer_lookup": "DOM_NUMBER_2",
      "tracking_key": "nb_sibling_with_ASD"
    },
    {
      "question_id": 1300,
      "page_id": 23,
      "sort_order": 28,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 1,
      "question_text": "How many of the child's siblings have NOT received a diagnosis of ASD?",
      "answer_lookup_id": 19,
      "answer_lookup": "DOM_NUMBER_2",
      "tracking_key": "nb_sibling_without_ASD"
    },
    {
      "question_id": 1310,
      "page_id": 24,
      "sort_order": 29,
      "answer_type_id": 1,
      "answer_type": "RadioButtons",
      "validation_type": 2,
      "question_text": "Please select one of the following:",
      "answer_lookup_id": 22,
      "answer_lookup": "DOM_RECONTACT",
      "tracking_key": "recontact"
    }
    ,
    {
      "question_id": 2000,
      "page_id": 25,
      "sort_order": 1,
      "answer_type_id": 1,
      "answer_type": "MatrixRadioButtons",
      "validation_type": 3,
      "question_text": "Did the child display the following developmental milestones?",
      "answer_lookup_id": 31,
      "answer_lookup": "DOM_YES_NO_DK_NA",
      "tracking_key": "N/A"
    }
    ,
    {
      "question_id": 2010,
      "page_id": 25,
      "sort_order": 2,
      "answer_type_id": 1,
      "answer_type": "MatrixRadioButtons_TextboxLastRow",
      "validation_type": 3,
      "question_text": "Did the child have any of the following behaviors or symptoms during any stage of development?",
      "answer_lookup_id": 31,
      "answer_lookup": "DOM_YES_NO_DK_NA",
      "tracking_key": "N/A"
    }
  ]`;
