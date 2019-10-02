import { FilterLineBase } from "./filter-line-base";
import { ILookupOptionsFunctionParameter } from "aurelia-materialize-bridge";
export declare class LookupFilterLine extends FilterLineBase<any> {
    constructor(element: Element);
    optionsFunction: (criteria: ILookupOptionsFunctionParameter<any>) => Promise<any[]>;
    displayFieldName: ((option: any) => string) | string;
    valueFieldName: ((option: any) => any) | string;
    optionHtml: string;
    optionHtmlChanged(): void;
    getOptionHtml: (o: any) => string;
    hydrateInternal(fl: LookupFilterLine): void;
}
