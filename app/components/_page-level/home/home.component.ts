import { Component, Input } from 'angular2/core';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { PageQuestion } from '../../../../app/types/database-data/new/page-question';

@Component({
    selector: 'home',
    templateUrl: 'app/components/_page-level/home/home.html'
})
export class HomeComponent {

    @Input() question: PageQuestion;


    childclicked() {
        this.setTrackingValueAndMovePage('legalrep');
        return false; // tell the href in the anchor tag not to fire
    }

    adultClicked() {
        this.setTrackingValueAndMovePage('parent');
        return false; // tell the href in the anchor tag not to fire
    }

    selfClicked() {
        this.setTrackingValueAndMovePage('selfreport');
        return false; // tell the href in the anchor tag not to fire
    }

    private setTrackingValueAndMovePage(selectedOption: string) {
        UserInputSingleton.instanceOf().setUserInput('respondent_type', selectedOption);

        NavigationSingleton.instanceOf().next();
    }
}
