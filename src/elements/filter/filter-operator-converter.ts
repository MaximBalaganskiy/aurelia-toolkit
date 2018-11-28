import {FilterOperator} from "./filter-operator";

export class FilterOperatorValueConverter {
	toView(value: FilterOperator): string {
		switch (value) {
			case FilterOperator.Like: return "like";
			case FilterOperator.NotLike: return "not like";
			case FilterOperator.Is: return "is";
			case FilterOperator.IsNot: return "is not";
			case FilterOperator.LessThan: return "≤";
			case FilterOperator.GreaterThan: return "≥";
			case FilterOperator.IsBefore: return "is before";
			case FilterOperator.IsAfter: return "is after";
		}
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
