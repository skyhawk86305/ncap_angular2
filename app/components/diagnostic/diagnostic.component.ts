import { Component, OnInit } from 'angular2/core';
import { UserInputSingleton } from '../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../app/vanilla-singletons/navigation.singleton';
import { UserInput } from  '../../../app/types/user-input';

@Component({
    selector: 'diag',
    templateUrl: 'app/components/diagnostic/diagnostic.html'
})
export class DiagnosticComponent implements OnInit {
    public NavigationSingleton = NavigationSingleton;
    currentPage: number;
    data: UserInput[];

    ngOnInit() {
        this.data = UserInputSingleton.instanceOf().getAllUserInput();
        this.currentPage = NavigationSingleton.instanceOf().getCurrentPageNumber();
    }
}
