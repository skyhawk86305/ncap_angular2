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
        this._seedDataDomainOptions = domain;
        LoadDomainOptionsSingleton._instance = this;
    }

    public getDomainOptions(id: number): Domain[] {
        let result = this._seedDataDomainOptions[id];
        return result;
    }
}
