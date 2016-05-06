import { DisplayCondition } from './display-condition';
import { Domain } from './domain';
import { Reference } from './reference';
import { Sre } from './sre';
import { Subu } from './subu';
import { SurveyPageSre } from './survey-page-sre';
import { Tooltip } from './tooltip';

export class AllDataBaseData {
    displayConditions: DisplayCondition[];
    domains: Domain[];
    references: Reference[];
    sres: Sre[];
    subus: Subu[];
    surveyPageSres: SurveyPageSre[];
    tooltips: Tooltip[];
}
