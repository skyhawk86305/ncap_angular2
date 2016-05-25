import { Component, OnInit } from 'angular2/core';
import { HomeComponent } from '../home/home.component';
import { SeedDataSingleton } from '../../../../app/vanilla-singletons/seed-data.singleton';
import { Page } from '../../../../app/types/database-data/page';
import { NgSwitchPageTypeComponent } from '../../../../app/components/page-level/ng-switch-page-type/ng-switch-page-type.component';

@Component({
    selector: 'page',
    templateUrl: 'app/components/page-level/all-pages/all-pages.html',
    directives: [NgSwitchPageTypeComponent, HomeComponent]
})
export class AllPagesComponent implements OnInit {
    pages: Page[];
    renderButtons: boolean = false;

    ngOnInit() {
        this.pages = SeedDataSingleton.instanceOf().getAllPages();
    }
}
