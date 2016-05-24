import { DisplayConditions } from '../types/database-data/display_conditions';
import { DisplayCondition } from '../types/database-data/display_condition';

export var displayConditionDict: DisplayConditions = {
    1: [
        new DisplayCondition(1, null, 'IS NULL', 'middleName', null, null)
    ],
    2: [
        new DisplayCondition(1, null, 'IS NULL', 'middleNameMother', null, null)
    ],
    3: [
        new DisplayCondition(1, null, 'EQUAL', 'asd_yes_no', 1, 'Yes')
    ],
    4: [
        new DisplayCondition(1, null, 'CONTAINS', 'ASD_diag_src', 4, 'Other')
    ],
    5: [
        new DisplayCondition(1, null, 'EQUAL', 'LoseSpeech', 1, 'Yes')
    ],
    6: [
        new DisplayCondition(1, null, 'EQUAL', 'SlowStopSpeech', 1, 'Yes')
    ],
    7: [
        new DisplayCondition(1, null, 'EQUAL', 'LoseMotor', 1, 'Yes')
    ],
    8: [
        new DisplayCondition(1, null, 'EQUAL', 'SlowStopMotor', 1, 'Yes')
    ],
    9: [
        new DisplayCondition(1, null, 'EQUAL', 'LoseSocial', 1, 'Yes')
    ],
    10: [
        new DisplayCondition(1, null, 'EQUAL', 'SlowStopSocial', 1, 'Yes')
    ],
    11: [
        new DisplayCondition(1, null, 'EQUAL', 'LoseDailyLiving', 1, 'Yes')
    ],
    12: [
        new DisplayCondition(1, null, 'EQUAL', 'SlowStopDailyLiving', 1, 'Yes')
    ],
    13: [
        new DisplayCondition(1, null, 'EQUAL', 'WalkByOneself', 1, 'Yes')
    ],
    14: [
        new DisplayCondition(1, null, 'IS NOT NULL', 'VerbalSkill', null, null),
        new DisplayCondition(2, 'AND', 'NOT EQUAL', 'VerbalSkill', 1, 'Does not use any words'),
        new DisplayCondition(3, 'AND', 'NOT EQUAL', 'VerbalSkill', 6, 'Prefer not to answer')
    ],
    15: [
        new DisplayCondition(1, null, 'EQUAL', 'VerbalSkill', 4, 'Speaks in 2 words combinations'),
        new DisplayCondition(2, 'OR', 'EQUAL', 'VerbalSkill', 5, 'Speaks in 3 or more word combinations')
    ],
    16: [
        new DisplayCondition(1, null, 'IS NULL', 'mother_DOB', null, null)
    ],
    17: [
        new DisplayCondition(1, null, 'EQUAL', 'breastfed', 1, 'Yes')
    ],
    18: [
        new DisplayCondition(1, null, 'CONTAINS', 'water_source_mother', 2, 'Public water supply')
    ],
    19: [
        new DisplayCondition(1, null, 'GREATER THAN', 'has_sibling', 1, 'Yes')
    ],
    20: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.')
    ],
    21: [
        new DisplayCondition(1, null, 'IS NOT NULL', 'phone_main_number', null, null)
    ],
    22: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_main_number', null, null),
        new DisplayCondition(3, 'AND', 'CUSTOM_FUNCTION_1', 'phone_main_number', null, null)
    ],
    23: [
        new DisplayCondition(1, null, 'IS NOT NULL', 'phone_alt1_number', null, null)
    ],
    24: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_alt1_number', null, null),
        new DisplayCondition(3, 'AND', 'CUSTOM_FUNCTION_1', 'phone_alt1_number', null, null)
    ],
    25: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_alt1_number', null, null)
    ],
    26: [
        new DisplayCondition(1, null, 'IS NOT NULL', 'phone_alt2_number', null, null)
    ],
    27: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_alt2_number', null, null),
        new DisplayCondition(3, 'AND', 'CUSTOM_FUNCTION_1', 'phone_alt2_number', null, null)
    ],
    28: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_alt2_number', null, null)
    ],
    29: [
        new DisplayCondition(1, null, 'IS NOT NULL', 'phone_alt3_number', null, null)
    ],
    30: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_alt3_number', null, null),
        new DisplayCondition(3, 'AND', 'CUSTOM_FUNCTION_1', 'phone_alt3_number', null, null)
    ],
    31: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_alt3_number', null, null)
    ],
    32: [
        new DisplayCondition(1, null, 'IS NOT NULL', 'phone_alt4_number', null, null)
    ],
    33: [
        new DisplayCondition(1, null, 'EQUAL', 'recontact', 2, 'You can contact me again.'),
        new DisplayCondition(2, 'AND', 'IS NOT NULL', 'phone_alt4_number', null, null),
        new DisplayCondition(3, 'AND', 'CUSTOM_FUNCTION_1', 'phone_alt4_number', null, null)
    ],
    34: [
        new DisplayCondition(1, null, 'EQUAL', 'respondent_type', 2, 'legalrep'),
        new DisplayCondition(2, 'OR', 'EQUAL', 'respondent_type', 3, 'selfreport')
    ],
    35: [
        new DisplayCondition(1, null, 'EQUAL', 'proband_employed', null, null)
    ],
    36: [
        new DisplayCondition(1, null, 'EQUAL', 'proband_employed', null, null)
    ],
    37: [
        new DisplayCondition(1, null, 'EQUAL', 'respondent_type', 1, 'parent')
    ]
};
