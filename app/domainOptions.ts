import { DomainOption } from './domainOption';
//import { OnInit } from 'angular2/core';

export class DomainOptions {
  test: number;
  age5: DomainOption[];
  eduLevel: DomainOption;
  ethnicity: DomainOption;
  freq2: DomainOption;
  sex: DomainOption;
  verbalSkill: DomainOption;
  yesNo: DomainOption;
  yesNoDkNaQ1: DomainOption;
  yesNoDkPnta: DomainOption;

  constructor(
  ) {
    this.test = 42;
    this.age5 = [
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
  }

}
