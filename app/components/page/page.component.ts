import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

// import { QuestionService} from '../../seedData/question.service';
// import { Question } from '../../seedData/question';


// import { DomainOption } from '../../seedData/domainOption';
// import { DomainOptions } from '../../seedData/domainOptions';

@Component({
    selector: 'page',
    templateUrl: 'app/components/page/page.html'
    //,  styleUrls: ['app/example/dashboard.component.css']
})
export class PageComponent implements OnInit {

    //   @Input() question: Question;
    //   //qu: Question;
    //   questions: Question[];
    //   options: DomainOption[];

    constructor(
        private _router: Router
        //    , private _questionService: QuestionService
        //, private _questionService: QuestionService
    ) {
    }

    ngOnInit() {

    }

    // gotoDetail(hero: Hero) {
    //   let link = ['HeroDetail', { id: hero.id }];
    //   this._router.navigate(link);
    //}
}
