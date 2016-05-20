import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { MatrixElement } from '../../app/types/matrix-element';
// The data
// import { Sre } from '../types/database-data/sre';
// import { sre } from '../../app/seed-data/sre';
// import { subu } from '../../app/seed-data/subu';

import { subuQuestionDict } from '../../app/seed-data/subu_question_dict';
import { SubuQuestions } from '../types/database-data/subu-questions';
import { SubuQuestion } from '../types/database-data/subu-question';


export class SeedDataMatrixSingleton {

    private static _instance: SeedDataMatrixSingleton = new SeedDataMatrixSingleton();

    public static instanceOf(): SeedDataMatrixSingleton {
        return SeedDataMatrixSingleton._instance;
    }

    constructor() {
        SeedDataMatrixSingleton._instance = this;
    }

    // henry_db_related - the node app should pre-compute all these
    getMatrixElementsForSreUid(seq_sre_uid: number): SubuQuestion[] {

        let temp: SubuQuestion[] = subuQuestionDict[seq_sre_uid];

        return temp;

        // let subuRows = subu.filter((i) => i.seq_sre_uid === seq_sre_uid);
        // subuRows = subuRows.sort((n1, n2) => n1.subu_sort_order - n2.subu_sort_order);

        // // Join subuRows to sre to get the matrix element data
        //let result: MatrixElement[] = new Array<MatrixElement>();
        // for (let curSubuRow of subuRows) {
        //     // Find sre row
        //     let sreRow = sre.find((i: Sre) => i.obj_uid === curSubuRow.subu_sre_uid);
        //     let newMatrixElement: MatrixElement = new MatrixElement();
        //     newMatrixElement.answer_category = sreRow.sre_anca_id;
        //     newMatrixElement.seq_sre_uid = seq_sre_uid;
        //     newMatrixElement.sort_order = curSubuRow.subu_sort_order;
        //     newMatrixElement.text = sreRow.txt_parent_lang1;
        //     newMatrixElement.tracking_key = sreRow.tracking_key;
        //     switch (sreRow.bypass_property) {
        //         case 'REQUIRED':
        //             newMatrixElement.validation_type = ValidationType.required;
        //             break;
        //         case 'REQUESTED':
        //             newMatrixElement.validation_type = ValidationType.requested;
        //             break;
        //         case 'OPTIONAL':
        //             newMatrixElement.validation_type = ValidationType.optional;
        //             break;
        //         default:
        //             newMatrixElement.validation_type = ValidationType.notApplicable;
        //     }
        //     result.push(newMatrixElement);
        // }

        //return result;
    }
}
