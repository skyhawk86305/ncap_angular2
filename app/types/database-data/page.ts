import { PageType } from '../../types/enums/page-type.enum';

export class Page {
  // Not populated directly from DB Data:
  show_validation: boolean;

  constructor(
    public page_id: number,
    public page_sort_order: number,
    public page_type: PageType
  ) { }
}
