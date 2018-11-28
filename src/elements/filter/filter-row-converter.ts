import { IFilterRow } from "./i-filter-row";

export class FilterRowValueConverter {
	toView(value: IFilterRow): string {
		return value.getClassName() + "-template.html";
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
