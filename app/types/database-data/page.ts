import { PageType } from '../types/enums/page-type';

export class Page {
  constructor(
    public page_id: number,
    public page_sort_order: number,
    public page_type: PageType
  ) { }
}
