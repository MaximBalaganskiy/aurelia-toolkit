import { FilterLineBase } from "./filter-line-base";
export declare class SelectFilterLine extends FilterLineBase<any> {
    constructor(element: Element);
    options: any[];
    displayFieldName: ((option: any) => string) | string;
    valueFieldName: ((option: any) => any) | string;
    hydrateInternal(fl: SelectFilterLine): void;
    getDisplay(option: any): any;
    getValue(option: any): any;
}
