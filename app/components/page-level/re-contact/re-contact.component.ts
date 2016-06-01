import { Component, Input, OnInit } from "angular2/core";
import { NavigationSingleton } from "../../../../app/vanilla-singletons/navigation.singleton";
import { SeedDataSingleton } from "../../../vanilla-singletons/seed-data.singleton";
import { PageQuestion } from "../../../types/database-data/page-question";
import { LoadDomainOptionsSingleton } from "../../../vanilla-singletons/load-domain-options.singleton";
import { ReConConstants } from "./re-contact.constants";
import { ValidationResult } from "../../../types/enums/validation-result.enum";
import { UserInputSingleton } from "../../../vanilla-singletons/user-input.singleton";
import { UserInput } from "../../../types/database-data/user-input";
import { ValidationType } from "../../../types/enums/validation-type.enum";
import { ReContactValidator } from "./re-contact.validator";
import { Domain } from "../../../types/database-data/domain";
import { NavigationButtonsComponent } from "../navigation-buttons/navigation-buttons.component";
import {PhoneMaskDirective} from "./phone-mask.directive";

@Component({
    selector:       're-contact',
    templateUrl:    'app/components/page-level/re-contact/re-contact.html',
    providers:      [ SeedDataSingleton, LoadDomainOptionsSingleton, ReConConstants,
                        ValidationResult, ValidationType, ReContactValidator ],
    directives:     [ PhoneMaskDirective ]
})

/**
 * This class supports the reContact page.
 */
export class ReContactComponent implements OnInit {
    @Input() pageId: number;
    @Input() svyType: string;
    @Input() contactUser: number = ReConConstants.CONTACT_USER_NOT_SELECTED;

    protected navigationSingleton = NavigationSingleton.instanceOf();
    protected domainOptionsSingleton = LoadDomainOptionsSingleton.instanceOf();
    protected navButtons = NavigationButtonsComponent;
    protected hideNextButton = false;

    reConSeedData: PageQuestion[];
    reConQuestions: PageQuestion[];
    reConSelection: PageQuestion;
    questionsToValidate: PageQuestion[] = [];

    reConDomains: Domain[];

    public ValidationResult = ValidationResult; // Permit view to use the enumeration type
    @Input() recontactValidation: number = -1;
    public UserInputSingleton = UserInputSingleton;
    
    public validationType = ValidationType;
    public ReConConstants = ReConConstants;

    public prevUserInputReContact: number;
    public prevUserInputFullName: string = "";
    public prevUserInputPhone: string = "";
    public prevUserInputPhoneExt: string = "";
    public prevUserInputPhoneAlt1: string = "";
    public prevUserInputPhoneAlt1Ext: string = "";
    public prevUserInputEmail: string = "";

    public validName: boolean = true;
    public validEmail: boolean = true;
    public validPhone: boolean = true;
    public validPhoneAlt1: boolean = true;

    constructor( private _domainData: LoadDomainOptionsSingleton) {
    }

    /**
     * Initialize the page with reContact questions.
     */
    ngOnInit() {

        //Determines which survey path the user has selected.
        let svyPathItem:UserInput = UserInputSingleton.instanceOf().getUserInput('respondent_type');
        this.svyType = svyPathItem.storedValue;

        //Get the ReContact questions.
        //this.reConSeedData = this._seedData.getQuestionsForPage(this.pageId);
        this.reConSeedData = SeedDataSingleton.instanceOf().getQuestionsForPage(this.pageId);
        this.reConQuestions = this.reConSeedData;

        for (var ncapData of this.reConSeedData) {
            //get a subset of the reContact data

            //This sets up the first validation to check if the user selects the 'Contact Me' option.
            if (ncapData.tracking_key === ReConConstants.TRACKING_KEY_RECONTACT) {
                this.reConSelection = ncapData;
                //this.reConSelection.show_validation = true;
                this.navigationSingleton.show_validation = true;
            }

            var sre_dona_id:number = 22;
            // switch (this.svyType) {
            //     case ReConConstants.SURVEY_TYPE_PARENT:
            //         //sre_dona_id = ncapData.parent_sre_dona_id;  // the id is not private...
            //         sre_dona_id = 22;
            //         break;
            //     case ReConConstants.SURVEY_TYPE_LEGAL:
            //         //sre_dona_id = ncapData.legalrep_sre_dona_id;
            //         sre_dona_id = 22;
            //         break;
            //     case ReConConstants.SURVEY_TYPE_SELF:
            //         //sre_dona_id = ncapData.selfreport_sre_dona_id;
            //         sre_dona_id = 22;
            //         break;
            //     default:
            //         //sre_dona_id = ncapData.parent_sre_dona_id;
            //         sre_dona_id = 22;
            //         break;
            // }
            //This needs to be generalized later.  This assumes there's only one set of domain in the question dictionary.
            if (sre_dona_id !== null && ncapData.tracking_key === ReConConstants.TRACKING_KEY_RECONTACT ) {
                //just want a subset of the domain; other domains in the data will not be used at this time.
                this.reConDomains = this._domainData.getDomainOptions(sre_dona_id);
            }

            //Get Validation
            var valType:ValidationType = ncapData.bypass_enum_code;
            if (valType === this.validationType.required || valType === this.validationType.requested ||
                    ncapData.tracking_key === ReConConstants.TRACKING_KEY_PHONE_ALT1) {
                this.questionsToValidate.push(ncapData);
            }
        }
        this.navigationSingleton.show_validation = false;
    }


    /**
     * Hide and show the input fields based on the Contact User radio buttons
     *  Values:  false - hide - do not contact
     *           true - show - contact
     * @param value
     */
    setContactUser(value:number) {
        this.contactUser = value;
        if (this.contactUser === ReConConstants.CONTACT_USER_NO_CONTACT) {
            //remove data from input fields in case the user had previously entered data.
            this.removeContactData();
        } else if (this.contactUser === ReConConstants.CONTACT_USER) {
            this.navigationSingleton.show_validation = false;
        }
    }

    /**
     * Determines the validation based on whether the user has selected the Contact Me options.  This
     *  is a two step validation.  Validation does not occur if the user hasn't selected the Contact Me option.
     *  Once the user select to 'Contact Me', then the input field validation occurs.
     */
    nextPage() {
        this.recontactValidation = -1;
        //reset the data in case user made changes and clicks next again
        this.reConQuestions = this.reConSeedData;
        switch (this.contactUser) {
            case ReConConstants.CONTACT_USER_NOT_SELECTED:
                this.navigationSingleton.show_validation = true;
                this.reConSelection.validation_result = ValidationResult.required;
                this.recontactValidation = ValidationResult.required;
                break;
            case ReConConstants.CONTACT_USER_NO_CONTACT:
                //clear contact data (if previously entered)
                //just to be sure...
                this.removeContactData();
                this.navigationSingleton.nextWithNoValidation();
                this.recontactValidation = -1;
                break;
            case ReConConstants.CONTACT_USER:
                let hasError:boolean = this.validateData();
                if (!hasError) {
                    this.navigationSingleton.next();
                }
                break;
        }
    }

    /**
     * Validate the contact data
     *
     * @returns {boolean} Returns true if error found: false if no error found
     */
    validateData():boolean {
        let retVal:boolean = false; //no error
        for (var questionToValidate of this.questionsToValidate) {
            var trackingKey:string = questionToValidate.tracking_key;
            var userInput:UserInput = UserInputSingleton.instanceOf().getUserInput(trackingKey);

            if (typeof userInput !== 'undefined') {
                var userResponse:string = userInput.storedValue;
                if (userResponse === null && userResponse === 'undefined') {
                    retVal = true;
                    this.setValidationData(questionToValidate);
                } else {
                    switch (trackingKey) {

                        case ReConConstants.TRACKING_KEY_EMAIL:
                            this.validEmail = ReContactValidator.validateEmail(userInput.storedValue);
                            if (!this.validEmail) {
                                retVal = true;
                                this.recontactValidation = ValidationResult.requested;
                                this.setValidationData(questionToValidate);
                            }
                            break;
                        case ReConConstants.TRACKING_KEY_FULL_NAME:
                            this.validName = ReContactValidator.validateFullName(userInput.storedValue);
                            if (!this.validName) {
                                retVal = true;
                                this.recontactValidation = ValidationResult.required;
                                this.setValidationData(questionToValidate);
                            }
                            break;
                        case ReConConstants.TRACKING_KEY_PHONE_MAIN:
                            this.validPhone = ReContactValidator.validatePhone(userInput.storedValue);
                            if (!this.validPhone) {
                                retVal = true;
                                this.recontactValidation = ValidationResult.required;
                                this.setValidationData(questionToValidate);
                            }
                            break;
                        case ReConConstants.TRACKING_KEY_PHONE_ALT1:
                            this.validPhoneAlt1 = ReContactValidator.validatePhone(userInput.storedValue);
                            if (!this.validPhoneAlt1) {
                                retVal = true;
                            }
                            break;
                    }
                    

                }
            } else {
                if (trackingKey !== ReConConstants.TRACKING_KEY_EMAIL) {
                    //email is not required so if the user not entering anything, it's not an error
                    retVal = true;
                }

                this.setValidationData(questionToValidate);
            }

        }

        return retVal;
    }

    /**
     * Set validation properties if validations fail
     *
     * @param questionToValidate    Current question that is being validated
     */
    setValidationData(questionToValidate:PageQuestion) {
        var sortOrder:number = questionToValidate.sre_sort_order;
        //this.reConQuestions[sortOrder - 1].show_validation = true;
        this.navigationSingleton.show_validation = true;
        if (questionToValidate.bypass_enum_code === ValidationType.requested) {
            this.reConQuestions[sortOrder - 1].validation_result = ValidationResult.requested;
        } else if (questionToValidate.bypass_enum_code === ValidationType.required) {
            this.reConQuestions[sortOrder - 1].validation_result = ValidationResult.required;
        }
    }

    /**
     * This method supports the radio button in the ReContact Page.  This method also required the value of the
     *  Contact User radio button.
     *
     * @param trackingKey
     * @param id
     * @param contactUser : Values:  0 - Do not contact; 1 - Contact
     */
    clickReCon(trackingKey:string, id:number, contactUser:number) {
        //console.log('Clicked ' + trackingKey + ' with id ' + id);
        this.setContactUser(contactUser);
        UserInputSingleton.instanceOf().setUserInput(trackingKey, id.toString());
        this._syncToPreviouslyEnteredData();

        // Ask Page Control to re-validate for everything on the page
        this.navigationSingleton.requestPageControlRevalidate();
    }

    modelChange(trackingKey:string, value:string) {
        UserInputSingleton.instanceOf().setUserInput(trackingKey, value);
        this.navigationSingleton.requestPageControlRevalidate();
    }

    private _syncToPreviouslyEnteredData() {
        // Is there previous entered User Input we need to sync to?

        let previousUserInput:UserInput;
        previousUserInput = UserInputSingleton.instanceOf().getUserInput(ReConConstants.TRACKING_KEY_RECONTACT);
        if (previousUserInput) {
            this.prevUserInputReContact = +previousUserInput.storedValue;
            this.contactUser = +previousUserInput.storedValue;

        }
        previousUserInput = UserInputSingleton.instanceOf().getUserInput(ReConConstants.TRACKING_KEY_FULL_NAME);
        if (previousUserInput) {
            this.prevUserInputFullName = previousUserInput.storedValue;
        }
        previousUserInput = UserInputSingleton.instanceOf().getUserInput(ReConConstants.TRACKING_KEY_PHONE_MAIN);
        if (previousUserInput) {
            this.prevUserInputPhone = previousUserInput.storedValue;
        }
        previousUserInput = UserInputSingleton.instanceOf().getUserInput(ReConConstants.TRACKING_KEY_PHONE_MAIN_EXT);
        if (previousUserInput) {
            this.prevUserInputPhoneExt = previousUserInput.storedValue;
        }
        previousUserInput = UserInputSingleton.instanceOf().getUserInput(ReConConstants.TRACKING_KEY_PHONE_ALT1);
        if (previousUserInput) {
            this.prevUserInputPhoneAlt1 = previousUserInput.storedValue;
        }
        previousUserInput = UserInputSingleton.instanceOf().getUserInput(ReConConstants.TRACKING_KEY_PHONE_ALT1_EXT);
        if (previousUserInput) {
            this.prevUserInputPhoneAlt1Ext = previousUserInput.storedValue;
        }
        previousUserInput = UserInputSingleton.instanceOf().getUserInput(ReConConstants.TRACKING_KEY_EMAIL);
        if (previousUserInput) {
            this.prevUserInputEmail = previousUserInput.storedValue;
        }

    }

    /**
     * Clear any previously submitted contact information if the user decided not wanting to be contacted.
     */
    removeContactData() {
        this.UserInputSingleton.instanceOf().removeUserInput(ReConConstants.TRACKING_KEY_FULL_NAME);
        this.UserInputSingleton.instanceOf().removeUserInput(ReConConstants.TRACKING_KEY_PHONE_MAIN);
        this.UserInputSingleton.instanceOf().removeUserInput(ReConConstants.TRACKING_KEY_PHONE_MAIN_EXT);
        this.UserInputSingleton.instanceOf().removeUserInput(ReConConstants.TRACKING_KEY_PHONE_ALT1);
        this.UserInputSingleton.instanceOf().removeUserInput(ReConConstants.TRACKING_KEY_PHONE_ALT1_EXT);
        this.UserInputSingleton.instanceOf().removeUserInput(ReConConstants.TRACKING_KEY_EMAIL);

        this.prevUserInputFullName = "";
        this.prevUserInputPhone = "";
        this.prevUserInputPhoneExt = "";
        this.prevUserInputPhoneAlt1 = "";
        this.prevUserInputPhoneAlt1Ext = "";
        this.prevUserInputEmail = "";
    }


}
