import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";
export declare class AtSelect {
    private element;
    constructor(element: Element);
    options: any[];
    value: any;
    label: string;
    hint: string;
    readonly: boolean;
    allowEmpty: boolean;
    input: HTMLDivElement;
    validationContainer: HTMLElement;
    select(o: any): void;
    attached(): void;
    detached(): void;
    mdUnrenderValidateResults: (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => void;
}
