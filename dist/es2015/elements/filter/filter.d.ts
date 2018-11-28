import * as au from "../../aurelia";
import { IFilterLine } from "./i-filter-line";
export declare class Filter {
    private element;
    private templatingEngine;
    constructor(element: Element, templatingEngine: au.TemplatingEngine);
    static id: number;
    filterId: number;
    itemsCollection: HTMLDivElement;
    availableFilterLines: IFilterLine[];
    availableFilterLinesChanged(): void;
    pageSizes: number[];
    pageSize: number;
    lines: IFilterLine[];
    attached(): void;
    add(i: IFilterLine): void;
    remove(i: IFilterLine): void;
    search(): void;
}
