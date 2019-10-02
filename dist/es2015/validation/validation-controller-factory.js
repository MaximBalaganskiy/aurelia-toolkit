import * as tslib_1 from "tslib";
import * as au from "../aurelia";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";
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
        controller.addRenderer(new MaterializeFormValidationRenderer());
        controller.validateTrigger = au.validateTrigger.changeOrBlur;
        return controller;
    };
    return ValidationControllerFactory;
}(au.ValidationControllerFactory));
export { ValidationControllerFactory };
// this tells DI to call static get method to resolve dependency
ValidationControllerFactory["protocol:aurelia:resolver"] = true;
//# sourceMappingURL=validation-controller-factory.js.map