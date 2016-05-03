import { Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
// import {Observable} from 'rxjs/Rx';
// import {Response} from 'angular2/http';

// import { SurveyPageSre } from '../../types/database-data/survey-page-sre';
// import { Subu } from '../../types/database-data/subu';
// import { Sre } from '../../types/database-data/sre';
// import { Tooltip } from '../../types/database-data/tooltip';
// import { DisplayCondition } from '../../types/database-data/display-condition';
// import { Domain } from '../../types/database-data/domain';
// import { Reference } from '../../types/database-data/reference';

import { LoadJsonDataService } from '../../services/load.json.data.service';

@Component({
    selector: 'http-app',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/components/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {

    constructor(
        private _loadJsonDataService: LoadJsonDataService
    ) {
    }

    ngOnInit() {
    }
    
    click()
    {
        console.log(this._loadJsonDataService.tooltips[0].definition);
    }

}
