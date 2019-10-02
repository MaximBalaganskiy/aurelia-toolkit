"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
const client_editor_1 = require("../settings-editor/client-editor");
let VariantEditor = class VariantEditor {
    valueChanged() {
        if (this.dataType === client_editor_1.ClientEditor.Decimal) {
            this.valueDecimal = this.value.toString();
        }
    }
    bind() {
        this.valueChanged();
    }
    updateDecimalValue() {
        this.value = parseFloat(this.valueDecimal);
    }
};
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], VariantEditor.prototype, "value", void 0);
tslib_1.__decorate([
    au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
], VariantEditor.prototype, "valueDecimal", void 0);
tslib_1.__decorate([
    au.bindable
], VariantEditor.prototype, "dataType", void 0);
VariantEditor = tslib_1.__decorate([
    au.autoinject
], VariantEditor);
exports.VariantEditor = VariantEditor;
