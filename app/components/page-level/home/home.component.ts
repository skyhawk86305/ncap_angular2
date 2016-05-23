import { Component } from 'angular2/core';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';

@Component({
    selector: 'home',
    templateUrl: 'app/components/page-level/home/home.html'
})
export class HomeComponent {
    childclicked() {
        this.setTrackingValueAndMovePage('parent');
        return false; // tell the href in the anchor tag not to fire
    }

    adultClicked() {
        this.setTrackingValueAndMovePage('legalrep');
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
