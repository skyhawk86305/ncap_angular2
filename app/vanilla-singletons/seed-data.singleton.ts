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
        return result;
    }

    getQuestionsForPage(pageId: number) {
        let result = pageQuestionDict[pageId];
        return result;
    }

    getPage(pageNumber: number): Page {
        let result = surveyPageDict[1].find((i) => i.page_number === pageNumber);
        return result;
    }

    getAllPages(): Page[] {
        let result = surveyPageDict[1];
        return result;
    }

    // private _getPageIdForPageNumber(pageNumber: number) {
    //     let result = surveyPageDict[1].find((i) => i.page_number === pageNumber);
    //     return result.page_id;
    // }

}
