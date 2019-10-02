import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
import { ClientEditor } from "../settings-editor/client-editor";
let VariantEditor = class VariantEditor {
    valueChanged() {
        if (this.dataType === ClientEditor.Decimal) {
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
export { VariantEditor };
