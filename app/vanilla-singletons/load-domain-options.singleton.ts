import { Domain } from '../../app/types/database-data/domain';
import { Domains } from '../../app/types/database-data/domains';
import { domain } from '../../app/seed-data/domain_dict';

export class LoadDomainOptionsSingleton {

    private static _instance: LoadDomainOptionsSingleton = new LoadDomainOptionsSingleton();
    private _seedDataDomainOptions: Domains = domain;

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
