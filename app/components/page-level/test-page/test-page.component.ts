import { Component, OnInit} from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';
import { LoadDomainOptionsSingleton } from '../../../../app/vanilla-singletons/load-domain-options.singleton';

@Component({
    selector: 'test-page',
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'app/components/page-level/test-page/test-page.html'
})
export class TestPageComponent implements OnInit {

    ngOnInit() {
        let test = LoadDomainOptionsSingleton.instanceOf().getDomainOptions(15);
        console.log(JSON.stringify(test));
    }
}
