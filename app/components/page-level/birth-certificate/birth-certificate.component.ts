import { Component, Input, OnInit } from 'angular2/core';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';
import { SeedDataSingleton } from '../../../../app/vanilla-singletons/seed-data.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';
import { Domain } from   '../../../../app/types/database-data/domain';
import { UserInput } from  '../../../../app/types/database-data/user-input';
import { PageQuestion } from '../../../../app/types/database-data/page-question';
import { AnswerCategory } from '../../../../app/types/enums/answer-category.enum';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';
import { ValidationType } from '../../../../app/types/enums/validation-type.enum';

@Component({
  selector: 'birth-certificate',
  templateUrl: 'app/components/page-level/birth-certificate/birth-certificate.html',
  directives: [NavigationButtonsComponent]
})
export class BirthCertificateComponent implements OnInit {

  @Input() pageId: number;
  ValidationResult = ValidationResult;
  _qArr: PageQuestion[];
  _trackingKeyArr: PageQuestion[];
  recCount: number;
  recExpect: number = 16; // a hack to make sure we have the right number of records
  _respondentType: UserInput; // 1:parent,2:legalrep,3:selfreport
  qDict: any; // another level of indirection, to future proof any future add/del of records
  stOpts: any = {};
  _miFlagOpt: Domain[];
  previouslyStoredValue: any = {};
  // Permit view to use the enumeration type
  private navigationSingleton = NavigationSingleton.instanceOf();


  ngOnInit() {
    console.log('BirthCertificateComponent ngOnInit!!');
    this._qArr = SeedDataSingleton.instanceOf().getQuestionsForPage(this.pageId);
    this.recCount = this._qArr.length;
    this._respondentType = UserInputSingleton.instanceOf().getUserInput('respondent_type');
    if (this._respondentType == null) {
      UserInputSingleton.instanceOf().setUserInput('respondent_type', 'parent');
      this._respondentType = UserInputSingleton.instanceOf().getUserInput('respondent_type');
    }

    //
    this.qDict = {
      'info1': this._qArr[0],
      'info2': this._qArr[1],
      'fn': this._qArr[2],
      'mi': this._qArr[3],
      'ln': this._qArr[4],
      'mi_fl': this._qArr[5],
      'city': this._qArr[6],
      'st': this._qArr[7],
      'info3': this._qArr[8],
      'info4': this._qArr[9],
      'fnm': this._qArr[10],
      'mim': this._qArr[11],
      'lnm': this._qArr[12],
      'dobm': this._qArr[13],
      'citym': this._qArr[14],
      'stm': this._qArr[15]
    };

    this._miFlagOpt = this._getStOpt(this._respondentType, this.qDict.mi_fl, false);

    this._trackingKeyArr = this._createTrackingKeyList(this._qArr);
    this._trackingKeyArr[0].validation_result = 1;
    this._syncToPreviouslyEnteredData();
    // console.log(this.qDict.st)
  }
  _getStOpt(respondentType: UserInput, question: PageQuestion, addPleaseSelect: boolean) {
    let stOpt: Domain[];
    switch (respondentType.storedValue) {
      case 'legalrep':
        stOpt = this._getDomainOptions(question.legalrep_sre_dona_id, addPleaseSelect);
        break;
      case 'selfreport':
        stOpt = this._getDomainOptions(question.selfreport_sre_dona_id, addPleaseSelect);
        break;
      default:
        stOpt = this._getDomainOptions(question.parent_sre_dona_id, addPleaseSelect);
        break;
    }
    return stOpt;
  }
  modelChange(trackingKey: string, value: string) {

    UserInputSingleton.instanceOf().setUserInput(trackingKey, value.toString())
    this._syncToPreviouslyEnteredData()

  }

  _createTrackingKeyList(qArr: PageQuestion[]) {
    let result: PageQuestion[] = Array<PageQuestion>();
    for (let q of qArr) {
      if (q.tracking_key) {
        result.push(q)
        this.previouslyStoredValue[q.tracking_key] = null;
      }
    }
    return result;
  }
  _syncToPreviouslyEnteredData() {
    // Is there previous entered User Input we need to sync to?
    for (let q of this._trackingKeyArr) {
      let tracking_key = q.tracking_key;
      let previousUserInput: UserInput = this.getUserInput(tracking_key);
      if (previousUserInput) {
        this.previouslyStoredValue[tracking_key] = previousUserInput.storedValue;
        q.validation_result = ValidationResult.ok;
        if (q.sre_anca_id === AnswerCategory.DropDown) {
          this.stOpts[q.tracking_key] = this._getStOpt(this._respondentType, q, false);
        }

      } else {
        if (q.sre_anca_id == AnswerCategory.DropDown ) {
          //set the default value for drop down
          this.previouslyStoredValue[q.tracking_key] = -1;
          this.stOpts[q.tracking_key] = this._getStOpt(this._respondentType, q, true);
        }
      }
    }
  }
  getUserInput(tracking_key: string) {
    let userInput: UserInput = UserInputSingleton.instanceOf().getUserInput(tracking_key);
    if (userInput) {
      return userInput;
    } else {
      return null;
    }
  }
  isMiflTrue() {
    let q = this.qDict.mi_fl;
    let previousUserInput: UserInput = this.getUserInput(q.tracking_key);
    if(previousUserInput && (+previousUserInput.storedValue === 1)){
      return true;
    } else {
      return false;
    }

  }
  showRequestedMsg(tracking_key:string){
    // let result = surveyPageDict[1].find((i) => i.page_id === page_Id);
    let q = this._trackingKeyArr.find((q1) => q1.tracking_key === tracking_key);
    let previousUserInput: UserInput = this.getUserInput(tracking_key);
    if (previousUserInput) {
      return false;
    } else{
      if (this.navigationSingleton.show_validation && (+q.bypass_enum_code === ValidationResult.requested)){
        return true;
      } else {
        return false;
      }
    }
  }

  private _getDomainOptions(id: number, addPleaseSelect: boolean): Domain[] {
    let result = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(id);

    if (addPleaseSelect) {
      // Copy the array as we are going to modify it
      result = result.slice(0);
      // Add 'Please select' as the first option
      let pleaseSelecteDomainOption: Domain = new Domain(-1, -1, '---Please select---');
      result.unshift(pleaseSelecteDomainOption);
    }

    return result;
  }

  // validatePage(){
  //   console.log('validatePage called')
  //   console.log(this.navigationSingleton.show_validation)
  //   // console.log(this._trackingKeyArr)
  //   for (let q of this._trackingKeyArr) {
  //     let previousUserInput: UserInput = this.getUserInput(q.tracking_key);
  //     console.log(q.tracking_key + " : " + (previousUserInput ? previousUserInput.storedValue:'n'));
  //     console.log(previousUserInput);
  //   }
  // }
}
