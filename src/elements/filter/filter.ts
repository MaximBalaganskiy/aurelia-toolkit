import * as au from "../../aurelia";
import { IFilterRow } from "./i-filter-row";

@au.autoinject
export class Filter {
	constructor(private element: Element) {

	}

	@au.bindable
	rows: IFilterRow[] = [];

	@au.bindable
	availableRows: IFilterRow[] = [];

	@au.bindable
	pageSizes: number[];

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	pageSize: number;

	add(i: IFilterRow) {
		this.rows.push(i.clone());
		au.fireEvent(this.element, "added");
	}

	remove(i: IFilterRow) {
		this.rows.splice(this.rows.indexOf(i), 1);
		au.fireEvent(this.element, "removed");
	}

	search() {
		au.fireEvent(this.element, "search");
	}
}
