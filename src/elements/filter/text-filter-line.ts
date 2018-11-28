import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "./filter-operator";

@au.customElement("text-filter-line")
export class TextFilterLine extends FilterLineBase<string> {
	constructor(element: Element) {
		super(element);
		this.operators = [FilterOperator.Like, FilterOperator.NotLike];
	}
}
