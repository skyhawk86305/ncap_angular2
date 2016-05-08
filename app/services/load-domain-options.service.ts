import { Injectable } from 'angular2/core';

import { DomainOption } from  '../../app/types/domain-option';
import { domain } from '../../app/seed-data/domain';

import _ from 'lodash';

@Injectable()
export class LoadDomainOptionsService {
    BASE_PATH = 'app/seed-data/raw-json/';

    private allDomainOptions: Array<DomainOption[]> = new Array<DomainOption[]>();

    constructor(
    ) {
        // Should only fire once since Services are Singletons in Angular2
        this.populateWithData();
    }

    public getDomainOptions(id: number) {
        return this.allDomainOptions[id];
    }

    private populateWithData() {
        // Get unique ids
        let sortedDomains = _.orderBy(domain, 'id');
        let sortedUniqueDomains = _.sortedUniqBy(sortedDomains, 'id');

        for (let curUniqueDomain of sortedUniqueDomains) {
            let recordsForThisId = _.filter(sortedDomains, { id: curUniqueDomain.id });
            recordsForThisId = _.sortedUniqBy(recordsForThisId, 'sort_order');

            let newDomainOptions: DomainOption[] = new Array<DomainOption>();
            for (let curEntry of recordsForThisId) {
                let newDomainOption = new DomainOption();
                newDomainOption.id = curUniqueDomain.id;
                newDomainOption.displayed_value = curEntry.value;
                newDomainOption.sort_order = curEntry.sort_order;
                newDomainOption.stored_value = curEntry.name.toString(); //xyzzy
                newDomainOptions.push(newDomainOption);
            }

            this.allDomainOptions[curUniqueDomain.id] = newDomainOptions;
        }
    }
}
