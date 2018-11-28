import { FilterRow } from "./filter-row";
import { FilterOperator } from "./filter-operator";

export class TextFilterRow extends FilterRow<string> {
	constructor(name: string, label: string, operators?: FilterOperator[]) {
		super(name, label, operators ? operators : [FilterOperator.Is, FilterOperator.IsNot, FilterOperator.Like, FilterOperator.NotLike]);
	}

	createInstance(): TextFilterRow {
		return new TextFilterRow(this.name, this.label, this.operators);
	}

	getClassName(): string {
		return "text-filter-row";
	}
}
