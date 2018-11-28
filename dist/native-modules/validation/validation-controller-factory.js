import * as au from "../aurelia";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";
export class ValidationControllerFactory extends au.ValidationControllerFactory {
    static get(container) {
        return new ValidationControllerFactory(container);
    }
    constructor(container) {
        super(container);
    }
    createForCurrentScope(validator) {
        let controller = super.createForCurrentScope(validator);
        controller.addRenderer(new MaterializeFormValidationRenderer());
        controller.validateTrigger = au.validateTrigger.changeOrBlur;
        return controller;
    }
}
// this tells DI to call static get method to resolve dependency
ValidationControllerFactory["protocol:aurelia:resolver"] = true;
