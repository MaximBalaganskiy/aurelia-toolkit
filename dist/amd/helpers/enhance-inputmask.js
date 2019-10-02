define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, aurelia_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let EnhanceMask = class EnhanceMask {
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
    exports.EnhanceMask = EnhanceMask;
});
