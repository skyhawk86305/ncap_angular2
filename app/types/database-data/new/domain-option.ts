export class DomainOption {
    // Not populated directly from DB Data:
  toolTipId: number; // xyzzy Temp property to get Tooltips partially working 

  constructor(
    public sort_order: number,
    public name: number,
    public value: string
  ) { }

}
