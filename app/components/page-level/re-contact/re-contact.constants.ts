export class ReConConstants {
    public static get SURVEY_TYPE_PARENT()          :string {return "parent"};
    public static get SURVEY_TYPE_LEGAL()           :string {return "legalrep"};
    public static get SURVEY_TYPE_SELF()            :string {return "selfreport"};
    
    public static get CONTACT_USER_NOT_SELECTED()   : number {return -1};
    public static get CONTACT_USER_NO_CONTACT()     : number {return 1};
    public static get CONTACT_USER()                : number {return 2};
    
    public static get TRACKING_KEY_RECONTACT()      : string {return 'recontact'};
    public static get TRACKING_KEY_FULL_NAME()      : string {return 'recontact_full_name'};
    public static get TRACKING_KEY_PHONE_MAIN()     : string {return 'phone_main_number'};
    public static get TRACKING_KEY_PHONE_MAIN_EXT() : string {return 'phone_main_ext'};
    public static get TRACKING_KEY_PHONE_ALT1()     : string {return 'phone_alt1_number'};
    public static get TRACKING_KEY_PHONE_ALT1_EXT()  : string {return 'phone_alt1_ext'};
    public static get TRACKING_KEY_EMAIL()          : string {return 'recontact_email'};

}