import * as au from "../../aurelia";
import { FilterLineBase } from "./filter-line-base";
import { ILookupOptionsFunctionParameter } from "aurelia-materialize-bridge";
import { FilterOperator } from "./filter-operator";

@au.customElement("lookup-filter-line")
export class LookupFilterLine extends FilterLineBase<any> {
	constructor(element: Element) {
		super(element);
		this.operators = [FilterOperator.Is, FilterOperator.IsNot];
	}

	@au.bindable
	optionsFunction: (criteria: ILookupOptionsFunctionParameter<any>) => Promise<any[]>;

	@au.bindable
	displayFieldName: ((option: any) => string) | string;

	@au.bindable
	valueFieldName: ((option: any) => any) | string;

	@au.bindable
	optionHtml: string;
	optionHtmlChanged() {
		this.getOptionHtml = Function("option", "return `" + this.optionHtml.replace(/\(/g, "{").replace(/\)/g, "}") + "`") as any;
	}

	getOptionHtml: (o: any) => string;

	hydrateInternal(fl: LookupFilterLine) {
		fl.optionsFunction = this.optionsFunction;
		fl.displayFieldName = this.displayFieldName;
		fl.valueFieldName = this.valueFieldName;
		fl.optionHtml = this.optionHtml;
		fl.getOptionHtml = this.getOptionHtml;
	}
}
