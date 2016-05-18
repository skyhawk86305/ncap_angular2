import { SeedDataPageQuestions } from '../types/database-data/page-questions';
import { PageQuestion } from '../types/database-data/page-question';

export var pageQuestionDict: SeedDataPageQuestions = {
    1: [
        new PageQuestion(1,100,0,'IN',1,30,3,null,'The National Collaborative Autism Project will help researchers learn how exposure to pollutants in the environment and social stressors may be linked to autism spectrum disorder (ASD). Our goal is to help figure out why ASD rates are increasing. This survey will help us collect data on people affected with ASD and on those who are not affected. You must be 18 or older to take the survey.\nThis project is led by Dr. Marie Lynn Miranda at Rice University\'s National Center for Geospatial Medicine. This project is funded by the National Institute of Mental Health, part of the National Institutes of Health.','The National Collaborative Autism Project will help researchers learn how exposure to pollutants in the environment and social stressors may be linked to autism spectrum disorder (ASD). Our goal is to help figure out why ASD rates are increasing. This survey will help us collect data on people affected with ASD and on those who are not affected. You must be 18 or older to take the survey.\nThis project is led by Dr. Marie Lynn Miranda at Rice University\'s National Center for Geospatial Medicine. This project is funded by the National Institute of Mental Health, part of the National Institutes of Health.','The National Collaborative Autism Project will help researchers learn how exposure to pollutants in the environment and social stressors may be linked to autism spectrum disorder (ASD). Our goal is to help figure out why ASD rates are increasing. This survey will help us collect data on people affected with ASD and on those who are not affected. You must be 18 or older to take the survey.\nThis project is led by Dr. Marie Lynn Miranda at Rice University\'s National Center for Geospatial Medicine. This project is funded by the National Institute of Mental Health, part of the National Institutes of Health.',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,200,0,'IN',16,18,2,null,'<!-- No explicit question as there are no Next button on this page -->','<!-- No explicit question as there are no Next button on this page -->','<!-- No explicit question as there are no Next button on this page -->',25,25,25,'respondent_type',null,null,null,null,null,'respondent_type' ) 
    ],
    2: [
        new PageQuestion(1,300,0,'IN',1,8,3,null,'<Insert consent introductory text here>','<Insert consent introductory text here>','<Insert consent introductory text here>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,400,0,'IN',13,3,2,null,'I agree.  Proceed to the survey.','I agree.  Proceed to the survey.','I agree.  Proceed to the survey.',29,29,29,'initial_consent',null,null,null,null,null,'initial_consent' ) 
    ],
    3: [
        new PageQuestion(1,500,0,'BS',2,8,3,null,'Child Characteristics','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,600,0,'BS',3,8,3,null,'You have chosen to complete the survey about a child. We ask about the child\'s characteristics to collect basic data on each person.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,700,0,'BS',4,1,2,null,'Has the child ever been diagnosed with ASD <tooltip id="1"/>, which includes Asperger syndrome, childhood disintegrative disorder, and pervasive developmental disorders not otherwise specified?','-- TBD --','-- TBD --',29,29,29,'asd_yes_no',null,null,null,null,null,'asd_yes_no' ) ,
        new PageQuestion(4,800,0,'BS',4,9,2,null,'What is the child\'s date of birth? (mm/dd/yyyy):','-- TBD --','-- TBD --',35,36,37,'proband_DOB','Birthday',null,null,null,null,'proband_DOB' ) 
    ],
    4: [
        new PageQuestion(1,900,0,'BS',4,1,1,null,'What was the child\'s sex at birth?','-- TBD --','-- TBD --',23,23,23,'sex_at_birth',null,null,null,null,null,'sex_at_birth' ) ,
        new PageQuestion(2,1000,0,'BS',4,3,1,null,'What is the child\'s race?  (Select all that apply.)','-- TBD --','-- TBD --',21,21,21,'race',null,null,null,null,null,'race' ) ,
        new PageQuestion(3,1100,0,'BS',4,1,1,null,'What is the child\'s ethnicity  <tooltip id="7"/> ?','-- TBD --','-- TBD --',11,11,11,'ethnicity',null,null,null,null,null,'ethnicity' ) ,
        new PageQuestion(4,1200,1,'BS',4,16,3,null,'What is the child\'s height?','-- TBD --','-- TBD --',null,null,null,'height_std',null,null,null,null,null,null ) ,
        new PageQuestion(5,1500,0,'BS',18,6,1,null,'What is the child\'s weight in pounds?','-- TBD --','-- TBD --',46,46,46,'weight_std','Weight',1,1,1,'Please enter a valid weight.','weight_std' ) 
    ],
    8: [
        new PageQuestion(1,2400,0,'GD',2,8,3,null,'Birth Certificate Information for Child','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,2500,0,'GD',3,8,3,null,'<strong>Enter this information as it appears on the child\'s birth certificate.</strong> We ask for this to create an identifier that is unique to the child. This identifier can link the child to new or existing research data. Birth certificate data is never shared.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,2600,0,'GD',7,6,1,null,'First Name','First Name','First Name',null,null,null,'firstName','First Name',null,null,null,null,'firstName' ) ,
        new PageQuestion(4,2700,0,'GD',7,6,0,null,'Middle Name','Middle Name','Middle Name',null,null,null,'middleName','Middle Name',null,null,null,null,null ) ,
        new PageQuestion(5,2800,0,'GD',7,6,1,null,'Last Name','Last Name','Last Name',null,null,null,'lastName','Last Name',null,null,null,null,'lastName' ) ,
        new PageQuestion(6,2900,0,'GD',4,1,1,null,'Does the child have a middle name?','-- TBD --','-- TBD --',29,29,29,'middleName_confirm',null,null,null,null,null,'middleName_confirm' ) ,
        new PageQuestion(7,3000,0,'GD',7,6,1,null,'City of birth (as it appears on birth certificate. U.S. cities only)','City of birth (as it appears on birth certificate. U.S. cities only)','City of birth (as it appears on birth certificate. U.S. cities only)',null,null,null,'birthCertCity','City',null,null,null,null,'birthCertCity' ) ,
        new PageQuestion(8,3050,0,'GD',4,7,0,null,'State','State','State',24,24,24,'proband_state_GUID',null,null,null,null,null,null ) ,
        new PageQuestion(9,3100,0,'GD',2,8,3,null,'Birth Certificate Information for Biological Mother','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(10,3200,0,'GD',3,8,3,null,'<strong>Enter this information as it appears on the birth certificate of the child\'s biological mother</strong>. We ask for this to create an identifier that is unique to the child\'s mother. This identifier can link the mother to new or existing research data. Birth certificate data is never shared.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(11,3300,0,'GD',7,6,1,null,'First Name','First Name','First Name',null,null,null,'firstNameMother','First Name',null,null,null,null,'firstNameMother' ) ,
        new PageQuestion(12,3400,0,'GD',7,6,0,null,'Middle Name','Middle Name','Middle Name',null,null,null,'middleNameMother','Middle Name',null,null,null,null,null ) ,
        new PageQuestion(13,3500,0,'GD',7,6,1,null,'Last Name','Last Name','Last Name',null,null,null,'lastNameMother','Last Name',null,null,null,null,'lastNameMother' ) ,
        new PageQuestion(14,3600,0,'GD',4,1,1,null,'Does the mother have a middle name?','-- TBD --','-- TBD --',29,29,29,'middleNameMother_confirm',null,null,null,null,null,'middleNameMother_confirm' ) ,
        new PageQuestion(14,3600,0,'GD',8,9,1,null,'Date of birth (month/day/year)','Date of birth (month/day/year)','Date of birth (month/day/year)',38,39,40,'mother_DOB','Birthday',null,null,null,null,'mother_DOB' ) ,
        new PageQuestion(15,3700,0,'GD',7,6,1,null,'City of birth (as it appears on birth certificate)','City of birth (as it appears on birth certificate)','City of birth (as it appears on birth certificate)',null,null,null,'birthCertCityMother','City',null,null,null,null,'birthCertCityMother' ) ,
        new PageQuestion(16,3750,0,'GD',4,7,0,null,'State','State','State',44,44,44,'mother_state_GUID',null,null,null,null,null,null ) 
    ],
    5: [
        new PageQuestion(1,1600,0,'RS',2,8,3,null,'Residential Information','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,1700,0,'RS',3,8,3,null,'We ask for addresses where the child and parents lived to connect the location with other data. Even limited information about location helps. <u>Please enter as much as you can remember.</u>','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,1800,0,'RS',4,8,2,null,'Where did the child live from birth through the first year of their life?','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,'<!--special case-->','<!--special case-->' ) ,
        new PageQuestion(4,1900,0,'RS',15,8,3,null,'Please include all addresses during this 1-year period, along with dates of residence. Click \'Save Address\' to save each address you enter. When all addresses have been entered, click \'Next\'.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) 
    ],
    6: [
        new PageQuestion(1,2000,0,'RS',4,8,2,null,'Where did the child\'s biological mother live for the 2 years prior to the child\'s birth? ','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,'<!--special case-->','<!--special case-->' ) ,
        new PageQuestion(2,2100,0,'RS',15,8,3,null,'Please include all addresses during this 2-year period, along with dates of residence. Click \'Save Address\' to save each address you enter. When all addresses have been entered, click \'Next\'.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) 
    ],
    7: [
        new PageQuestion(1,2200,0,'RS',4,8,2,null,'Where did the child\'s biological father live for the 2 years prior to the child\'s birth?','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,'<!--special case-->','<!--special case-->' ) ,
        new PageQuestion(2,2300,0,'RS',15,8,3,null,'Please include all addresses during this 2-year period, along with dates of residence. Click \'Save Address\' to save each address you enter. When all addresses have been entered, click \'Next\'.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) 
    ],
    9: [
        new PageQuestion(1,3800,0,'DI',16,8,3,null,'<!-- This row is to be deleted -->','<!-- This row is to be deleted -->','<!-- This row is to be deleted -->',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,3900,0,'DI',3,8,3,null,'The next set of questions is about the child\'s ASD diagnosis. Please answer as best you can. You indicated earlier in the survey that the child received a diagnosis of ASD.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,4000,0,'DI',4,7,1,null,'How old was the child when you or anyone else started to be concerned about their development?','-- TBD --','-- TBD --',7,1,7,'dev_concern_age',null,null,null,null,null,'dev_concern_age' ) ,
        new PageQuestion(4,4100,0,'DI',4,7,1,null,'About how old was the child when they were diagnosed with ASD?','About how old was the individual when they were diagnosed with ASD?','About how old were you when you were diagnosed with ASD?',1,2,2,'ASD_diag_age',null,null,null,null,null,'ASD_diag_age' ) ,
        new PageQuestion(5,4200,1,'DI',4,4,1,null,'Who diagnosed the child with ASD?','-- TBD --','-- TBD --',8,8,8,'ASD_diag_src',null,null,null,null,null,'ASD_diag_src' ) 
    ],
    10: [
        new PageQuestion(1,4400,0,'PH',2,8,3,null,'<!-- This row is to be deleted -->','<!-- This row is to be deleted -->','<!-- This row is to be deleted -->',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,4500,0,'PH',3,8,3,null,'The next set of questions is about the child\'s symptoms, behaviors, and development. Please answer as best you can.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,4600,1,'PH',4,10,3,null,'Did the child display the following developmental milestones?','-- TBD --','-- TBD --',31,31,31,null,null,null,null,null,null,null ) ,
        new PageQuestion(4,4950,1,'PH',4,12,3,null,'Did the child have any of the following behaviors or symptoms during any stage of development?','-- TBD --','-- TBD --',31,31,31,null,null,null,null,null,null,null ) 
    ],
    11: [
        new PageQuestion(1,6300,1,'PH',4,11,3,null,'Did the child:','-- TBD --','-- TBD --',33,33,33,null,null,null,null,null,null,null ) 
    ],
    12: [
        new PageQuestion(1,8000,0,'PH',4,1,1,null,'Does the child currently walk on their own?','-- TBD --','-- TBD --',33,33,33,'WalkByOneself',null,null,null,null,null,'WalkByOneself' ) ,
        new PageQuestion(2,8100,0,'PH',4,7,1,null,'How old was child when they first walked?','-- TBD --','-- TBD --',4,4,4,'WalkByOneselfAge','Please select',null,null,null,null,'WalkByOneselfAge' ) ,
        new PageQuestion(3,8200,0,'PH',4,1,1,null,'What best describes the child\'s current verbal skill?','-- TBD --','-- TBD --',26,26,26,'VerbalSkill',null,null,null,null,null,'VerbalSkill' ) ,
        new PageQuestion(4,8300,0,'PH',4,7,1,null,'At what age did the child say their first words?','-- TBD --','-- TBD --',1,1,1,'FirstWordsAge','Please select',null,null,null,null,'FirstWordsAge' ) ,
        new PageQuestion(5,8400,0,'PH',4,7,1,null,'At what age did they string two to three words together to express needs?','-- TBD --','-- TBD --',1,1,1,'StringWordsAge','Please select',null,null,null,null,'StringWordsAge' ) 
    ],
    13: [
        new PageQuestion(1,8500,1,'PH',4,10,3,null,'How often does the child currently:','-- TBD --','-- TBD --',13,13,13,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,9000,1,'PH',4,10,3,null,'How often does the child currently:','-- TBD --','-- TBD --',13,13,13,null,null,null,null,null,null,null ) 
    ],
    14: [
        new PageQuestion(1,9800,1,'PH',4,10,3,null,'How often does the child currently:','-- TBD --','-- TBD --',13,13,13,null,null,null,null,null,null,null ) 
    ],
    15: [
        new PageQuestion(1,10700,0,'PH',4,8,3,null,'Has a physician ever diagnosed your child with any of the following?','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,10800,1,'PH',4,12,3,null,'Learning, developmental, behavior issues:','Learning, developmental, behavior issues:','Learning, developmental, behavior issues:',30,30,30,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,11800,1,'PH',4,12,3,null,'Emotional health issues:','Emotional health issues:','Emotional health issues:',30,30,30,null,null,null,null,null,null,null ) ,
        new PageQuestion(4,12500,1,'PH',4,12,3,null,'Other health issues:','Other health issues:','Other health issues:',30,30,30,null,null,null,null,null,null,null ) 
    ],
    16: [
        new PageQuestion(1,13400,1,'PH',4,12,3,null,'Has the child ever experienced any of the following?','-- TBD --','-- TBD --',30,30,30,null,null,null,null,null,null,null ) 
    ],
    17: [
        new PageQuestion(1,14100,0,'PH',2,8,3,null,'Environmental Exposures','Environmental Exposures','Environmental Exposures',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,14200,0,'EN',3,8,3,null,'We ask the next set of questions to learn about the child\'s environment. Please answer as best you can.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,14220,0,'EN',4,1,1,null,null,'What is the highest level of education that the individual completed?','What is the highest level of education that you have completed?',null,10,10,'edu_level_proband',null,null,null,null,null,'edu_level_proband' ) ,
        new PageQuestion(4,14240,0,'EN',4,1,1,null,null,'Is the individual currently employed?','Are you currently employed?',null,29,29,'proband_employed',null,null,null,null,null,'proband_employed' ) ,
        new PageQuestion(5,14250,0,'EN',4,4,1,null,null,'Please tell us more about the individual\'s work. Check all that apply.','Please tell us more about your work. Check all that apply.',null,47,47,'proband_employ_details',null,null,null,null,null,'proband_employ_details' ) ,
        new PageQuestion(7,14260,0,'EN',4,2,1,null,null,'Please tell us more about why the respondent is not working.','Please tell us more about why you are not working.',null,48,48,'proband_unemploy_details',null,null,null,null,null,'proband_unemploy_details' ) ,
        new PageQuestion(9,14270,0,'EN',4,1,1,null,null,'Does the individual currently receive any federal or state benefits, such as Social Security Disability Insurance (SSDI) or Medicaid?','Do you currently receive any federal or state benefits, such as Social Security Disability Insurance (SSDI) or Medicaid?',null,32,32,'proband_govt_benefits',null,null,null,null,null,'proband_govt_benefits' ) 
    ],
    18: [
        new PageQuestion(1,14300,0,'EN',3,8,3,null,'This group of questions is about the <strong>mother</strong> of the child.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,14400,0,'EN',4,7,1,null,'What was the mother\'s age at the time the child was born?','-- TBD --','-- TBD --',5,5,5,'mother_age_when_proband_born','Please select',null,null,null,null,'mother_age_when_proband_born' ) ,
        new PageQuestion(3,14500,0,'EN',4,1,1,null,'What was the highest grade of school the mother completed or the highest degree received <u>at the time the child was born</u>?','-- TBD --','-- TBD --',10,10,10,'edu_level_mother',null,null,null,null,null,'edu_level_mother' ) 
    ],
    19: [
        new PageQuestion(1,14600,0,'EN',4,7,1,null,'How many weeks pregnant was the mother when the child was born?','-- TBD --','-- TBD --',28,28,28,'weeks_pregnant',null,null,null,null,null,'weeks_pregnant' ) ,
        new PageQuestion(2,14700,0,'EN',4,1,1,null,'Did the mother breastfeed the child?','-- TBD --','-- TBD --',32,32,32,'breastfed',null,null,null,null,null,'breastfed' ) ,
        new PageQuestion(3,14800,0,'EN',4,1,1,null,'How long did the mother breastfeed the child?','-- TBD --','-- TBD --',6,6,6,'breastfed_duration',null,null,null,null,null,'breastfed_duration' ) 
    ],
    20: [
        new PageQuestion(1,14900,0,'EN',14,8,3,null,'Answer the next questions based on the <strong>three months before conception, through pregnancy, and through the first year of the child\'s life.</strong>','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) 
    ],
    21: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,15000,0,'EN',4,1,1,null,'Did the <u>mother</u> use tobacco products during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',32,32,32,'tobacco_use_mother',null,null,null,null,null,'tobacco_use_mother' ) ,
        new PageQuestion(3,15100,0,'EN',4,1,1,null,'How often was the <u>mother</u> exposed to second-hand smoke during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',14,14,14,'Second_hand_smoke_freq_mother',null,null,null,null,null,'Second_hand_smoke_freq_mother' ) ,
        new PageQuestion(4,15200,0,'EN',4,1,1,null,'How often did the mother eat fish, shellfish, or other seafood during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',14,14,14,'seafood_freq_mother',null,null,null,null,null,'seafood_freq_mother' ) ,
        new PageQuestion(5,15300,0,'EN',4,1,1,null,'Excluding prenatal vitmains, did the mother take <u>any</u> prescription medicine during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',32,32,32,'prescr_drugs_mother',null,null,null,null,null,'prescr_drugs_mother' ) ,
        new PageQuestion(6,15400,0,'EN',4,1,1,null,'Excluding prenatal vitamins, did the mother take <u>any</u> over-the-counter medicine during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',32,32,32,'OTC_drugs_mother',null,null,null,null,null,'OTC_drugs_mother' ) 
    ],
    22: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,15500,1,'EN',4,10,3,null,'How often did the mother use the following personal care products during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',14,14,14,null,null,null,null,null,null,null ) 
    ],
    23: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,16600,1,'EN',4,2,1,null,'Which of the following best describes the mother\'s occupation during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',20,20,20,'occupation_mother',null,null,null,null,null,'occupation_mother' ) 
    ],
    24: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,16800,1,'EN',4,10,3,null,'At work or in daily life, was the mother exposed to any of the following during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',30,30,30,null,null,null,null,null,null,null ) 
    ],
    25: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,18200,0,'EN',3,8,3,null,'These questions are about the <strong>household</strong> where the child\'s mother lived <strong>during the three months before conception, through pregnancy, and through the first year of the child\'s life.</strong>.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,18300,0,'EN',4,1,1,null,'How many residences did the mother live in during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',18,18,18,'residence_number_mother',null,null,null,null,null,'residence_number_mother' ) ,
        new PageQuestion(4,18400,0,'EN',4,5,1,null,'For any residence where the mother lived during the three months before conception, through pregnancy, and through the first year of the child\'s life., where did the drinking water come from? Select all that apply.','-- TBD --','-- TBD --',27,27,27,'water_source_mother',null,null,null,null,null,'water_source_mother' ) ,
        new PageQuestion(6,18600,0,'EN',4,1,1,null,'Was any residence where the mother lived during the three months before conception, through pregnancy, and through the first year of the child\'s life. built before 1978?','-- TBD --','-- TBD --',30,30,30,'residence_pre_78_mother',null,null,null,null,null,'residence_pre_78_mother' ) 
    ],
    26: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,18700,1,'EN',4,10,3,null,'Was the mother\'s home treated for insects, bugs, or pests (with foggers <tooltip id="16"/> , fumigators <tooltip id="17"/> , or sprays) by any of the following during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',30,30,30,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,19200,1,'EN',4,10,3,null,'If the mother\'s home had a dog, cat, or other mammal, were any of the following used during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',32,32,32,null,null,null,null,null,null,null ) ,
        new PageQuestion(4,19600,0,'EN',4,1,1,null,'How often were air fresheners, candles, sprays or similar products used inside the mother\'s home during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',15,15,15,'home_fragrance_freq_mother',null,null,null,null,null,'home_fragrance_freq_mother' ) 
    ],
    27: [
        new PageQuestion(1,19700,0,'EN',3,8,3,null,'This group of questions is about the <strong>father</strong> of the child.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,19800,0,'EN',4,7,1,null,'What was the father\'s age <u>at the time the child was born</u>?','-- TBD --','-- TBD --',5,5,5,'father_age_when_proband_born','Please select',null,null,null,null,'father_age_when_proband_born' ) ,
        new PageQuestion(3,19900,0,'EN',4,1,1,null,'What was the highest grade of school the father completed or the highest degree received at the time the child was born?','-- TBD --','-- TBD --',10,10,10,'edu_level_father',null,null,null,null,null,'edu_level_father' ) 
    ],
    28: [
        new PageQuestion(1,20000,0,'EN',14,8,3,null,'Answer the next questions based on the <strong>three months before conception</strong>.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,20050,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 2>','<Placeholder for the URL of timeline 2>','<Placeholder for the URL of timeline 2>',null,null,null,null,null,null,null,null,null,null ) 
    ],
    29: [
        new PageQuestion(1,20050,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 2>','<Placeholder for the URL of timeline 2>','<Placeholder for the URL of timeline 2>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,20100,0,'EN',4,1,1,null,'Did the <u>father</u> use tobacco products during the three months before conception?','-- TBD --','-- TBD --',32,32,32,'tobacco_use_father',null,null,null,null,null,'tobacco_use_father' ) ,
        new PageQuestion(3,20200,0,'EN',4,1,1,null,'How often was the <u>father</u> exposed to second-hand smoke during the three months before conception?','-- TBD --','-- TBD --',14,14,14,'Second_hand_smoke_freq_father',null,null,null,null,null,'Second_hand_smoke_freq_father' ) ,
        new PageQuestion(4,20300,0,'EN',4,1,1,null,'How often did the father eat fish, shellfish, or other seafood during the three months before conception?','-- TBD --','-- TBD --',14,14,14,'seafood_freq_father',null,null,null,null,null,'seafood_freq_father' ) ,
        new PageQuestion(5,20400,0,'EN',4,1,1,null,'Did the father take any prescription medicine during the three months before conception?','-- TBD --','-- TBD --',32,32,32,'prescr_drugs_father',null,null,null,null,null,'prescr_drugs_father' ) ,
        new PageQuestion(6,20500,0,'EN',4,1,1,null,'Did the father take any over-the-counter medicine during the three months before conception?','-- TBD --','-- TBD --',32,32,32,'OTC_drugs_father',null,null,null,null,null,'OTC_drugs_father' ) 
    ],
    30: [
        new PageQuestion(1,20050,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 2>','<Placeholder for the URL of timeline 2>','<Placeholder for the URL of timeline 2>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,20600,1,'EN',4,10,3,null,'How often did the father use the following personal care products during the three months before conception?','-- TBD --','-- TBD --',14,14,14,null,null,null,null,null,null,null ) 
    ],
    31: [
        new PageQuestion(1,21700,0,'EN',14,8,3,null,'Answer the next questions <strong>based on the three months before conception, through pregnancy, and through the first year of the child\'s life.</strong>.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) 
    ],
    32: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,21800,1,'EN',4,2,3,null,'Which of the following best describes the father\'s occupation during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',20,20,20,'occupation_father',null,null,null,null,null,'occupation_father' ) 
    ],
    33: [
        new PageQuestion(1,14950,0,'EN',17,8,3,null,'<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>','<Placeholder for the URL of timeline 1>',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,22000,1,'EN',4,10,3,null,'At work or in daily life, was the father exposed to any of the following during the three months before conception, through pregnancy, and through the first year of the child\'s life.?','-- TBD --','-- TBD --',30,30,30,null,null,null,null,null,null,null ) 
    ],
    34: [
        new PageQuestion(1,23400,0,'EN',3,8,3,null,'The following question is about the child and covers the first year of their life.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,23500,0,'EN',4,1,1,null,'How often was the child exposed to second-hand smoke <u>during the first year of their life</u>.','-- TBD --','-- TBD --',14,14,14,'Second_hand_smoke_freq_child',null,null,null,null,null,'Second_hand_smoke_freq_child' ) 
    ],
    35: [
        new PageQuestion(1,23600,0,'SB',2,8,3,null,'Sibling Information','Sibling Information','Sibling Information',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,23700,0,'SB',3,8,3,null,'We ask questions about the child\'s siblings to know if others in your family have ASD.','-- TBD --','-- TBD --',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,23800,0,'SB',4,1,1,null,'How many siblings does the child have?','-- TBD --','-- TBD --',30,30,30,'has_sibling',null,null,null,null,null,'has_sibling' ) ,
        new PageQuestion(4,23900,0,'SB',4,1,1,null,'How many of the child\'s siblings have received a diagnosis of ASD, which includes Asperger syndrome, childhood disintegrative disorder, and pervasive developmental disorder not otherwise specified (PDD-NOS)?','-- TBD --','-- TBD --',45,45,45,'nb_sibling_with_ASD',null,null,null,null,null,'nb_sibling_with_ASD' ) 
    ],
    36: [
        new PageQuestion(1,24100,0,'RC',2,8,3,null,'Recontact','Recontact','Recontact',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,24200,0,'RC',3,8,3,null,'As we learn more about ASD, we may develop other studies that interest you. If you are willing to let us contact you about these new studies, please enter your information below. We will not share your contact information with other people. ','As we learn more about ASD, we may develop other studies that interest you. If you are willing to let us contact you about these new studies, please enter your information below. We will not share your contact information with other people. ','As we learn more about ASD, we may develop other studies that interest you. If you are willing to let us contact you about these new studies, please enter your information below. We will not share your contact information with other people. ',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(3,24300,0,'RC',4,1,2,null,'Please select one of the following:','Please select one of the following:','Please select one of the following:',22,22,22,'recontact',null,null,null,null,null,'recontact' ) ,
        new PageQuestion(4,24400,0,'RC',7,6,2,null,'Full Name','Full Name','Full Name',null,null,null,'recontact_full_name',null,null,null,null,'Please provide a complete name that does not start with a space character.','recontact_full_name' ) ,
        new PageQuestion(5,24500,0,'RC',4,8,3,null,'<u>Please provide as many phone numbers as possible</u> so that we can easily reach you.','<u>Please provide as many phone numbers as possible</u> so that we can easily reach you.','<u>Please provide as many phone numbers as possible</u> so that we can easily reach you.',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(6,24600,0,'RC',7,6,2,null,'Main phone number','Main phone number','Main phone number',null,null,null,'phone_main_number',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->','phone_main_number' ) ,
        new PageQuestion(7,24700,0,'RC',7,6,0,null,'ext.','ext.','ext.',null,null,null,'phone_main_ext',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(8,24800,0,'RC',13,3,0,null,'The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.',29,29,29,'phone_main_foreign',null,null,null,null,null,null ) ,
        new PageQuestion(9,24900,0,'RC',7,6,0,null,'Alt phone number 1','Alt phone number 1','Alt phone number 1',null,null,null,'phone_alt1_number',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(10,25000,0,'RC',7,6,0,null,'ext.','ext.','ext.',null,null,null,'phone_alt1_ext',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(11,25100,0,'RC',13,3,0,null,'The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.',29,29,29,'phone_alt1_foreign',null,null,null,null,null,null ) ,
        new PageQuestion(12,25200,0,'RC',7,6,0,null,'Alt phone number 2','Alt phone number 2','Alt phone number 2',null,null,null,'phone_alt2_number',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(13,25300,0,'RC',7,6,0,null,'ext.','ext.','ext.',null,null,null,'phone_alt2_ext',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(14,25400,0,'RC',13,3,0,null,'The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.',29,29,29,'phone_alt2_foreign',null,null,null,null,null,null ) ,
        new PageQuestion(15,25500,0,'RC',7,6,0,null,'Alt phone number 3','Alt phone number 3','Alt phone number 3',null,null,null,'phone_alt3_number',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(16,25600,0,'RC',7,6,0,null,'ext.','ext.','ext.',null,null,null,'phone_alt3_ext',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(17,25700,0,'RC',13,3,0,null,'The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.',29,29,29,'phone_alt3_foreign',null,null,null,null,null,null ) ,
        new PageQuestion(18,25800,0,'RC',7,6,0,null,'Alt phone number 4','Alt phone number 4','Alt phone number 4',null,null,null,'phone_alt4_number',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(19,25900,0,'RC',7,6,0,null,'ext.','ext.','ext.',null,null,null,'phone_alt4_ext',null,null,null,null,'<!-- Handled by the validation_rule  function. See CR #98 -->',null ) ,
        new PageQuestion(20,26000,0,'RC',13,3,0,null,'The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.','The above phone number does not have 10 digits. Please enter a 10-digit phone number or check this box if this is a foreign number.',29,29,29,'phone_alt4_foreign',null,null,null,null,null,null ) ,
        new PageQuestion(21,26100,0,'RC',7,6,1,null,'Email address','Email address','Email address',null,null,null,'recontact_email',null,null,null,null,'Please enter a valid email address.','recontact_email' ) 
    ],
    37: [
        new PageQuestion(1,26200,0,'TY',2,8,3,null,'Your information has been submitted!','Your information has been submitted!','Your information has been submitted!',null,null,null,null,null,null,null,null,null,null ) ,
        new PageQuestion(2,26300,0,'TY',12,8,3,null,'Thank you for your participation in the NCAP survey.  We truly value the information you have provided.  Your responses are very important to better understand probable links between the exposure to environmental and social factors and ASD in the United States.<br><br>\nIf you wish to fill out the information for another individual, please click the \u201cReturn to main page\u201d button below and then click \\"Start the survey\\" link on the main page to start another survey. Otherwise, click on \\"Exit survey\\".','Thank you for your participation in the NCAP survey.  We truly value the information you have provided.  Your responses are very important to better understand probable links between the exposure to environmental and social factors and ASD in the United States.<br><br>\nIf you wish to fill out the information for another individual, please click the \u201cReturn to main page\u201d button below and then click \\"Start the survey\\" link on the main page to start another survey. Otherwise, click on \\"Exit survey\\".','Thank you for your participation in the NCAP survey.  We truly value the information you have provided.  Your responses are very important to better understand probable links between the exposure to environmental and social factors and ASD in the United States.<br><br>\nIf you wish to fill out the information for another individual, please click the \u201cReturn to main page\u201d button below and then click \\"Start the survey\\" link on the main page to start another survey. Otherwise, click on \\"Exit survey\\".',null,null,null,null,null,null,null,null,null,null ) 
    ]
}