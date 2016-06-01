import { SubuQuestions } from '../types/database-data/subu-questions';
import { SubuQuestion } from '../types/database-data/subu-question';

export var subuQuestionDict: SubuQuestions = {
    1200: [
        new SubuQuestion(4,'1200',1300,1,'BS',null,null,null,6,7,1,1200,'Feet','Feet','Feet',16,16,16,'height_ft_part','Please select',null,null,null,null,'height_ft_part' ) ,
        new SubuQuestion(4,'1200',1400,2,'BS',null,null,null,6,7,1,1200,'Inches','Inches','Inches',17,17,17,'height_in_part','Please select',null,null,null,null,'height_in_part' ) 
    ],
    4200: [
        new SubuQuestion(9,'4200',4300,1,'DI',4,4,4,16,6,0,4200,null,null,null,null,null,null,'ASD_diag_src_Other','(Please indicate)',null,null,null,null,null ) 
    ],
    4600: [
        new SubuQuestion(10,'4600',4700,1,'PH',null,null,null,5,1,1,4600,'Babbling or pointing by age 1','-- TBD --','-- TBD --',31,31,31,'babble_point_1yr',null,null,null,null,null,'babble_point_1yr' ) ,
        new SubuQuestion(10,'4600',4800,2,'PH',null,null,null,5,1,1,4600,'Spoke single words by 16 months','-- TBD --','-- TBD --',31,31,31,'single_word_16mo',null,null,null,null,null,'single_word_16mo' ) ,
        new SubuQuestion(10,'4600',4900,3,'PH',null,null,null,5,1,1,4600,'Spoke two-word phrases by age 2','-- TBD --','-- TBD --',31,31,31,'two_words_2yr',null,null,null,null,null,'two_words_2yr' ) 
    ],
    4950: [
        new SubuQuestion(10,'4950',5000,1,'PH',null,null,null,5,1,1,4950,'No response to name','-- TBD --','-- TBD --',31,31,31,'no_response_to_name',null,null,null,null,null,'no_response_to_name' ) ,
        new SubuQuestion(10,'4950',5100,2,'PH',null,null,null,5,1,1,4950,'Loss of language or social skills','-- TBD --','-- TBD --',31,31,31,'loss_lang_soc_skills',null,null,null,null,null,'loss_lang_soc_skills' ) ,
        new SubuQuestion(10,'4950',5200,3,'PH',null,null,null,5,1,1,4950,'Poor eye contact','-- TBD --','-- TBD --',31,31,31,'poor_eye_contact',null,null,null,null,null,'poor_eye_contact' ) ,
        new SubuQuestion(10,'4950',5300,4,'PH',null,null,null,5,1,1,4950,'Excessive lining up of toys or objects','-- TBD --','-- TBD --',31,31,31,'excess_line_up_objects',null,null,null,null,null,'excess_line_up_objects' ) ,
        new SubuQuestion(10,'4950',5400,5,'PH',null,null,null,5,1,1,4950,'No smiling or social responsiveness','-- TBD --','-- TBD --',31,31,31,'no_smile_soc_resp',null,null,null,null,null,'no_smile_soc_resp' ) ,
        new SubuQuestion(10,'4950',5500,6,'PH',null,null,null,5,1,1,4950,'Trouble making friends with peers','-- TBD --','-- TBD --',31,31,31,'trouble_making_friends',null,null,null,null,null,'trouble_making_friends' ) ,
        new SubuQuestion(10,'4950',5600,7,'PH',null,null,null,5,1,1,4950,'Trouble starting or maintaining a conversation with others','-- TBD --','-- TBD --',31,31,31,'trouble_start_maintain_convo',null,null,null,null,null,'trouble_start_maintain_convo' ) ,
        new SubuQuestion(10,'4950',5700,8,'PH',null,null,null,5,1,1,4950,'Absence or trouble with imaginative or social play','-- TBD --','-- TBD --',31,31,31,'troube_imag_soc_play',null,null,null,null,null,'troube_imag_soc_play' ) ,
        new SubuQuestion(10,'4950',5800,9,'PH',null,null,null,5,1,1,4950,'Repetitive or unusual use of language','-- TBD --','-- TBD --',31,31,31,'repetitive_unusual_lang',null,null,null,null,null,'repetitive_unusual_lang' ) ,
        new SubuQuestion(10,'4950',5900,10,'PH',null,null,null,5,1,1,4950,'Restricted patterns of interest that are unusual in intensity or focus','-- TBD --','-- TBD --',31,31,31,'restricted_interests',null,null,null,null,null,'restricted_interests' ) ,
        new SubuQuestion(10,'4950',6000,11,'PH',null,null,null,5,1,1,4950,'Preoccupation with certain objects or subjects','-- TBD --','-- TBD --',31,31,31,'preoccup_obj_sub',null,null,null,null,null,'preoccup_obj_sub' ) ,
        new SubuQuestion(10,'4950',6100,12,'PH',null,null,null,5,1,1,4950,'Trouble adjusting to changes in specific routines or rituals','-- TBD --','-- TBD --',31,31,31,'trouble_adjust_changes',null,null,null,null,null,'trouble_adjust_changes' ) ,
        new SubuQuestion(10,'4950',6200,13,'PH',null,null,null,5,14,0,4950,'Other','-- TBD --','-- TBD --',null,null,null,'other_verbal_social_problem','(Please indicate)',null,null,null,null,null ) 
    ],
    6300: [
        new SubuQuestion(11,'6300',6400,1,'PH',null,null,null,5,13,1,6300,'Lose speech or language skills?','-- TBD --','-- TBD --',33,33,33,'LoseSpeech',null,null,null,null,null,'LoseSpeech' ) ,
        new SubuQuestion(11,'6300',6600,2,'PH',null,null,null,5,13,1,6300,'Slow or stop developing new speech or language skills?','-- TBD --','-- TBD --',33,33,33,'SlowStopSpeech',null,null,null,null,null,'SlowStopSpeech' ) ,
        new SubuQuestion(11,'6300',6800,3,'PH',null,null,null,5,13,1,6300,'Lose motor skills (walking, jumping, playing with small toys)?','-- TBD --','-- TBD --',33,33,33,'LoseMotor',null,null,null,null,null,'LoseMotor' ) ,
        new SubuQuestion(11,'6300',7000,4,'PH',null,null,null,5,13,1,6300,'Slow or stop developing new motor skills?','-- TBD --','-- TBD --',33,33,33,'SlowStopMotor',null,null,null,null,null,'SlowStopMotor' ) ,
        new SubuQuestion(11,'6300',7200,5,'PH',null,null,null,5,13,1,6300,'Lose social skills (eye contact, playing with other children)?','-- TBD --','-- TBD --',33,33,33,'LoseSocial',null,null,null,null,null,'LoseSocial' ) ,
        new SubuQuestion(11,'6300',7400,6,'PH',null,null,null,5,13,1,6300,'Slow or stop developing new social skills?','-- TBD --','-- TBD --',33,33,33,'SlowStopSocial',null,null,null,null,null,'SlowStopSocial' ) ,
        new SubuQuestion(11,'6300',7600,7,'PH',null,null,null,5,13,1,6300,'Lose daily living skills (feeding, going to the toilet)?','-- TBD --','-- TBD --',33,33,33,'LoseDailyLiving',null,null,null,null,null,'LoseDailyLiving' ) ,
        new SubuQuestion(11,'6300',7800,8,'PH',null,null,null,5,13,1,6300,'Slow or stop developing new daily living skills?','-- TBD --','-- TBD --',33,33,33,'SlowStopDailyLiving',null,null,null,null,null,'SlowStopDailyLiving' ) 
    ],
    8500: [
        new SubuQuestion(13,'8500',8600,1,'PH',null,null,null,5,15,1,8500,'Respond to pointing \u2013 if you call their attention to something, how often do they look at what you\'re pointing at? ','-- TBD --','-- TBD --',13,13,13,'respond_pointing_freq',null,null,null,null,null,'respond_pointing_freq' ) ,
        new SubuQuestion(13,'8500',8700,2,'PH',null,null,null,5,15,1,8500,'Respond to calling their name \u2013 if you call their name, how often do they look at you?','-- TBD --','-- TBD --',13,13,13,'respond_callname_freq',null,null,null,null,null,'respond_callname_freq' ) ,
        new SubuQuestion(13,'8500',8800,3,'PH',null,null,null,5,15,1,8500,'Focus on one item intensely for long periods of time?','-- TBD --','-- TBD --',13,13,13,'focus_intense_long_freq',null,null,null,null,null,'focus_intense_long_freq' ) ,
        new SubuQuestion(13,'8500',8900,4,'PH',null,null,null,5,15,1,8500,'Make eye contact when you are speaking to them?','-- TBD --','-- TBD --',13,13,13,'make_eye_contact_freq',null,null,null,null,null,'make_eye_contact_freq' ) 
    ],
    9000: [
        new SubuQuestion(13,'9000',9100,1,'PH',null,null,null,4,15,1,9000,'Have trouble using or understanding language? ','-- TBD --','-- TBD --',13,13,13,'trouble_lang_freq',null,null,null,null,null,'trouble_lang_freq' ) ,
        new SubuQuestion(13,'9000',9200,2,'PH',null,null,null,4,15,1,9000,'Have trouble understanding gestures and facial expressions? ','-- TBD --','-- TBD --',13,13,13,'trouble_gesture_facial_exp_freq',null,null,null,null,null,'trouble_gesture_facial_exp_freq' ) ,
        new SubuQuestion(13,'9000',9300,3,'PH',null,null,null,4,15,1,9000,'Have trouble adjusting to changes in routine or familiar surroundings (such as making an unexpected stop at the store on the way from school to home)? ','-- TBD --','-- TBD --',13,13,13,'trouble_adjust_changes_freq',null,null,null,null,null,'trouble_adjust_changes_freq' ) ,
        new SubuQuestion(13,'9000',9400,4,'PH',null,null,null,4,15,1,9000,'Have varying responses to sound (such as appearing very sensitive to some noises and seeming to not hear others)? ','-- TBD --','-- TBD --',13,13,13,'varying_resp_sounds_freq',null,null,null,null,null,'varying_resp_sounds_freq' ) ,
        new SubuQuestion(13,'9000',9500,5,'PH',null,null,null,4,15,1,9000,'Have major temper tantrums? ','-- TBD --','-- TBD --',13,13,13,'have_major_tantrums_freq',null,null,null,null,null,'have_major_tantrums_freq' ) ,
        new SubuQuestion(13,'9000',9600,6,'PH',null,null,null,4,15,1,9000,'Exhibit aggressive behavior? ','-- TBD --','-- TBD --',13,13,13,'aggressive_behavior_freq',null,null,null,null,null,'aggressive_behavior_freq' ) ,
        new SubuQuestion(13,'9000',9700,7,'PH',null,null,null,4,15,1,9000,'Exhibit fearfulness or anxiety?','-- TBD --','-- TBD --',13,13,13,'fear_anxiety_freq',null,null,null,null,null,'fear_anxiety_freq' ) 
    ],
    9800: [
        new SubuQuestion(14,'9800',9900,1,'PH',null,null,null,4,15,1,9800,'Stare at lights, blink repetitively, move fingers in front of the eyes, or flap hands?','-- TBD --','-- TBD --',13,13,13,'hand_eye_tics_freq',null,null,null,null,null,'hand_eye_tics_freq' ) ,
        new SubuQuestion(14,'9800',10000,2,'PH',null,null,null,4,15,1,9800,'Tap ears, snap fingers, or make vocal sounds?','-- TBD --','-- TBD --',13,13,13,'hand_ears_voice_tics_freq',null,null,null,null,null,'hand_ears_voice_tics_freq' ) ,
        new SubuQuestion(14,'9800',10100,3,'PH',null,null,null,4,15,1,9800,'Rub the skin with one\'s hands or with another object, or scratch?','-- TBD --','-- TBD --',13,13,13,'rub_skin_scratch_tics_freq',null,null,null,null,null,'rub_skin_scratch_tics_freq' ) ,
        new SubuQuestion(14,'9800',10200,4,'PH',null,null,null,4,15,1,9800,'Rock front to back or side-to-side?','-- TBD --','-- TBD --',13,13,13,'rocking_freq',null,null,null,null,null,'rocking_freq' ) ,
        new SubuQuestion(14,'9800',10300,5,'PH',null,null,null,4,15,1,9800,'Place body parts or objects in one\'s mouth or lick objects?','-- TBD --','-- TBD --',13,13,13,'oral_contact_freq',null,null,null,null,null,'oral_contact_freq' ) ,
        new SubuQuestion(14,'9800',10400,6,'PH',null,null,null,4,15,1,9800,'Smell objects or sniff people?','-- TBD --','-- TBD --',13,13,13,'smell_sniff_freq',null,null,null,null,null,'smell_sniff_freq' ) 
    ],
    10500: [
        new SubuQuestion(14,'10500',10600,7,'PH',null,null,null,4,15,1,10500,'Perform self-abuse such as biting or head-banging?','-- TBD --','-- TBD --',13,13,13,'self_abuse_freq',null,null,null,null,null,'self_abuse_freq' ) 
    ],
    10800: [
        new SubuQuestion(15,'10800',10900,1,'PH',null,null,null,5,15,1,10800,'Attention Deficit Hyperactivity Disorder (ADHD) or Attention Deficit Disorder (ADD)','-- TBD --','-- TBD --',30,30,30,'ADHD_ADD_diag',null,null,null,null,null,'ADHD_ADD_diag' ) ,
        new SubuQuestion(15,'10800',11000,2,'PH',null,null,null,5,15,1,10800,'Oppositional Defiant Disorder (ODD)','-- TBD --','-- TBD --',30,30,30,'ODD_diag',null,null,null,null,null,'ODD_diag' ) ,
        new SubuQuestion(15,'10800',11100,3,'PH',null,null,null,5,15,1,10800,'Obsessive Compulsive Disorder (OCD)','-- TBD --','-- TBD --',30,30,30,'OCD_diag',null,null,null,null,null,'OCD_diag' ) ,
        new SubuQuestion(15,'10800',11200,4,'PH',null,null,null,5,15,1,10800,'Intellectual Disability','-- TBD --','-- TBD --',30,30,30,'intel_disability_diag',null,null,null,null,null,'intel_disability_diag' ) ,
        new SubuQuestion(15,'10800',11300,5,'PH',null,null,null,5,15,1,10800,'Speech or Language Disorder','-- TBD --','-- TBD --',30,30,30,'speech_lang_disorder_diag',null,null,null,null,null,'speech_lang_disorder_diag' ) ,
        new SubuQuestion(15,'10800',11400,6,'PH',null,null,null,5,15,1,10800,'Reading Disorder or Dyslexia','-- TBD --','-- TBD --',30,30,30,'dyslexia_diag',null,null,null,null,null,'dyslexia_diag' ) ,
        new SubuQuestion(15,'10800',11500,7,'PH',null,null,null,5,15,1,10800,'Developmental Delay','-- TBD --','-- TBD --',30,30,30,'dev_delay_diag',null,null,null,null,null,'dev_delay_diag' ) ,
        new SubuQuestion(15,'10800',11600,8,'PH',null,null,null,5,15,1,10800,'Motor delay','-- TBD --','-- TBD --',30,30,30,'motor_delay_diag',null,null,null,null,null,'motor_delay_diag' ) ,
        new SubuQuestion(15,'10800',11700,9,'PH',null,null,null,5,14,0,10800,'Other','-- TBD --','-- TBD --',null,null,null,'other_learn_dev_behav_issue_diag','(Please indicate)',null,null,null,null,null ) 
    ],
    11800: [
        new SubuQuestion(15,'11800',11900,1,'PH',null,null,null,5,15,1,11800,'Anxiety','-- TBD --','-- TBD --',30,30,30,'anxiety_diag',null,null,null,null,null,'anxiety_diag' ) ,
        new SubuQuestion(15,'11800',12000,2,'PH',null,null,null,5,15,1,11800,'Depression ','-- TBD --','-- TBD --',30,30,30,'depression_diag',null,null,null,null,null,'depression_diag' ) ,
        new SubuQuestion(15,'11800',12100,3,'PH',null,null,null,5,15,1,11800,'Bipolar Disorder','-- TBD --','-- TBD --',30,30,30,'bipolar_diag',null,null,null,null,null,'bipolar_diag' ) ,
        new SubuQuestion(15,'11800',12200,4,'PH',null,null,null,5,15,1,11800,'Schizophrenia','-- TBD --','-- TBD --',30,30,30,'schizophrenia_diag',null,null,null,null,null,'schizophrenia_diag' ) ,
        new SubuQuestion(15,'11800',12300,5,'PH',null,null,null,5,15,1,11800,'Pica (eating non-food items such as dirt, clay, chalk, or paint chips)','-- TBD --','-- TBD --',30,30,30,'pica_diag',null,null,null,null,null,'pica_diag' ) ,
        new SubuQuestion(15,'11800',12400,6,'PH',null,null,null,5,14,0,11800,'Other','-- TBD --','-- TBD --',null,null,null,'other_emotional_health_issue_diag','(Please indicate)',null,null,null,null,null ) 
    ],
    12500: [
        new SubuQuestion(15,'12500',12600,1,'PH',null,null,null,5,15,1,12500,'Diabetes','-- TBD --','-- TBD --',30,30,30,'diabetes_diag',null,null,null,null,null,'diabetes_diag' ) ,
        new SubuQuestion(15,'12500',12700,2,'PH',null,null,null,5,15,1,12500,'Tourette syndrome','-- TBD --','-- TBD --',30,30,30,'tourette_diag',null,null,null,null,null,'tourette_diag' ) ,
        new SubuQuestion(15,'12500',12800,3,'PH',null,null,null,5,15,1,12500,'Epilepsy or seizure disorder','-- TBD --','-- TBD --',30,30,30,'epilepsy_diag',null,null,null,null,null,'epilepsy_diag' ) ,
        new SubuQuestion(15,'12500',12900,4,'PH',null,null,null,5,15,1,12500,'Asthma','-- TBD --','-- TBD --',30,30,30,'asthma_diag',null,null,null,null,null,'asthma_diag' ) ,
        new SubuQuestion(15,'12500',13000,5,'PH',null,null,null,5,15,1,12500,'Immune dysfunction (such as psoriasis, eczema)','-- TBD --','-- TBD --',30,30,30,'immune_dysfunction_diag',null,null,null,null,null,'immune_dysfunction_diag' ) ,
        new SubuQuestion(15,'12500',13100,6,'PH',null,null,null,5,15,1,12500,'Cerebral palsy','-- TBD --','-- TBD --',30,30,30,'cerebral_palsy_diag',null,null,null,null,null,'cerebral_palsy_diag' ) ,
        new SubuQuestion(15,'12500',13200,7,'PH',null,null,null,5,15,1,12500,'Deafness or significant hearing loss','-- TBD --','-- TBD --',30,30,30,'deafness_diag',null,null,null,null,null,'deafness_diag' ) ,
        new SubuQuestion(15,'12500',13300,8,'PH',null,null,null,5,14,0,12500,'Other','-- TBD --','-- TBD --',null,null,null,'other_health_issue_diag','(Please indicate)',null,null,null,null,null ) 
    ],
    13400: [
        new SubuQuestion(16,'13400',13500,1,'PH',null,null,null,5,15,1,13400,'Allergies (such as to medication, food, or the environment, such as pollen)','-- TBD --','-- TBD --',30,30,30,'allergies',null,null,null,null,null,'allergies' ) ,
        new SubuQuestion(16,'13400',13600,2,'PH',null,null,null,5,15,1,13400,'Skin conditions (such as psoriasis or eczema)','-- TBD --','-- TBD --',30,30,30,'skin_conditions',null,null,null,null,null,'skin_conditions' ) ,
        new SubuQuestion(16,'13400',13700,3,'PH',null,null,null,5,15,1,13400,'Sleep dysfunction (such as problems going to sleep or staying asleep, or sleeping too much)','-- TBD --','-- TBD --',30,30,30,'sleep_dysfunction',null,null,null,null,null,'sleep_dysfunction' ) ,
        new SubuQuestion(16,'13400',13800,4,'PH',null,null,null,5,15,1,13400,'Motor impairment (such as repetitive behaviors, motor delay, gait abnormality, incoordination)','-- TBD --','-- TBD --',30,30,30,'motor_impairment',null,null,null,null,null,'motor_impairment' ) ,
        new SubuQuestion(16,'13400',13900,5,'PH',null,null,null,5,15,1,13400,'Gastrointestinal issues (such as chronic diarrhea, constipation, nausea, vomiting, acid reflux)','-- TBD --','-- TBD --',30,30,30,'gastrointestinal_issues',null,null,null,null,null,'gastrointestinal_issues' ) ,
        new SubuQuestion(16,'13400',14000,6,'PH',null,null,null,5,14,0,13400,'Other','-- TBD --','-- TBD --',null,null,null,'other_observed_issues','(Please indicate)',null,null,null,null,null ) 
    ],
    14250: [
        new SubuQuestion(17,'14250',14255,1,'EN',35,35,35,16,6,0,14250,null,'<!--Placeholder for other work-->','<!--Placeholder for other work-->',null,null,null,'proband_employ_other','(Please indicate)',null,null,null,null,null ) 
    ],
    14260: [
        new SubuQuestion(17,'14260',14265,1,'EN',36,36,36,16,6,0,14260,null,'<!--Placeholder for other reason of unemployment-->','<!--Placeholder for other reason of unemployment-->',null,null,null,'proband_unemploy_other','(Please indicate)',null,null,null,null,null ) 
    ],
    15500: [
        new SubuQuestion(22,'15500',15600,1,'EN',null,null,null,5,15,1,15500,'Deodorant','Deodorant','Deodorant',14,14,14,'deodorant_freq_mother',null,null,null,null,null,'deodorant_freq_mother' ) ,
        new SubuQuestion(22,'15500',15700,2,'EN',null,null,null,5,15,1,15500,'Anti-perspirant ','Anti-perspirant ','Anti-perspirant ',14,14,14,'anti_perspirant_freq_mother',null,null,null,null,null,'anti_perspirant_freq_mother' ) ,
        new SubuQuestion(22,'15500',15800,3,'EN',null,null,null,5,15,1,15500,'Lotion','Lotion','Lotion',14,14,14,'lotion_freq_mother',null,null,null,null,null,'lotion_freq_mother' ) ,
        new SubuQuestion(22,'15500',15900,4,'EN',null,null,null,5,15,1,15500,'Liquid soap (antibacterial and non-antibacterial)','Liquid soap (antibacterial and non-antibacterial)','Liquid soap (antibacterial and non-antibacterial)',14,14,14,'liquid_soap_freq_mother',null,null,null,null,null,'liquid_soap_freq_mother' ) ,
        new SubuQuestion(22,'15500',16000,5,'EN',null,null,null,5,15,1,15500,'Antibacterial soaps (including soft soaps or bar soaps)','Antibacterial soaps (including soft soaps or bar soaps)','Antibacterial soaps (including soft soaps or bar soaps)',14,14,14,'antibacterial_soap_freq_mother',null,null,null,null,null,'antibacterial_soap_freq_mother' ) ,
        new SubuQuestion(22,'15500',16100,6,'EN',null,null,null,5,15,1,15500,'Hair gel','Hair gel','Hair gel',14,14,14,'hair_gel_freq_mother',null,null,null,null,null,'hair_gel_freq_mother' ) ,
        new SubuQuestion(22,'15500',16200,7,'EN',null,null,null,5,15,1,15500,'Hair spray','Hair spray','Hair spray',14,14,14,'hair_spray_freq_mother',null,null,null,null,null,'hair_spray_freq_mother' ) ,
        new SubuQuestion(22,'15500',16250,8,'EN',null,null,null,5,15,1,15500,'Hair dye','Hair dye','Hair dye',14,14,14,'haid_dye_freq_mother',null,null,null,null,null,'haid_dye_freq_mother' ) ,
        new SubuQuestion(22,'15500',16300,9,'EN',null,null,null,5,15,1,15500,'Nail polish and nail polish remover','Nail polish and nail polish remover','Nail polish and nail polish remover',14,14,14,'nail_products_freq_mother',null,null,null,null,null,'nail_products_freq_mother' ) ,
        new SubuQuestion(22,'15500',16400,10,'EN',null,null,null,5,15,1,15500,'Perfume/cologne','Perfume/cologne','Perfume/cologne',14,14,14,'perfume_freq_mother',null,null,null,null,null,'perfume_freq_mother' ) ,
        new SubuQuestion(22,'15500',16500,11,'EN',null,null,null,5,15,1,15500,'Mosquito, tick, or other bug repellant, applied as a spray, oil, or cream to the skin','Mosquito, tick, or other bug repellant, applied as a spray, oil, or cream to the skin','Mosquito, tick, or other bug repellant, applied as a spray, oil, or cream to the skin',14,14,14,'bug_repellant_freq_mother',null,null,null,null,null,'bug_repellant_freq_mother' ) 
    ],
    16600: [
        new SubuQuestion(23,'16600',16700,1,'EN',null,null,null,16,6,0,16600,'<!-- Placeholder for other  occupation -->','<!-- Placeholder for other  occupation -->','<!-- Placeholder for other  occupation -->',null,null,null,'other_occupation_mother','(Please indicate)',null,null,null,null,null ) 
    ],
    16800: [
        new SubuQuestion(24,'16800',16900,1,'EN',null,null,null,5,15,1,16800,'Asbestos','Asbestos','Asbestos',30,30,30,'asbestos_mother',null,null,null,null,null,'asbestos_mother' ) ,
        new SubuQuestion(24,'16800',17000,2,'EN',null,null,null,5,15,1,16800,'Acids/solvents','Acids/solvents','Acids/solvents',30,30,30,'acids_solvents_mother',null,null,null,null,null,'acids_solvents_mother' ) ,
        new SubuQuestion(24,'16800',17100,3,'EN',null,null,null,5,15,1,16800,'Coal or stone dusts','Coal or stone dusts','Coal or stone dusts',30,30,30,'coal_or_stone_dusts_mother',null,null,null,null,null,'coal_or_stone_dusts_mother' ) ,
        new SubuQuestion(24,'16800',17200,4,'EN',null,null,null,5,15,1,16800,'Coal tar <tooltip id="8"/> / pitch <tooltip id="9"/> / asphalt <tooltip id="10"/>','Coal tar <tooltip id="8"/> / pitch <tooltip id="9"/> / asphalt <tooltip id="10"/>','Coal tar <tooltip id="8"/> / pitch <tooltip id="9"/> / asphalt <tooltip id="10"/>',30,30,30,'coal_tar_pitch_asphalt_mother',null,null,null,null,null,'coal_tar_pitch_asphalt_mother' ) ,
        new SubuQuestion(24,'16800',17300,5,'EN',null,null,null,5,15,1,16800,'Diesel engine exhaust','Diesel engine exhaust','Diesel engine exhaust',30,30,30,'diesel_engine_exhaust_mother',null,null,null,null,null,'diesel_engine_exhaust_mother' ) ,
        new SubuQuestion(24,'16800',17400,6,'EN',null,null,null,5,15,1,16800,'Dyes','Dyes','Dyes',30,30,30,'dyes_mother',null,null,null,null,null,'dyes_mother' ) ,
        new SubuQuestion(24,'16800',17500,7,'EN',null,null,null,5,15,1,16800,'Formaldehyde <tooltip id="11"/>','Formaldehyde <tooltip id="11"/>','Formaldehyde <tooltip id="11"/>',30,30,30,'formaldehyde_mother',null,null,null,null,null,'formaldehyde_mother' ) ,
        new SubuQuestion(24,'16800',17600,8,'EN',null,null,null,5,15,1,16800,'Gasoline exhaust','Gasoline exhaust','Gasoline exhaust',30,30,30,'gasoline_exhaust_mother',null,null,null,null,null,'gasoline_exhaust_mother' ) ,
        new SubuQuestion(24,'16800',17700,9,'EN',null,null,null,5,15,1,16800,'Pesticides/herbicides <tooltip id="12"/>','Pesticides/herbicides <tooltip id="12"/>','Pesticides/herbicides <tooltip id="12"/>',30,30,30,'pesticides_herbicides_mother',null,null,null,null,null,'pesticides_herbicides_mother' ) ,
        new SubuQuestion(24,'16800',17800,10,'EN',null,null,null,5,15,1,16800,'Textile fibers/dusts','Textile fibers/dusts','Textile fibers/dusts',30,30,30,'textile_fibers_dusts_mother',null,null,null,null,null,'textile_fibers_dusts_mother' ) ,
        new SubuQuestion(24,'16800',17900,11,'EN',null,null,null,5,15,1,16800,'Wood dust','Wood dust','Wood dust',30,30,30,'wood_dust_mother',null,null,null,null,null,'wood_dust_mother' ) ,
        new SubuQuestion(24,'16800',18000,12,'EN',null,null,null,5,15,1,16800,'X-rays/radioactive materials <tooltip id="13"/>','X-rays/radioactive materials <tooltip id="13"/>','X-rays/radioactive materials <tooltip id="13"/>',30,30,30,'xray_radioactive_mother',null,null,null,null,null,'xray_radioactive_mother' ) ,
        new SubuQuestion(24,'16800',18100,13,'EN',null,null,null,5,15,1,16800,'Varnish <tooltip id="14"/> / lacquer <tooltip id="15"/>','Varnish <tooltip id="14"/> / lacquer <tooltip id="15"/>','Varnish <tooltip id="14"/> / lacquer <tooltip id="15"/>',30,30,30,'varnish_lacquer_mother',null,null,null,null,null,'varnish_lacquer_mother' ) 
    ],
    18700: [
        new SubuQuestion(26,'18700',18800,1,'EN',null,null,null,5,15,1,18700,'A professional applied pesticide <em>inside</em> the home','-- TBD --','-- TBD --',30,30,30,'professional_pesticide_inside_home',null,null,null,null,null,'professional_pesticide_inside_home' ) ,
        new SubuQuestion(26,'18700',18900,2,'EN',null,null,null,5,15,1,18700,'A professional applied pesticide <em>outside</em> the home','-- TBD --','-- TBD --',30,30,30,'professional_pesticide_outside_home',null,null,null,null,null,'professional_pesticide_outside_home' ) ,
        new SubuQuestion(26,'18700',19000,3,'EN',null,null,null,5,15,1,18700,'The mother or a member of the household applied pesticide <em>inside</em> the home','-- TBD --','-- TBD --',30,30,30,'self_pesticide_inside_home',null,null,null,null,null,'self_pesticide_inside_home' ) ,
        new SubuQuestion(26,'18700',19100,4,'EN',null,null,null,5,15,1,18700,'The mother or a member of the household applied pesticide <em>outside</em> the home','-- TBD --','-- TBD --',30,30,30,'self_pesticide_outside_home',null,null,null,null,null,'self_pesticide_outside_home' ) 
    ],
    19200: [
        new SubuQuestion(26,'19200',19300,1,'EN',null,null,null,5,15,1,19200,'Frontline, Advantage, Revolution, or other liquids applied on the animal\'s neck for pest control','Frontline, Advantage, Revolution, or other liquids applied on the animal\'s neck for pest control','Frontline, Advantage, Revolution, or other liquids applied on the animal\'s neck for pest control',32,32,32,'pet_pest_control_liq',null,null,null,null,null,'pet_pest_control_liq' ) ,
        new SubuQuestion(26,'19200',19400,2,'EN',null,null,null,5,15,1,19200,'Flea or tick shampoos/baths','Flea or tick shampoos/baths','Flea or tick shampoos/baths',32,32,32,'flea_tick_shampoo_bath',null,null,null,null,null,'flea_tick_shampoo_bath' ) ,
        new SubuQuestion(26,'19200',19500,3,'EN',null,null,null,5,15,1,19200,'Flea or tick collars','Flea or tick collars','Flea or tick collars',32,32,32,'flea_tick_collar',null,null,null,null,null,'flea_tick_collar' ) 
    ],
    20600: [
        new SubuQuestion(30,'20600',20700,1,'EN',null,null,null,5,15,1,20600,'Deodorant','Deodorant','Deodorant',14,14,14,'deodorant_freq_father',null,null,null,null,null,'deodorant_freq_father' ) ,
        new SubuQuestion(30,'20600',20800,2,'EN',null,null,null,5,15,1,20600,'Anti-perspirant ','Anti-perspirant ','Anti-perspirant ',14,14,14,'anti_perspirant_freq_father',null,null,null,null,null,'anti_perspirant_freq_father' ) ,
        new SubuQuestion(30,'20600',20900,3,'EN',null,null,null,5,15,1,20600,'Lotion','Lotion','Lotion',14,14,14,'lotion_freq_father',null,null,null,null,null,'lotion_freq_father' ) ,
        new SubuQuestion(30,'20600',21000,4,'EN',null,null,null,5,15,1,20600,'Liquid soap (antibacterial and non-antibacterial)','Liquid soap (antibacterial and non-antibacterial)','Liquid soap (antibacterial and non-antibacterial)',14,14,14,'liquid_soap_freq_father',null,null,null,null,null,'liquid_soap_freq_father' ) ,
        new SubuQuestion(30,'20600',21100,5,'EN',null,null,null,5,15,1,20600,'Antibacterial soaps (including soft soaps or bar soaps)','Antibacterial soaps (including soft soaps or bar soaps)','Antibacterial soaps (including soft soaps or bar soaps)',14,14,14,'antibacterial_soap_freq_father',null,null,null,null,null,'antibacterial_soap_freq_father' ) ,
        new SubuQuestion(30,'20600',21200,6,'EN',null,null,null,5,15,1,20600,'Hair gel','Hair gel','Hair gel',14,14,14,'hair_gel_freq_father',null,null,null,null,null,'hair_gel_freq_father' ) ,
        new SubuQuestion(30,'20600',21300,7,'EN',null,null,null,5,15,1,20600,'Hair spray','Hair spray','Hair spray',14,14,14,'hair_spray_freq_father',null,null,null,null,null,'hair_spray_freq_father' ) ,
        new SubuQuestion(30,'20600',21350,8,'EN',null,null,null,5,15,1,20600,'Hair dye','Hair dye','Hair dye',14,14,14,'hair_dye_freq_father',null,null,null,null,null,'hair_dye_freq_father' ) ,
        new SubuQuestion(30,'20600',21400,9,'EN',null,null,null,5,15,1,20600,'Nail polish and nail polish remover','Nail polish and nail polish remover','Nail polish and nail polish remover',14,14,14,'nail_products_freq_father',null,null,null,null,null,'nail_products_freq_father' ) ,
        new SubuQuestion(30,'20600',21500,10,'EN',null,null,null,5,15,1,20600,'Perfume/cologne','Perfume/cologne','Perfume/cologne',14,14,14,'perfume_freq_father',null,null,null,null,null,'perfume_freq_father' ) ,
        new SubuQuestion(30,'20600',21600,11,'EN',null,null,null,5,15,1,20600,'Mosquito, tick, or other bug repellant, applied as a spray, oil, or cream to the skin','Mosquito, tick, or other bug repellant, applied as a spray, oil, or cream to the skin','Mosquito, tick, or other bug repellant, applied as a spray, oil, or cream to the skin',14,14,14,'bug_repellant_freq_father',null,null,null,null,null,'bug_repellant_freq_father' ) 
    ],
    21800: [
        new SubuQuestion(32,'21800',21900,1,'EN',null,null,null,16,6,0,21800,'<!-- Placeholder for other occupation  -->','<!-- Placeholder for other occupation  -->','<!-- Placeholder for other occupation  -->',null,null,null,'other_occupation_father','(Please indicate)',null,null,null,null,null ) 
    ],
    22000: [
        new SubuQuestion(33,'22000',22100,1,'EN',null,null,null,5,15,1,22000,'Asbestos','Asbestos','Asbestos',30,30,30,'asbestos_father',null,null,null,null,null,'asbestos_father' ) ,
        new SubuQuestion(33,'22000',22200,2,'EN',null,null,null,5,15,1,22000,'Acids/solvents','Acids/solvents','Acids/solvents',30,30,30,'acids_solvents_father',null,null,null,null,null,'acids_solvents_father' ) ,
        new SubuQuestion(33,'22000',22300,3,'EN',null,null,null,5,15,1,22000,'Coal or stone dusts','Coal or stone dusts','Coal or stone dusts',30,30,30,'coal_or_stone_dusts_father',null,null,null,null,null,'coal_or_stone_dusts_father' ) ,
        new SubuQuestion(33,'22000',22400,4,'EN',null,null,null,5,15,1,22000,'Coal tar <tooltip id="8"/> / pitch <tooltip id="9"/> / asphalt <tooltip id="10"/>','Coal tar <tooltip id="8"/> / pitch <tooltip id="9"/> / asphalt <tooltip id="10"/>','Coal tar <tooltip id="8"/> / pitch <tooltip id="9"/> / asphalt <tooltip id="10"/>',30,30,30,'coal_tar_pitch_asphalt_father',null,null,null,null,null,'coal_tar_pitch_asphalt_father' ) ,
        new SubuQuestion(33,'22000',22500,5,'EN',null,null,null,5,15,1,22000,'Diesel engine exhaust','Diesel engine exhaust','Diesel engine exhaust',30,30,30,'diesel_engine_exhaust_father',null,null,null,null,null,'diesel_engine_exhaust_father' ) ,
        new SubuQuestion(33,'22000',22600,6,'EN',null,null,null,5,15,1,22000,'Dyes','Dyes','Dyes',30,30,30,'dyes_father',null,null,null,null,null,'dyes_father' ) ,
        new SubuQuestion(33,'22000',22700,7,'EN',null,null,null,5,15,1,22000,'Formaldehyde <tooltip id="11"/>','Formaldehyde <tooltip id="11"/>','Formaldehyde <tooltip id="11"/>',30,30,30,'formaldehyde_father',null,null,null,null,null,'formaldehyde_father' ) ,
        new SubuQuestion(33,'22000',22800,8,'EN',null,null,null,5,15,1,22000,'Gasoline exhaust','Gasoline exhaust','Gasoline exhaust',30,30,30,'gasoline_exhaust_father',null,null,null,null,null,'gasoline_exhaust_father' ) ,
        new SubuQuestion(33,'22000',22900,9,'EN',null,null,null,5,15,1,22000,'Pesticides/herbicides <tooltip id="12"/>','Pesticides/herbicides <tooltip id="12"/>','Pesticides/herbicides <tooltip id="12"/>',30,30,30,'pesticides_herbicides_father',null,null,null,null,null,'pesticides_herbicides_father' ) ,
        new SubuQuestion(33,'22000',23000,10,'EN',null,null,null,5,15,1,22000,'Textile fibers/dusts','Textile fibers/dusts','Textile fibers/dusts',30,30,30,'textile_fibers_dusts_father',null,null,null,null,null,'textile_fibers_dusts_father' ) ,
        new SubuQuestion(33,'22000',23100,11,'EN',null,null,null,5,15,1,22000,'Wood dust','Wood dust','Wood dust',30,30,30,'wood_dust_father',null,null,null,null,null,'wood_dust_father' ) ,
        new SubuQuestion(33,'22000',23200,12,'EN',null,null,null,5,15,1,22000,'X-rays/radioactive materials <tooltip id="13"/>','X-rays/radioactive materials <tooltip id="13"/>','X-rays/radioactive materials <tooltip id="13"/>',30,30,30,'xray_radioactive_father',null,null,null,null,null,'xray_radioactive_father' ) ,
        new SubuQuestion(33,'22000',23300,13,'EN',null,null,null,5,15,1,22000,'Varnish <tooltip id="14"/> / lacquer <tooltip id="15"/>','Varnish <tooltip id="14"/> / lacquer <tooltip id="15"/>','Varnish <tooltip id="14"/> / lacquer <tooltip id="15"/>',30,30,30,'varnish_lacquer_father',null,null,null,null,null,'varnish_lacquer_father' ) 
    ]
};
