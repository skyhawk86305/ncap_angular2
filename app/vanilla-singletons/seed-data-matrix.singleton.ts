import { ValidationType } from '../../app/types/enums/validation-type.enum';
import { MatrixElement } from '../../app/types/matrix-element';
// The data
import { sre } from '../../app/seed-data/sre';
import { subu } from '../../app/seed-data/subu';

export class SeedDataMatrixSingleton {

    private static _instance: SeedDataMatrixSingleton = new SeedDataMatrixSingleton();

    public static instanceOf(): SeedDataMatrixSingleton {
        return SeedDataMatrixSingleton._instance;
    }

    constructor() {
        if (SeedDataMatrixSingleton._instance) {
            throw new Error('Error: Instantiation failed: Use .instanceOf() instead of new.');
        }
        SeedDataMatrixSingleton._instance = this;
    }

    getMatrixElementsForSreUid(seq_sre_uid: number): MatrixElement[] {
        let subuRows = subu.filter((i) => i.seq_sre_uid === seq_sre_uid);
        subuRows = subuRows.sort((n1, n2) => n1.subu_sort_order - n2.subu_sort_order);

        // Join subuRows to sre to get the matric element data
        let result: MatrixElement[] = new Array<MatrixElement>();
        for (let curSubuRow of subuRows) {
            // Find sre row
            let sreRow = sre.find((i) => i.obj_uid === curSubuRow.subu_sre_uid);
            let newMatrixElement: MatrixElement = new MatrixElement();
            newMatrixElement.answer_category = sreRow.sre_anca_id;
            newMatrixElement.seq_sre_uid = seq_sre_uid;
            newMatrixElement.sort_order = curSubuRow.subu_sort_order;
            newMatrixElement.text = sreRow.txt_parent_lang1;
            newMatrixElement.tracking_key = sreRow.tracking_key;
            switch (sreRow.bypass_property) {
                case 'REQUIRED':
                    newMatrixElement.validation_type = ValidationType.required;
                    break;
                case 'REQUESTED':
                    newMatrixElement.validation_type = ValidationType.requested;
                    break;
                case 'OPTIONAL':
                    newMatrixElement.validation_type = ValidationType.optional;
                    break;
                default:
                    newMatrixElement.validation_type = ValidationType.notApplicable;
            }
            result.push(newMatrixElement);
        }

        return result;
    }
}
