import { subuQuestionDict } from '../../app/seed-data/subu_question_dict';
import { SubuQuestion } from '../types/database-data/subu-question';

export class SeedDataMatrixSingleton {

    private static _instance: SeedDataMatrixSingleton = new SeedDataMatrixSingleton();

    public static instanceOf(): SeedDataMatrixSingleton {
        return SeedDataMatrixSingleton._instance;
    }

    constructor() {
        SeedDataMatrixSingleton._instance = this;
    }

    // xyzzy Review where uses this method 
    // henry_db_related - the node app should pre-compute all these
    getMatrixElementsForSreUid(seq_sre_uid: number): SubuQuestion[] {

        let temp: SubuQuestion[] = subuQuestionDict[seq_sre_uid];

        return temp;
    }
}
