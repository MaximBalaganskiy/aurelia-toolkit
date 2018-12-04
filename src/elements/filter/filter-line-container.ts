import * as au from "../../aurelia";
import { IFilterLine } from "./i-filter-line";

@au.customElement("filter-line-container")
export class FilterLineContainer {
	constructor(private element: Element) { }

	filterLine: IFilterLine;

	@au.ato.bindable.booleanMd
	lock: boolean;

	remove() {
		au.fireEvent(this.element, "remove", { filterLine: this.filterLine });
	}
}
