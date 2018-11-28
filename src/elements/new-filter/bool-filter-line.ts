import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { FilterOperator } from "../filter/filter-operator";

@au.customElement("bool-filter-line")
export class BoolFilterLine extends FilterLineBase<boolean> {
	constructor(element: Element) {
		super(element);
		this.operators = [FilterOperator.Is];
	}
}
