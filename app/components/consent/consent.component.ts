import { Component, Input, OnInit } from 'angular2/core';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { PageQuestion } from '../../../app/types/database-data/page-question';
import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'consent',
    templateUrl: 'app/components/consent/consent.html'
})
export class ConsentComponent implements OnInit {

    @Input() question: PageQuestion;
    hasConsent: boolean = false;

    ngOnInit() {
        let previousUserInput: UserInput = UserInputSingleton.instanceOf().getUserInput(this.question.tracking_key);
        if (previousUserInput) {
            this.hasConsent = (previousUserInput.storedValue === 'Y');
        }
    }

    next() {
        console.log('Clicked next');
        UserInputSingleton.instanceOf().setUserInput('initial_consent', 'Y');
        NavigationSingleton.instanceOf().next();
    }

    exit() {
        // Todo
        console.log('Clicked exit');
    }

}
