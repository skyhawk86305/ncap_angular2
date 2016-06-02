import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { SeedDataSingleton } from '../../../../app/vanilla-singletons/seed-data.singleton';
import { Page } from '../../../../app/types/database-data/page';
import { PageType } from '../../../types/enums/page-type.enum';
import { HomeComponent } from '../home/home.component';
import { ConsentComponent } from '../consent/consent.component';
import { ResidentalBlockComponent } from '../residental-block/residental-block.component';
import { BirthCertificateComponent } from '../birth-certificate/birth-certificate.component';
import { QuestionContainerComponent } from '../question-container/question-container.component';
import { LastPageComponent } from '../last-page/last-page.component';
import { ReContactComponent } from '../re-contact/re-contact.component';
import { NgSwitchQuestionComponent } from '../../question-level-elements/ng-switch-question/ng-switch-question.component';
import { ShowJsonComponent } from '../../diagnostic/show-json/show-json.component';
import { ModifyUserInputComponent } from '../../diagnostic/modify-user-input/modify-user-input.component';
import { JsonStringifyPageQuestionComponent } from '../../diagnostic/json-stringify-page-question/json-stringify-page-question.component';
import { USERINPUT_SCENARIO1 } from  '../../../../app/seed-data/json-for-debugging/user-input-senario1';
import { USERINPUT_SCENARIO2 } from '../../../../app/seed-data/json-for-debugging/user-input-senario2';
import { IObservable } from '../../../../app/other-logic/i-observable';

@Component({
    selector: 'ng-switch-page-type',
    templateUrl: 'app/components/page-level/ng-switch-page-type/ng-switch-page-type.html',
    directives: [QuestionContainerComponent, NgSwitchQuestionComponent,
        ModifyUserInputComponent, JsonStringifyPageQuestionComponent, ShowJsonComponent, HomeComponent,
        BirthCertificateComponent, ConsentComponent, ResidentalBlockComponent,
        LastPageComponent, ReContactComponent]
})
export class NgSwitchPageTypeComponent implements OnInit, IObservable {

    @Input() pageInput: Page;
    public pageData: Page;
    public pageId: number;
    public PageType = PageType;
    protected navigationSingleton = NavigationSingleton.instanceOf();
    protected seedDataSingleton = SeedDataSingleton.instanceOf();

    constructor(
        private _routeParams: RouteParams
    ) {
    }

    ngOnInit() {
        this.handleUrlParameters();
        if (!this.pageInput) {
            NavigationSingleton.instanceOf().registerAsObserverOfNavigation(this);
            this.oberservedDataChanged();
        } else {
            this.pageData = this.pageInput;
        }

    }

    public oberservedDataChanged() {
        this.pageId = this.navigationSingleton.currentPageId;
        this.pageData = this.seedDataSingleton.getPageByPageId(this.pageId);
    }

    private handleUrlParameters() {
        // plugh Move all below to a Scenario service/ singleton

        // Is a pageID in the URL?
        let requestedPageId = +this._routeParams.get('pageId');
        if (requestedPageId) {
            NavigationSingleton.instanceOf().setPageId(requestedPageId);
        }

        // Is a scenarioID in the URL?
        let scenarioId = +this._routeParams.get('scenarioId');
        if (scenarioId === 1) {
            UserInputSingleton.instanceOf().defaultUserInput(USERINPUT_SCENARIO1);
            NavigationSingleton.instanceOf().setPageId(15);
        }
        if (scenarioId === 2) {
            UserInputSingleton.instanceOf().defaultUserInput(USERINPUT_SCENARIO2);
            NavigationSingleton.instanceOf().setPageId(17);
        }

        if (this._routeParams.get('diag')) {
            console.log('In Diag mode');
            // enable Diag mode
            NavigationSingleton.instanceOf().diagMode = true;
        }
    }
}
