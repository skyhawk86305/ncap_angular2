import { DomainOption } from './domainOption';
//import { OnInit } from 'angular2/core';

export class DomainOptions {
  age5: DomainOption[];
  eduLevel: DomainOption[];
  ethnicity: DomainOption[];
  freq2: DomainOption[];
  sex: DomainOption[];
  verbalSkill: DomainOption[];
  yesNo: DomainOption[];
  yesNoDkNaQ1: DomainOption[];
  yesNoDkPnta: DomainOption[];

  constructor(
  ) {
    this.age5 =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "0-3 months",
          "stored_value": "0-3 months"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "4-6 months",
          "stored_value": "4-6 months"
        },
        {
          "id": 3,
          "sort_order": 3,
          "displayed_value": "7-12 months",
          "stored_value": "7-12 months"
        },
        {
          "id": 4,
          "sort_order": 4,
          "displayed_value": "More than 12 months",
          "stored_value": "More than 12 months"
        },
        {
          "id": 5,
          "sort_order": 5,
          "displayed_value": "Don\\'t know",
          "stored_value": "Don\\'t know"
        }
      ];

    this.eduLevel =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Less than high school (did not receive a high school diploma or equivalent)",
          "stored_value": "Less than high school (did not receive a high school diploma or equivalent)"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "High school graduate (or equivalent)",
          "stored_value": "High school graduate (or equivalent)"
        },
        {
          "id": 3,
          "sort_order": 3,
          "displayed_value": "Some college (1-4 years, no degree)",
          "stored_value": "Some college (1-4 years, no degree)"
        },
        {
          "id": 4,
          "sort_order": 4,
          "displayed_value": "Associate\\'s degree (including occupational or academic degrees)",
          "stored_value": "Associate\\'s degree (including occupational or academic degrees)"
        },
        {
          "id": 5,
          "sort_order": 5,
          "displayed_value": "Bachelor\\'s degree (BA, BS, AB, etc.)",
          "stored_value": "Bachelor\\'s degree (BA, BS, AB, etc.)"
        },
        {
          "id": 6,
          "sort_order": 6,
          "displayed_value": "Master\\'s degree, professional school degree, or doctorate degree (MA, MS, MSW, MENG, MD, DDC, JD, PhD, ScD, EdD, etc.)",
          "stored_value": "Master\\'s degree, professional school degree, or doctorate degree (MA, MS, MSW, MENG, MD, DDC, JD, PhD, ScD, EdD, etc.)"
        },
        {
          "id": 7,
          "sort_order": 7,
          "displayed_value": "Don\\'t know",
          "stored_value": "Don\\'t know"
        }
      ];

    this.ethnicity =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Hispanic or Latino",
          "stored_value": "Hispanic or Latino"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "Not Hispanic or Latino",
          "stored_value": "Not Hispanic or Latino"
        },
        {
          "id": 3,
          "sort_order": 3,
          "displayed_value": "Prefer not to answer",
          "stored_value": "Prefer not to answer"
        }
      ];

    this.freq2 =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Never",
          "stored_value": "Never"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "Less than once per week",
          "stored_value": "Less than once per week"
        },
        {
          "id": 3,
          "sort_order": 3,
          "displayed_value": "1-6 times per week",
          "stored_value": "1-6 times per week"
        },
        {
          "id": 4,
          "sort_order": 4,
          "displayed_value": "1+ times per day",
          "stored_value": "1+ times per day"
        },
        {
          "id": 5,
          "sort_order": 5,
          "displayed_value": "Don\\'t know",
          "stored_value": "Don\\'t know"
        },
        {
          "id": 6,
          "sort_order": 6,
          "displayed_value": "Prefer not to answer",
          "stored_value": "Prefer not to answer"
        }
      ];

    this.sex =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Male",
          "stored_value": "Male"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "Female",
          "stored_value": "Female"
        }
      ];

    this.verbalSkill =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Does not use any words",
          "stored_value": "Does not use any words"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "Uses 1-10 single words",
          "stored_value": "Uses 1-10 single words"
        },
        {
          "id": 3,
          "sort_order": 3,
          "displayed_value": "Uses more than 10 single words",
          "stored_value": "Uses more than 10 single words"
        },
        {
          "id": 4,
          "sort_order": 4,
          "displayed_value": "Speaks in 2 words combinations",
          "stored_value": "Speaks in 2 words combinations"
        },
        {
          "id": 5,
          "sort_order": 5,
          "displayed_value": "Speaks in 3 or more word combinations",
          "stored_value": "Speaks in 3 or more word combinations"
        },
        {
          "id": 6,
          "sort_order": 6,
          "displayed_value": "Prefer not to answer",
          "stored_value": "Prefer not to answer"
        }
      ];

    this.yesNo =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Yes",
          "stored_value": "Yes"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "No",
          "stored_value": "No"
        }
      ];

    this.yesNoDkNaQ1 =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Yes",
          "stored_value": "Yes"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "No",
          "stored_value": "No"
        },
        {
          "id": 3,
          "sort_order": 3,
          "displayed_value": "Don\\'t know",
          "stored_value": "Don\\'t know"
        },
        {
          "id": 4,
          "sort_order": 4,
          "displayed_value": "Not Applicable",
          "stored_value": "Not Applicable"
        },
        {
          "id": 5,
          "sort_order": 5,
          "displayed_value": "If yes, what was the child\\'s age when you first noticed this change in their development?",
          "stored_value": "Placeholder for age"
        }
      ];

    this.yesNoDkPnta =
      [
        {
          "id": 1,
          "sort_order": 1,
          "displayed_value": "Yes",
          "stored_value": "Yes"
        },
        {
          "id": 2,
          "sort_order": 2,
          "displayed_value": "No",
          "stored_value": "No"
        },
        {
          "id": 3,
          "sort_order": 3,
          "displayed_value": "Don\\'t know",
          "stored_value": "Don\\'t know"
        },
        {
          "id": 4,
          "sort_order": 4,
          "displayed_value": "Prefer not to answer",
          "stored_value": "Prefer not to answer"
        }
      ];

  }
}
