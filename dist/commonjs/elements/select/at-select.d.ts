import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";
export declare class AtSelect {
    private element;
    constructor(element: Element);
    options: unknown[];
    optionsChanged(): void;
    value: unknown;
    valueChanged(): void;
    selectedOption: unknown;
    label: string;
    hint: string;
    readonly: boolean;
    allowEmpty: boolean;
    displayFieldName: ((option: unknown) => string) | string;
    valueFieldName: ((option: unknown) => unknown) | string;
    input: HTMLDivElement;
    validateResults: ValidateResult[];
    validationClass: string;
    select(o: unknown): void;
    bind(): void;
    attached(): void;
    detached(): void;
    mdUnrenderValidateResults: (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => void;
    getValue(option: unknown): unknown;
    getDisplayValue(option: unknown): string;
}
