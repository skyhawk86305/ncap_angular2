
import {Validator, Control, AbstractControl} from "angular2/common";

export class ReContactValidator{
    constructor() {}

    /**
     * Validate email address for the following rules:
     *  - Contains one '@' character
     *  - Contains at least one "." character
     *  - The last "." character must followed by 2 characters
     *  - "@" must not immediately followed by "."
     *
     * @param email         Email Address
     * @returns {boolean}   Returns true if valid; false if invalid
     */
    static validateEmail(email:string): boolean {
        var retVal : boolean = false;
        var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        retVal = emailReg.test(email);
        return retVal;
    }
    //     // RFC 2822 compliant regex
    //     if (control.value.test(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {

    /**
     * Validate full name.  Name must have a space.
     *
     * @param fullName      First and last name
     * @returns {boolean}   Returns true if valid; false if invalid
     */
    static validateFullName(fullName: string): boolean {
        var retVal : boolean = false;
        var result = fullName.split(' ');
        if (result.length > 1) {
            retVal = true;
        }
        return retVal;
    }

    /**
     * Validates phone number.  Must be 10 digit long.
     *
     * @param phone         Phone number
     * @returns {boolean}   Returns true if valid; false if invalid
     */
    static validatePhone(phone: string): boolean {
        var retVal : boolean = false;
        if (phone !== '') {
            var phnReg = /^[0-9]*$/;
            var isNum = phnReg.test(phone);
            if (isNum && phone.length === 10) {
                retVal = true;
            }
        } else {
            retVal = true;
        }

        return retVal;
    }
    
}