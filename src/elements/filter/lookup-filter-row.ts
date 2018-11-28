import { FilterRow } from "./filter-row";
import { FilterOperator } from "./filter-operator";
import { ILookupOptionsFunctionParameter } from "aurelia-materialize-bridge";

export class LookupFilterRow<TOption, TValue> extends FilterRow<TOption> {
	constructor(name: string, label: string, private optionsFunction: (criteria: ILookupOptionsFunctionParameter<TValue>) => Promise<TOption[]>,
		private displayFieldName: ((option: TOption) => string) | string, private valueFieldName: ((option: TOption) => TValue) | string,
		private getOptionHtml: (option: TOption) => string, maxWidth?: number, private preloadOptions?: boolean) {
		super(name, label, [FilterOperator.Is, FilterOperator.IsNot]);
		this.maxWidth = maxWidth;
	}

	createInstance(): LookupFilterRow<TOption, TValue> {
		return new LookupFilterRow(this.name, this.label, this.optionsFunction, this.displayFieldName, this.valueFieldName, this.getOptionHtml, this.maxWidth,
			this.preloadOptions);
	}

	getClassName(): string {
		return "lookup-filter-row";
	}
}
