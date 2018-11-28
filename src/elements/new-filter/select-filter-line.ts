import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "../filter/filter-operator";

@au.customElement("select-filter-line")
export class SelectFilterLine extends FilterLineBase<any> {
	constructor(element: Element) {
		super(element);
		this.operators = [FilterOperator.Is, FilterOperator.IsNot];
	}

	@au.bindable
	options: any[];

	@au.bindable
	displayFieldName: ((option: any) => string) | string;

	@au.bindable
	valueFieldName: ((option: any) => any) | string;

	hydrateInternal(fl: SelectFilterLine) {
		fl.options = this.options;
		fl.displayFieldName = this.displayFieldName;
		fl.valueFieldName = this.valueFieldName;
	}

	getDisplay(option: any): any {
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

	getValue(option: any): any {
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
