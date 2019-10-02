import { IFilterLine } from "./i-filter-line";
import { FilterOperator } from "./filter-operator";
export declare abstract class FilterLineBase<T> implements IFilterLine {
    element: Element;
    constructor(element: Element);
    name: string;
    label: string;
    value: T;
    operator: FilterOperator;
    operators: FilterOperator[];
    maxWidth: number;
    hydrateInternal(fl: FilterLineBase<T>): void;
    hydrate(fl: FilterLineBase<T>): void;
    toJson(): any;
}
