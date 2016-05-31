import { surveyPageDict } from '../../app/seed-data/survey_page_dict';
import { Page } from '../../app/types/database-data/page';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { pageQuestionDict } from '../../app/seed-data/page_question_dict';

export class SeedDataSingleton {

    private static _instance: SeedDataSingleton = new SeedDataSingleton();

    public totalPages = -1;
    public static instanceOf(): SeedDataSingleton {
        return SeedDataSingleton._instance;
    }

    constructor() {
        // Will fire only once since this class is a Singleton
        this.totalPages = surveyPageDict[1].length;
        SeedDataSingleton._instance = this;
    }

    getAllQuestions(): PageQuestion[] {
        let result: PageQuestion[] = new Array<PageQuestion>();
        for (let curIndex in pageQuestionDict) {
            if (pageQuestionDict[curIndex]) {
                for (let curPageQuestion of pageQuestionDict[curIndex]) {
                    result.push(curPageQuestion);
                }
            }
        }
        //console.log('Question count = ' + result.length);
        return result;
    }

    getQuestionsForPage(page_Id: number) {
        let result = pageQuestionDict[page_Id];
        return result;
    }

    getPage(page_Id: number): Page {
        let result = surveyPageDict[1].find((i) => i.page_id === page_Id);
        return result;
    }

    getAllPages(): Page[] {
        let result = surveyPageDict[1];
        return result;
    }
}
