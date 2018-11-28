import * as au from "../aurelia";
export declare class ValidationControllerFactory extends au.ValidationControllerFactory {
    static get(container: au.Container): ValidationControllerFactory;
    constructor(container: au.Container);
    createForCurrentScope(validator?: au.Validator): au.ValidationController;
}
