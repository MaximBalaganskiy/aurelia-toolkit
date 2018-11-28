import { InputmaskCustomAttribute } from "aurelia-inputmask";
export declare class MdInputmaskCustomAttribute {
    private element;
    constructor(element: Element);
    label: HTMLLabelElement;
    inputmask: InputmaskCustomAttribute;
    attached(): void;
    detached(): void;
    inputmaskChangeHandler: () => void;
}
