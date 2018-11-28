import * as au from "../../aurelia";
import { IFilterLine } from "./i-filter-line";

@au.customElement("filter-line-container")
export class FilterLineContainer {
	constructor(private element: Element) { }

	filterLine: IFilterLine;

	@au.children("text-filter-line,lookup-filter-line,date-filter-line,number-filter-line,select-filter-line,bool-filter-line")
	availableFilterLines: IFilterLine[];

	remove() {
		au.fireEvent(this.element, "remove", { filterLine: this.filterLine });
	}
}
