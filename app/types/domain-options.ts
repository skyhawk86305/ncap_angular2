import { DomainOption } from './domain-option';
import * as SEEDDATA  from '../../app/seed-data/json-domain-options';

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
  yesNoDkNa: DomainOption[];

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
    this.yesNoDkNa = SEEDDATA.YES_NO_DK_NA;
  }
  
  getDomainOption(typePassedIn: number) {
    let result: DomainOption[];

    switch (typePassedIn) {
      case 11:
        result = this.ethnicity;
        break;
      case 26:
        result = this.verbalSkill;
        break;
      case 29:
        result = this.yesNo;
        break;
      case 23:
        result = this.sex;
        break;
      case 32:
        result = this.yesNoDkPnta;
        break;
      case 33:
        result = this.yesNoDkNaQ1;
        break;
      case 31:
        result = this.yesNoDkNa;
        break;
      case 10:
        result = this.eduLevel;
        break;
      case 6:
        result = this.age5;
        break;
      case 14:
        result = this.freq2;
        break;
      default:
        // Todo log too
        let message = 'This Domain Option is not yet supported :' + typePassedIn;
        console.log(message);
        throw new Error(message);
    }

    return result;
  }

}


  // xyzzy_getDomainOption(typePassedIn: string) {
  //   let result: DomainOption[];

  //   switch (typePassedIn) {
  //     case 'DOM_ETHNICITY':
  //       result = this.ethnicity;
  //       break;
  //     case 'DOM_VERBAL_SKILL':
  //       result = this.verbalSkill;
  //       break;
  //     case 'DOM_YES_NO':
  //       result = this.yesNo;
  //       break;
  //     case 'DOM_SEX':
  //       result = this.sex;
  //       break;
  //     case 'DOM_YES_NO_DK_PNTA':
  //       result = this.yesNoDkPnta;
  //       break;
  //     case 'DOM_YES_NO_DK_NA_Q_1':
  //       result = this.yesNoDkNaQ1;
  //       break;
  //     case 'DOM_YES_NO_DK_NA':
  //       result = this.yesNoDkNa;
  //       break;
  //     case 'DOM_EDU_LEVEL':
  //       result = this.eduLevel;
  //       break;
  //     case 'DOM_AGE_5':
  //       result = this.age5;
  //       break;
  //     case 'DOM_FREQ_2':
  //       result = this.freq2;
  //       break;
  //     default:
  //       // Todo log too
  //       let message = 'Not yet supported :' + typePassedIn;
  //       console.log(message);
  //       throw new Error(message);
  //   }

  //   return result;
  // }
