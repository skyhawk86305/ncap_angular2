import { Component, Input } from 'angular2/core';
import { PageLevelValidationComponent } from '../page-level-validation/page-level-validation.component';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component';
import { NgSwitchQuestionComponent } from '../../question-level-elements/ng-switch-question/ng-switch-question.component';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { SeedDataSingleton } from '../../../../app/vanilla-singletons/seed-data.singleton';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';

@Component({
    selector: 'question-container',
    templateUrl: 'app/components/page-level/question-container/question-container.html',
    directives: [
        NgSwitchQuestionComponent,
        PageLevelValidationComponent,
        NavigationButtonsComponent,
    ]
})
export class QuestionContainerComponent {

    @Input() pageId: number;
    // Make classes accessible by html
    protected navigationSingleton = NavigationSingleton.instanceOf();
    protected ValidationResult = ValidationResult;
    protected SeedDataSingleton = SeedDataSingleton;

}
