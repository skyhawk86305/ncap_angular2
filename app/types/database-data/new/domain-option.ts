export class DomainOption {
    // Not populated directly from DB Data:
  toolTipId: number; // xyzzy Temp property to get Tooltips partially working 

  constructor(
    public sort_order: number,
    public stored_value: number,
    public displayed_value: string
  ) { }

}
