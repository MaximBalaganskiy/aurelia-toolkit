define(["require", "exports", "tslib", "../../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
