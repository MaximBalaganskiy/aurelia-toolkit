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
            EnhanceMask = /** @class */ (function () {
                function EnhanceMask() {
                }
                EnhanceMask.prototype.beforeCompile = function (template) {
                    var e_1, _a;
                    var inputs = template.querySelectorAll("[inputmask]");
                    try {
                        for (var _b = tslib_1.__values(Array.from(inputs)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var i = _c.value;
                            i.setAttribute("md-inputmask", "");
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                };
                EnhanceMask = tslib_1.__decorate([
                    aurelia_1.viewEngineHooks
                ], EnhanceMask);
                return EnhanceMask;
            }());
            exports_1("EnhanceMask", EnhanceMask);
        }
    };
});
//# sourceMappingURL=enhance-inputmask.js.map