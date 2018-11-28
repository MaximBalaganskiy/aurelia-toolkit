"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const aurelia_1 = require("../aurelia");
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
