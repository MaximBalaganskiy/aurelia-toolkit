import * as au from "../../aurelia";
import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer, MdDatePicker } from "aurelia-materialize-bridge";
export declare class Datepicker {
    private element;
    private taskQueue;
    constructor(element: Element, taskQueue: au.TaskQueue);
    static id: number;
    controlId: string;
    readonly: boolean;
    label: string;
    labelElement: HTMLLabelElement;
    value: Date;
    valueChanged(): void;
    icon: HTMLElement;
    pickerInput: HTMLInputElement;
    mdDatepicker: MdDatePicker;
    validationContainer: HTMLElement;
    input: HTMLInputElement;
    bind(): void;
    attached(): void;
    detached(): void;
    open(): void;
    mdUnrenderValidateResults: (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => void;
    blur(): void;
    focus(): void;
    suppressMaterializeChange(e: Event): void;
}
