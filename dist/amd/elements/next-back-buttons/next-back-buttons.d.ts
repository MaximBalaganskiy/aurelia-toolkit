export declare class NextBackButtons {
    private element;
    constructor(element: Element);
    readonly: boolean;
    backCaption: string;
    backIcon: string;
    saveCaption: string;
    saveIcon: string;
    nextCaption: string;
    nextIcon: string;
    back(): void;
    save(): void;
    next(): void;
}
