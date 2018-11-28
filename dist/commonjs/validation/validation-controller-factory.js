"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const au = require("../aurelia");
const aurelia_materialize_bridge_1 = require("aurelia-materialize-bridge");
class ValidationControllerFactory extends au.ValidationControllerFactory {
    static get(container) {
        return new ValidationControllerFactory(container);
    }
    constructor(container) {
        super(container);
    }
    createForCurrentScope(validator) {
        let controller = super.createForCurrentScope(validator);
        controller.addRenderer(new aurelia_materialize_bridge_1.MaterializeFormValidationRenderer());
        controller.validateTrigger = au.validateTrigger.changeOrBlur;
        return controller;
    }
}
exports.ValidationControllerFactory = ValidationControllerFactory;
// this tells DI to call static get method to resolve dependency
ValidationControllerFactory["protocol:aurelia:resolver"] = true;
