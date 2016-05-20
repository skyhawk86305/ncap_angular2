import { Component, OnInit} from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';
import { Sre } from '../../../../app/types/database-data/sre';
import { SurveyPageSre } from '../../../../app/types/database-data/survey-page-sre';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';

class Slim {
    seq_pag_id: number;
    page_sort_order: number;
}

@Component({
    selector: 'test-page',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/components/page-level/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {

    responseData: string[] = new Array<string>();

    sortedSurveyRenderingElements: Sre[];
    sortedUniquePages: SurveyPageSre[];

    ngOnInit() {
        let test = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(15);
        console.log(JSON.stringify(test));
    }
}
