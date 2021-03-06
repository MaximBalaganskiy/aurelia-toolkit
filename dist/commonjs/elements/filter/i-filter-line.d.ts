import { FilterOperator } from "./filter-operator";
export interface IFilterLine {
    name: string;
    label: string;
    operators: FilterOperator[];
    operator: FilterOperator;
    value: any;
    maxWidth: number;
    element: Element;
    hydrate(fl: IFilterLine): any;
    toJson(): any;
}
