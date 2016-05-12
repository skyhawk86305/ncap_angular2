import { Component, Input, OnInit } from 'angular2/core';
import { SeedDataService } from '../../../app/services/seed-data.service';
import { UserInputSingleton } from '../../../app/services/vanilla-singleton/user-input.singleton';
import { NavigationSingleton } from '../../../app/services/vanilla-singleton/navigation.singleton';
import { Question } from       '../../../app/types/question';
import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'consent',
    templateUrl: 'app/components/consent/consent.html'
})
export class ConsentComponent implements OnInit {

    @Input() question: Question;
    hasConsent: boolean = false;

    constructor(
        private _loadJsonDataService: SeedDataService
    ) {
    }

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
