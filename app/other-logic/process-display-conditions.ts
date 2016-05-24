import { PageQuestion } from '../../app/types/database-data/page-question';
import { UserInputSingleton } from '../../app/vanilla-singletons/user-input.singleton';
import { displayConditionDict } from '../../app/seed-data/display_condition_dict';
import { DisplayCondition } from '../../app/types/database-data/display_condition';

export class ProcessDisplayCondition {

    static processDisplayCondition(pageQuestion: PageQuestion): boolean {
        let result = false;
        console.log('parent_sre_disp_id is ' + pageQuestion.parent_sre_disp_id
            + ' for pg' + pageQuestion.page_id + '-qu' + pageQuestion.sre_sort_order);

        let displayConditions: DisplayCondition[] = displayConditionDict[pageQuestion.parent_sre_disp_id];

        for (let curDisplayCondition of displayConditions) {
            switch (curDisplayCondition.logical_operator) {
                case null:
                    result = ProcessDisplayCondition.evaluteDisplyCondition(curDisplayCondition);
                    break;
                case 'AND':
                    result = result && ProcessDisplayCondition.evaluteDisplyCondition(curDisplayCondition);
                    break;
                case 'OR':
                    result = result || ProcessDisplayCondition.evaluteDisplyCondition(curDisplayCondition);
                    break;
                default:
                    console.log('curDisplayCondition.logical_operator is not supported: ' + curDisplayCondition.logical_operator);
                    break;
            }
        }

        return result;
    }

    static evaluteDisplyCondition(curDisplayCondition: DisplayCondition) {
        let result = false;

        if (curDisplayCondition.relation === 'EQUAL') {
            // console.log('EQUAL tracking_key ' + curDisplayCondition.tracking_key);
            let userInput = UserInputSingleton.instanceOf().getUserInput(curDisplayCondition.tracking_key);
            if (userInput) {
                let expectedstoredValue: number = curDisplayCondition.stored_value;
                let expectedDisplayValue = curDisplayCondition.displayed_value;
                // console.log(' DisplayCondition.stored_value is ' + curDisplayCondition.stored_value 
                // + ',' + 'DisplayCondition.displayed_value is ' + curDisplayCondition.displayed_value);
                result = (+expectedstoredValue === +userInput.storedValue);
                result = result || (expectedDisplayValue === userInput.storedValue);
            }
        }


        return result;
    }

}

// EQUAL 
// CONTAINS  
// IS NOT NULL 
// NOT EQUAL
// IS NULL
// GREATER THAN
