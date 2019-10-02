export declare class MdInputmaskCustomAttribute {
    private element;
    constructor(element: Element);
    label: HTMLLabelElement;
    attached(): void;
    detached(): void;
    inputmaskChangeHandler: () => void;
}
