import { IFilterLine } from "./i-filter-line";
export declare class FilterLineContainer {
    private element;
    constructor(element: Element);
    filterLine: IFilterLine;
    availableFilterLines: IFilterLine[];
    remove(): void;
}
