import { IFilterRow } from "./i-filter-row";
import { FilterOperator } from "./filter-operator";

export abstract class FilterRow<T> implements IFilterRow {
	constructor(public name: string, public label: string, public operators: FilterOperator[]) { }

	operator: FilterOperator;
	value: T;
	maxWidth: number;

	abstract createInstance(): FilterRow<T>;

	clone(): FilterRow<T> {
		let fi = this.createInstance();
		fi.operator = this.operator;
		fi.value = this.value;
		fi.maxWidth = this.maxWidth;
		return fi;
	}

	abstract getClassName(): string;
}
