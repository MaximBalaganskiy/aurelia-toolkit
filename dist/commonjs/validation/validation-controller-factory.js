"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var aurelia_materialize_bridge_1 = require("aurelia-materialize-bridge");
var ValidationControllerFactory = /** @class */ (function (_super) {
    tslib_1.__extends(ValidationControllerFactory, _super);
    function ValidationControllerFactory(container) {
        return _super.call(this, container) || this;
    }
    ValidationControllerFactory.get = function (container) {
        return new ValidationControllerFactory(container);
    };
    ValidationControllerFactory.prototype.createForCurrentScope = function (validator) {
        var controller = _super.prototype.createForCurrentScope.call(this, validator);
        controller.addRenderer(new aurelia_materialize_bridge_1.MaterializeFormValidationRenderer());
        controller.validateTrigger = au.validateTrigger.changeOrBlur;
        return controller;
    };
    return ValidationControllerFactory;
}(au.ValidationControllerFactory));
exports.ValidationControllerFactory = ValidationControllerFactory;
// this tells DI to call static get method to resolve dependency
ValidationControllerFactory["protocol:aurelia:resolver"] = true;
//# sourceMappingURL=validation-controller-factory.js.map