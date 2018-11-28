import { FilterOperator } from "./filter-operator";

export interface IFilterRow {
	name: string;
	label: string;
	operators: FilterOperator[];
	operator: FilterOperator;
	value: any;
	maxWidth: number;

	clone(): IFilterRow;
	getClassName(): string; // for minified code to work correctly
}
