import { DomainOption } from './domain-option';
import { domain } from '../../app/seed-data/domain';

import _ from 'lodash';

export class DomainOptionsNew {

  private data: Array<DomainOption[]> = new Array<DomainOption[]>();

  populateWithData() {
    // Get unique ids

    let sortedDomains = _.orderBy(domain, 'id');
    let sortedUniqueDomains = _.sortedUniqBy(sortedDomains, 'id');

    let count = sortedUniqueDomains.length;

    for (let curUniqueDomain of sortedUniqueDomains) {
      let recordsForThisId = _.filter(sortedDomains, {id: curUniqueDomain.id});
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

      this.data[curUniqueDomain.id] = newDomainOptions;
    }

  }


}
