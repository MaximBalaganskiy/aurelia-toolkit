import { FilterLineBase } from "./filter-line-base";
export declare class NumberFilterLine extends FilterLineBase<number> {
    constructor(element: Element);
    valueText: string;
    valueTextChanged(): void;
}
