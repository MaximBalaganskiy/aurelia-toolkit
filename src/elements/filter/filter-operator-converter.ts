import * as au from "../../aurelia";
import { FilterOperator } from "./filter-operator";
import { I18NResource } from "../../interfaces/i18n-resource";

@au.autoinject
export class FilterOperatorValueConverter {
	constructor(private i18n: au.I18N) {
		this.i18nResource = this.i18n.tr("aurelia-toolkit:filter.operator", { returnObjects: true }) as any as I18NResource["filter"]["operator"];
	}

	i18nResource: I18NResource["filter"]["operator"];

	toView(value: FilterOperator): string {
		switch (value) {
			case FilterOperator.Like: return this.i18nResource.like;
			case FilterOperator.NotLike: return this.i18nResource.notLike;
			case FilterOperator.Is: return this.i18nResource.is;
			case FilterOperator.IsNot: return this.i18nResource.isNot;
			case FilterOperator.LessThan: return "≤";
			case FilterOperator.GreaterThan: return "≥";
			case FilterOperator.IsBefore: return this.i18nResource.isBefore;
			case FilterOperator.IsAfter: return this.i18nResource.isAfter;
		}
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
