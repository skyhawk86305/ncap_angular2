export class DisplayCondition {
  constructor(
    public condition_order: number,
    public logical_operator: string,
    public relation: string,
    public tracking_key: string,
    public stored_value: number,
    public displayed_value: string
  ) { }
}
