import { Component, Input } from 'angular2/core';
import { ValidationResult } from '../../../../app/types/enums/validation-result.enum';
import { NavigationSingleton } from '../../../../app/vanilla-singletons/navigation.singleton';
import { ValidationSingleton } from '../../../../app/vanilla-singletons/validation.singleton';

@Component({
  selector: 'page-level-validation',
  templateUrl: 'app/components/page-level/page-level-validation/page-level-validation.html'
})

export class PageLevelValidationComponent {
  @Input() pageId: number;

  protected navigationSingleton = NavigationSingleton.instanceOf();
  protected validationSingleton = ValidationSingleton.instanceOf();
  protected ValidationResult = ValidationResult;
}
