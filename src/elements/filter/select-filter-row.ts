import { FilterRow } from "./filter-row";
import { FilterOperator } from "./filter-operator";

export class SelectFilterRow<T, V> extends FilterRow<T> {
	constructor(name: string, label: string, private options: T[], private displayFieldName: ((option: T) => string) | string,
		private valueFieldName: ((option: T) => T | V) | string, maxWidth?: number) {
		super(name, label, [FilterOperator.Is, FilterOperator.IsNot]);
		this.maxWidth = maxWidth;
	}

	createInstance(): SelectFilterRow<T, V> {
		return new SelectFilterRow(this.name, this.label, this.options, this.displayFieldName, this.valueFieldName);
	}

	getClassName(): string {
		return "select-filter-row";
	}

	getDisplay(option: T): T | string {
		if (!this.displayFieldName) {
			return option;
		}
		else if (this.displayFieldName instanceof Function) {
			return this.displayFieldName(option);
		}
		else {
			return option[this.displayFieldName];
		}
	}

	getValue(option: T): T | V {
		if (!this.valueFieldName) {
			return option;
		}
		else if (this.valueFieldName instanceof Function) {
			return this.valueFieldName(option);
		}
		else {
			return option[this.valueFieldName];
		}
	}
}
