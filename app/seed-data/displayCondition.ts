import {DisplayCondition} from "../types/database-data/display_condition";
export var displayCondition:DisplayCondition[] = [
    {
        "id": 1,
        "condition_group": 1,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 2700,
        "relation": "IS NULL",
        "dom_sub_id_rhs": null,
        "comments": "middleName == \"\""
    },
    {
        "id": 2,
        "condition_group": 2,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 3400,
        "relation": "IS NULL",
        "dom_sub_id_rhs": null,
        "comments": "middleNameMother == \"\""
    },
    {
        "id": 3,
        "condition_group": 3,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 700,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "asd_yes_no == \"Yes\""
    },
    {
        "id": 4,
        "condition_group": 4,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 4200,
        "relation": "CONTAINS",
        "dom_sub_id_rhs": 4,
        "comments": "\"Who diagnosed the child with ASD\" contains \"Other\""
    },
    {
        "id": 5,
        "condition_group": 5,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 6400,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "LoseSpeech == \"Yes\""
    },
    {
        "id": 6,
        "condition_group": 6,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 6600,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "SlowStopSpeech == \"Yes\""
    },
    {
        "id": 7,
        "condition_group": 7,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 6800,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "LoseMotor == \"Yes\""
    },
    {
        "id": 8,
        "condition_group": 8,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 7000,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "SlowStopMotor == \"Yes\""
    },
    {
        "id": 9,
        "condition_group": 9,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 7200,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "LoseSocial == \"Yes\""
    },
    {
        "id": 10,
        "condition_group": 10,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 7400,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "SlowStopSocial == \"Yes\""
    },
    {
        "id": 11,
        "condition_group": 11,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 7600,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "LoseDailyLiving == \"Yes\""
    },
    {
        "id": 12,
        "condition_group": 12,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 7800,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "SlowStopDailyLiving == \"Yes\""
    },
    {
        "id": 13,
        "condition_group": 13,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 8000,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "WalkByOneself == \"Yes\""
    },
    {
        "id": 14,
        "condition_group": 14,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 8200,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "VerbalSkill != \"\""
    },
    {
        "id": 15,
        "condition_group": 14,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 8200,
        "relation": "NOT EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "VerbalSkill != \"Does not use any words\" "
    },
    {
        "id": 16,
        "condition_group": 14,
        "obj_order": 3,
        "logical_operator": "AND",
        "sre_uid_lhs": 8200,
        "relation": "NOT EQUAL",
        "dom_sub_id_rhs": 6,
        "comments": "VerbalSkill != \"Prefer not to answer\" "
    },
    {
        "id": 17,
        "condition_group": 15,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 8200,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 4,
        "comments": "VerbalSkill = \"Speaks in 2 words combinations"
    },
    {
        "id": 18,
        "condition_group": 15,
        "obj_order": 2,
        "logical_operator": "OR",
        "sre_uid_lhs": 8200,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 5,
        "comments": "VerbalSkill = \"Speaks in 3 or more word combinations\""
    },
    {
        "id": 19,
        "condition_group": 16,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 3600,
        "relation": "IS NULL",
        "dom_sub_id_rhs": null,
        "comments": "mother_DOB is null"
    },
    {
        "id": 20,
        "condition_group": 17,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 14700,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 1,
        "comments": "breastfed == \"Yes\""
    },
    {
        "id": 21,
        "condition_group": 18,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 18400,
        "relation": "CONTAINS",
        "dom_sub_id_rhs": 2,
        "comments": "water_source_mother CONTAINS \"Public water supply\""
    },
    {
        "id": 22,
        "condition_group": 19,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 23800,
        "relation": "GREATER THAN",
        "dom_sub_id_rhs": 1,
        "comments": "Number of siblings > 0"
    },
    {
        "id": 23,
        "condition_group": 20,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 24,
        "condition_group": 21,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24600,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_main_number != \"\""
    },
    {
        "id": 25,
        "condition_group": 22,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 26,
        "condition_group": 22,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 24600,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_main_number != \"\""
    },
    {
        "id": 27,
        "condition_group": 22,
        "obj_order": 3,
        "logical_operator": "AND",
        "sre_uid_lhs": 24600,
        "relation": "CUSTOM_FUNCTION_1",
        "dom_sub_id_rhs": null,
        "comments": "phone_main_number does not contain exactly 10 digits"
    },
    {
        "id": 28,
        "condition_group": 23,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24900,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt1_number != \"\""
    },
    {
        "id": 29,
        "condition_group": 24,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 30,
        "condition_group": 24,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 24900,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt1_number != \"\""
    },
    {
        "id": 31,
        "condition_group": 24,
        "obj_order": 3,
        "logical_operator": "AND",
        "sre_uid_lhs": 24900,
        "relation": "CUSTOM_FUNCTION_1",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt1_number does not contain exactly 10 digits"
    },
    {
        "id": 32,
        "condition_group": 25,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 33,
        "condition_group": 25,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 24900,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt1_number != \"\""
    },
    {
        "id": 34,
        "condition_group": 26,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 25200,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt2_number != \"\""
    },
    {
        "id": 35,
        "condition_group": 27,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 36,
        "condition_group": 27,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 25200,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt2_number != \"\""
    },
    {
        "id": 37,
        "condition_group": 27,
        "obj_order": 3,
        "logical_operator": "AND",
        "sre_uid_lhs": 25200,
        "relation": "CUSTOM_FUNCTION_1",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt2_number does not contain exactly 10 digits"
    },
    {
        "id": 38,
        "condition_group": 28,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 39,
        "condition_group": 28,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 25200,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt2_number != \"\""
    },
    {
        "id": 40,
        "condition_group": 29,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 25500,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt3_number != \"\""
    },
    {
        "id": 41,
        "condition_group": 30,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 42,
        "condition_group": 30,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 25500,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt3_number != \"\""
    },
    {
        "id": 43,
        "condition_group": 30,
        "obj_order": 3,
        "logical_operator": "AND",
        "sre_uid_lhs": 25500,
        "relation": "CUSTOM_FUNCTION_1",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt3_number does not contain exactly 10 digits"
    },
    {
        "id": 44,
        "condition_group": 31,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 45,
        "condition_group": 31,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 25500,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt3_number != \"\""
    },
    {
        "id": 46,
        "condition_group": 32,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 25800,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt4_number != \"\""
    },
    {
        "id": 47,
        "condition_group": 33,
        "obj_order": 1,
        "logical_operator": null,
        "sre_uid_lhs": 24300,
        "relation": "EQUAL",
        "dom_sub_id_rhs": 2,
        "comments": "recontact == \"Yes\""
    },
    {
        "id": 48,
        "condition_group": 33,
        "obj_order": 2,
        "logical_operator": "AND",
        "sre_uid_lhs": 25800,
        "relation": "IS NOT NULL",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt4_number != \"\""
    },
    {
        "id": 49,
        "condition_group": 33,
        "obj_order": 3,
        "logical_operator": "AND",
        "sre_uid_lhs": 25800,
        "relation": "CUSTOM_FUNCTION_1",
        "dom_sub_id_rhs": null,
        "comments": "phone_alt4_number does not contain exactly 10 digits"
    }
];