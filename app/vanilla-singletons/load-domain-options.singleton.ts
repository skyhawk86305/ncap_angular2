import { Domain } from '../../app/types/database-data/domain';
import { Domains } from '../../app/types/database-data/domains';
import { domain } from '../../app/seed-data/domain_dict';

import _ from 'lodash';

export class LoadDomainOptionsSingleton {

    private static _instance: LoadDomainOptionsSingleton = new LoadDomainOptionsSingleton();
    private _seedDataDomainOptions: Domains = domain;

    // static addTooltipIfNecessary(domainOption: DomainOption) {
    //     // Does the question contain a tooltip?
    //     if (domainOption.displayed_value.indexOf('--TT') >= 0) {
    //         let position = domainOption.displayed_value.indexOf('--TT');
    //         let workingText = domainOption.displayed_value.substring(position + 4);

    //         workingText = workingText.replace(/--.*/, '');
    //         domainOption.toolTipId = +workingText;

    //         // Remove --TT5-- etc from question text    
    //         domainOption.displayed_value = domainOption.displayed_value.replace(/--TT.*--/g, '');
    //     }
    // }

    public static instanceOf(): LoadDomainOptionsSingleton {
        return LoadDomainOptionsSingleton._instance;
    }

    constructor() {
        // Will only fire once since this class is a Singleton
        //this.initializeData();
        this._seedDataDomainOptions = domain;
        LoadDomainOptionsSingleton._instance = this;
    }

    public getDomainOptions(id: number): Domain[] {
        let result = this._seedDataDomainOptions[id];
        return result;
    }

    // private initializeData() {
    //     // Get unique ids
    //     let sortedDomains = _.orderBy(domain, 'id');
    //     let sortedUniqueDomains = _.sortedUniqBy(sortedDomains, 'id');

    //     for (let curUniqueDomain of sortedUniqueDomains) {
    //         let recordsForThisId = _.filter(sortedDomains, { id: curUniqueDomain.id });
    //         recordsForThisId = _.sortedUniqBy(recordsForThisId, 'sort_order');

    //         let newDomainOptions: DomainOption[] = new Array<DomainOption>();
    //         for (let curEntry of recordsForThisId) {
    //             let newDomainOption = new DomainOption();
    //             newDomainOption.id = curUniqueDomain.id;
    //             newDomainOption.displayed_value = curEntry.value;
    //             if (newDomainOption.displayed_value) {
    //                 newDomainOption.displayed_value = newDomainOption.displayed_value.replace(/\\'/g, '\''); // xyzzy fix text like child\'s etc
    //                 newDomainOption.displayed_value = newDomainOption.displayed_value.replace('<tooltip id="', '--TT').replace('"/>', '--'); // xyzzy

    //                 LoadDomainOptionsSingleton.addTooltipIfNecessary(newDomainOption);

    //             }
    //             newDomainOption.sort_order = curEntry.sort_order;
    //             newDomainOption.stored_value = curEntry.name.toString(); // xyzzy
    //             newDomainOptions.push(newDomainOption);
    //         }

    //         this.allDomainOptions[curUniqueDomain.id] = newDomainOptions;
    //     }
    // }
}
