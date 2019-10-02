define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, aurelia_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EnhanceMask = /** @class */ (function () {
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
    exports.EnhanceMask = EnhanceMask;
});
//# sourceMappingURL=enhance-inputmask.js.map