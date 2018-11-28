import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
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
export { VariantEditor };
