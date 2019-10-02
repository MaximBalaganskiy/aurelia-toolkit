import * as au from "../../aurelia";
import { IFilterLine } from "./i-filter-line";
import { I18NResource } from "../../interfaces/i18n-resource";
export declare class Filter {
    private element;
    private templatingEngine;
    private i18n;
    constructor(element: Element, templatingEngine: au.TemplatingEngine, i18n: au.I18N);
    static id: number;
    filterId: number;
    itemsCollection: HTMLDivElement;
    i18nResource: I18NResource["filter"];
    availableFilterLines: IFilterLine[];
    availableFilterLinesResolve: () => void;
    availableFilterLinesPromise: Promise<unknown>;
    availableFilterLinesChanged(): void;
    pageSizes: number[];
    pageSize: number;
    lines: IFilterLine[];
    lock: boolean;
    attached(): Promise<void>;
    add(i: IFilterLine): IFilterLine;
    remove(i: IFilterLine): void;
    search(): void;
}
