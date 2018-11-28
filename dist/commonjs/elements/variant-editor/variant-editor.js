"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
let VariantEditor = class VariantEditor {
};
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], VariantEditor.prototype, "value", void 0);
tslib_1.__decorate([
    au.bindable
], VariantEditor.prototype, "dataType", void 0);
VariantEditor = tslib_1.__decorate([
    au.autoinject
], VariantEditor);
exports.VariantEditor = VariantEditor;
