import * as tslib_1 from "tslib";
import { viewEngineHooks } from "../aurelia";
let EnhanceMask = class EnhanceMask {
    beforeCompile(template) {
        let inputs = template.querySelectorAll("[inputmask]");
        for (let i of Array.from(inputs)) {
            i.setAttribute("md-inputmask", "");
        }
    }
};
EnhanceMask = tslib_1.__decorate([
    viewEngineHooks
], EnhanceMask);
export { EnhanceMask };
