import { Component, OnInit } from 'angular2/core';
import { UserInputSingleton } from '../../../../app/vanilla-singletons/user-input.singleton';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { UserInput } from  '../../../../app/types/database-data/user-input';

@Component({
    selector: 'show-json',
    templateUrl: 'app/components/diagnostic/show-json/show-json.html'
})
export class ShowJsonComponent implements OnInit {
    protected navigationSingleton = NavigationSingleton.instanceOf();
    currentPage: number;
    data: UserInput[];

    ngOnInit() {
        this.data = UserInputSingleton.instanceOf().getAllUserInput();
        this.currentPage = NavigationSingleton.instanceOf().getCurrentPageNumber();
    }
}
