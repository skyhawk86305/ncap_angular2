import { PageType } from '../../types/enums/page-type.enum';

export class Page {
  constructor(
    public page_id: number,
    public page_sort_order: number,
    public page_type: PageType
  ) { }
}
