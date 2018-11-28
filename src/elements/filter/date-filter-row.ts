import { FilterRow } from "./filter-row";
import { FilterOperator } from "./filter-operator";

export class DateFilterRow extends FilterRow<Date> {
	constructor(name: string, label: string) {
		super(name, label, [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.IsBefore, FilterOperator.IsAfter]);
		this.maxWidth = 150;
	}

	createInstance(): FilterRow<Date> {
		return new DateFilterRow(this.name, this.label);
	}

	getClassName(): string {
		return "date-filter-row";
	}
}
