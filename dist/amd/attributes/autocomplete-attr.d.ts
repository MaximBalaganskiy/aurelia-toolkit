import * as au from "../aurelia";
export declare class AutocompleteAttrCustomAttribute {
    private element;
    constructor(element: Element);
    attributeManager: au.AttributeManager;
    value: string;
    attached(): void;
    detached(): void;
}
