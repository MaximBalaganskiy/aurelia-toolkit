import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";

@au.customElement("date-filter-line")
export class DateFilterLine extends FilterLineBase<Date> {
	constructor(element: Element) {
		super(element);
		this.operators = [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.IsBefore, FilterOperator.IsAfter];
		this.maxWidth = 150;
	}
}
