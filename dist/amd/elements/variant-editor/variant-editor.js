define(["require", "exports", "tslib", "../../aurelia", "../settings-editor/client-editor"], function (require, exports, tslib_1, au, client_editor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VariantEditor = /** @class */ (function () {
        function VariantEditor() {
        }
        VariantEditor.prototype.valueChanged = function () {
            if (this.dataType === client_editor_1.ClientEditor.Decimal) {
                this.valueDecimal = this.value.toString();
            }
        };
        VariantEditor.prototype.bind = function () {
            this.valueChanged();
        };
        VariantEditor.prototype.updateDecimalValue = function () {
            this.value = parseFloat(this.valueDecimal);
        };
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", Object)
        ], VariantEditor.prototype, "value", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", String)
        ], VariantEditor.prototype, "valueDecimal", void 0);
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", Number)
        ], VariantEditor.prototype, "dataType", void 0);
        VariantEditor = tslib_1.__decorate([
            au.autoinject
        ], VariantEditor);
        return VariantEditor;
    }());
    exports.VariantEditor = VariantEditor;
});
//# sourceMappingURL=variant-editor.js.map