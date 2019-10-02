define(["require", "exports", "tslib", "../../aurelia", "../settings-editor/client-editor"], function (require, exports, tslib_1, au, client_editor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
