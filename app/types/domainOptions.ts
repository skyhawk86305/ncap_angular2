import { DomainOption } from './domainOption';
import * as SEEDDATA  from '../../../app/seed-data/json-domainOptions';

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

  populateWithData() {
    this.age5 = SEEDDATA.AGE_5;
    this.eduLevel = SEEDDATA.EDU_LEVEL;
    this.ethnicity = SEEDDATA.ETHNICITY;
    this.freq2 = SEEDDATA.FREQ_2;
    this.sex = SEEDDATA.SEX;
    this.verbalSkill = SEEDDATA.VERBAL_SKILL;
    this.yesNo = SEEDDATA.YES_NO;
    this.yesNoDkNaQ1 = SEEDDATA.YES_NO_DK_NA_Q1;
    this.yesNoDkPnta = SEEDDATA.YES_NO_DK_PNTA;
  }
}
