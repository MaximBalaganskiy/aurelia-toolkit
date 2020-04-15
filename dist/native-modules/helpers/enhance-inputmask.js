import { __decorate, __values } from "tslib";
import { viewEngineHooks } from "../aurelia";
var EnhanceMask = /** @class */ (function () {
    function EnhanceMask() {
    }
    EnhanceMask.prototype.beforeCompile = function (template) {
        var e_1, _a;
        var inputs = template.querySelectorAll("[inputmask]");
        try {
            for (var _b = __values(Array.from(inputs)), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    EnhanceMask = __decorate([
        viewEngineHooks
    ], EnhanceMask);
    return EnhanceMask;
}());
export { EnhanceMask };
//# sourceMappingURL=enhance-inputmask.js.map