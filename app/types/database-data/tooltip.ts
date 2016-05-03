// import { ValidationType } from '../../../app/types/enums/validation-type.enum';
// import { ValidationResult } from '../../../app/types/enums/validation-result.enum';

export class Tooltip {
    constructor(
        public id: number,
        public term?: string,
        public definition?: string,
        public ttip_ref_id?: number
    ) { }
}

// class Test {
//     constructor(public a: string, public b: string, public c?: string)
//     {
//     }
// }
