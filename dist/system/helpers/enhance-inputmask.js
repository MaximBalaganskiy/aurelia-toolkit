System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, aurelia_1, EnhanceMask;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (aurelia_1_1) {
                aurelia_1 = aurelia_1_1;
            }
        ],
        execute: function () {
            EnhanceMask = class EnhanceMask {
                beforeCompile(template) {
                    let inputs = template.querySelectorAll("[inputmask]");
                    for (let i of Array.from(inputs)) {
                        i.setAttribute("md-inputmask", "");
                    }
                }
            };
            EnhanceMask = tslib_1.__decorate([
                aurelia_1.viewEngineHooks
            ], EnhanceMask);
            exports_1("EnhanceMask", EnhanceMask);
        }
    };
});
