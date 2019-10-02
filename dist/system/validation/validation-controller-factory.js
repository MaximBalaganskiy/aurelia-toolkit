System.register(["tslib", "../aurelia", "aurelia-materialize-bridge"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, aurelia_materialize_bridge_1, ValidationControllerFactory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (aurelia_materialize_bridge_1_1) {
                aurelia_materialize_bridge_1 = aurelia_materialize_bridge_1_1;
            }
        ],
        execute: function () {
            ValidationControllerFactory = /** @class */ (function (_super) {
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
            exports_1("ValidationControllerFactory", ValidationControllerFactory);
            // this tells DI to call static get method to resolve dependency
            ValidationControllerFactory["protocol:aurelia:resolver"] = true;
        }
    };
});
//# sourceMappingURL=validation-controller-factory.js.map