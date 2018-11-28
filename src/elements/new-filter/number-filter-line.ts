import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "../filter/filter-operator";

@au.customElement("number-filter-line")
export class NumberFilterLine extends FilterLineBase<number> {
	constructor(element: Element) {
		super(element);
		this.operators = [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.GreaterThan, FilterOperator.LessThan];
		this.maxWidth = 150;
	}

	@au.observable
	valueText: string;
	valueTextChanged() {
		this.value = au.numeral(this.valueText).value();
	}
}
