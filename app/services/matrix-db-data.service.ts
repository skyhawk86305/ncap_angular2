import { Injectable } from 'angular2/core';

import { Question } from       '../../app/types/question';
import { AnswerCategory } from '../../app/types/enums/answer-category.enum';
import { ValidationType } from '../../app/types/enums/validation-type.enum';

import { MatrixElement } from '../../app/types/matrix-element';
import { LoadJsonDataService } from '../../app/services/load-json-data.service';

// The data
import { sre } from '../../app/seed-data/sre';
import { subu } from '../../app/seed-data/subu';
import { surveyPageSre } from '../../app/seed-data/survey-page-sre';
// Types to hold the data
import { Sre } from '../../app/types/database-data/sre';
import { SurveyPageSre } from '../../app/types/database-data/survey-page-sre';

import _ from 'lodash';


@Injectable()
export class MatrixDbDataService {

    constructor(
        private _loadJsonDataService: LoadJsonDataService
    ) {
    }

    getMatrixElementsForSreUid(seq_sre_uid: number): MatrixElement[] {
        let subuRows = subu.filter((i) => i.seq_sre_uid === seq_sre_uid);
        subuRows = subuRows.sort((n1,n2)=> n1.subu_sort_order - n2.subu_sort_order);

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
