import { __decorate, __metadata } from "tslib";
import * as au from "../../aurelia";
import { ClientEditor } from "../settings-editor/client-editor";
var VariantEditor = /** @class */ (function () {
    function VariantEditor() {
    }
    VariantEditor.prototype.valueChanged = function () {
        if (this.dataType === ClientEditor.Decimal) {
            this.valueDecimal = this.value.toString();
        }
    };
    VariantEditor.prototype.bind = function () {
        this.valueChanged();
    };
    VariantEditor.prototype.updateDecimalValue = function () {
        this.value = parseFloat(this.valueDecimal);
    };
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], VariantEditor.prototype, "value", void 0);
    __decorate([
        au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
        __metadata("design:type", String)
    ], VariantEditor.prototype, "valueDecimal", void 0);
    __decorate([
        au.bindable,
        __metadata("design:type", Number)
    ], VariantEditor.prototype, "dataType", void 0);
    VariantEditor = __decorate([
        au.autoinject
    ], VariantEditor);
    return VariantEditor;
}());
export { VariantEditor };
//# sourceMappingURL=variant-editor.js.map