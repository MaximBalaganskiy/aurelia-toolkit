import * as au from "../../aurelia";
import { FilterRow } from "./filter-row";
import { FilterOperator } from "./filter-operator";

export class NumberFilterRow extends FilterRow<number> {
	constructor(name: string, label: string, maxWidth?: number) {
		super(name, label, [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.GreaterThan, FilterOperator.LessThan]);
		this.maxWidth = maxWidth ? maxWidth : 150;
	}

	@au.observable
	valueText: string;
	valueTextChanged() {
		this.value = au.numeral(this.valueText).value();
	}

	createInstance(): NumberFilterRow {
		return new NumberFilterRow(this.name, this.label);
	}

	getClassName(): string {
		return "number-filter-row";
	}
}
