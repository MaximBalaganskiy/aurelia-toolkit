import * as au from "../../aurelia";
import { IFilterLine } from "./i-filter-line";
import { FilterOperator } from "../filter/filter-operator";

export abstract class FilterLineBase<T> implements IFilterLine {
	constructor(public element: Element) { }

	@au.bindable
	name: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	label: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: T;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	operator: FilterOperator;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	operators: FilterOperator[];

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	maxWidth: number;

	// tslint:disable-next-line:no-empty
	hydrateInternal(fl: FilterLineBase<T>) { }

	hydrate(fl: FilterLineBase<T>) {
		fl.label = this.label;
		fl.name = this.name;
		fl.operators = this.operators;
		fl.operator = this.operator;
		fl.value = this.value;
		fl.maxWidth = this.maxWidth;
		this.hydrateInternal(fl);
	}

	toJson(): any {
		return { name: this.name, operator: this.operator, value: this.value };
	}
}
