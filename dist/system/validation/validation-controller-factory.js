System.register(["../aurelia", "aurelia-materialize-bridge"], function (exports_1, context_1) {
    "use strict";
    var au, aurelia_materialize_bridge_1, ValidationControllerFactory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (au_1) {
                au = au_1;
            },
            function (aurelia_materialize_bridge_1_1) {
                aurelia_materialize_bridge_1 = aurelia_materialize_bridge_1_1;
            }
        ],
        execute: function () {
            ValidationControllerFactory = class ValidationControllerFactory extends au.ValidationControllerFactory {
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
            };
            exports_1("ValidationControllerFactory", ValidationControllerFactory);
            // this tells DI to call static get method to resolve dependency
            ValidationControllerFactory["protocol:aurelia:resolver"] = true;
        }
    };
});
