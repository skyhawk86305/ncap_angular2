import { Component, Input, OnInit } from 'angular2/core';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInput } from  '../../../../app/types/user-input';
import { PageQuestion } from '../../../../app/types/database-data/page-question';

@Component({
    selector: 'consent',
    templateUrl: 'app/components/page-level/consent/consent.html'
})
export class ConsentComponent implements OnInit {
    hasConsent: boolean = false;
    TRACKING_KEY: string = 'initial_consent';

    ngOnInit() {
        let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.TRACKING_KEY);
        if (previousUserInput) {
            this.hasConsent = (previousUserInput.storedValue === 'Y');
        }
    }

    next() {
        console.log('Clicked next');
        UserInputSingleton.instanceOf().setUserInput(this.TRACKING_KEY, 'Y');
        NavigationSingleton.instanceOf().next();
    }

    exit() {
        // Todo
        console.log('Clicked exit');
    }
}
