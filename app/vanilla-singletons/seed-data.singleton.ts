import { surveyPageDict } from '../../app/seed-data/survey_page_dict';
import { Page } from '../../app/types/database-data/page';
import { PageQuestion } from '../../app/types/database-data/page-question';
import { pageQuestionDict } from '../../app/seed-data/page_question_dict';
import { AnswerCategory } from '../../app/types/enums/answer-category.enum';
import { FormatCategory } from '../../app/types/enums/format-category.enum';
import { PageType } from '../../app/types//enums/page-type.enum';

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

    getPageIndexFromPageId(pageId: number) {
        let page = surveyPageDict[1].find((i) => i.page_id === pageId);
        let index = surveyPageDict[1].indexOf(page);
        return index;
    }

    getPageIdFromIndex(index: number) {
        let pageId = surveyPageDict[1][index].page_id;
        return pageId;
    }

    getPageByIndex(index: number): Page {
        let result = surveyPageDict[1][index];
        return result;
    }

    getPageByPageId(pageId: number): Page {
        let result = surveyPageDict[1].find((i) => i.page_id === pageId);
        return result;
    }

    getAllPages(): Page[] {
        let result = surveyPageDict[1];
        return result;
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

    getQuestionsToDisplayByPageId(pageId: number): { questions: PageQuestion[], pageVisible: boolean, renderButtons: boolean } {
        // Find questions for current page
        let questions: PageQuestion[] = SeedDataSingleton.instanceOf().getQuestionsForPage(pageId);

        let atLeastOneVisibleQuestion = false;

        for (let curQuestion of questions) {
            if (curQuestion.sre_anca_id !== AnswerCategory.No_Answer) {
                atLeastOneVisibleQuestion = atLeastOneVisibleQuestion || curQuestion.visible;
            }
            // Always show the page if it has a visible PreQ_Intro or Section_Title
            if (curQuestion.sre_foca_id === FormatCategory.PreQ_Intro || curQuestion.sre_foca_id === FormatCategory.Section_Title) {
                atLeastOneVisibleQuestion = atLeastOneVisibleQuestion || curQuestion.visible;
            }
        }

        // Always Display any Residental Block Page
        let curPageType: PageType = SeedDataSingleton.instanceOf().getPageByPageId(pageId).page_type;
        if ([PageType.residentialBlockPart1, PageType.residentialBlockPart2, PageType.residentialBlockPart3].indexOf(curPageType) > -1) {
            atLeastOneVisibleQuestion = true;
        }

        return { questions: questions, pageVisible: atLeastOneVisibleQuestion, renderButtons: pageId > 2 };
    }

}
