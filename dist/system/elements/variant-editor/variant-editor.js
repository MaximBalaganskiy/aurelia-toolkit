System.register(["tslib", "../../aurelia", "../settings-editor/client-editor"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, client_editor_1, VariantEditor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (client_editor_1_1) {
                client_editor_1 = client_editor_1_1;
            }
        ],
        execute: function () {
            VariantEditor = /** @class */ (function () {
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
            exports_1("VariantEditor", VariantEditor);
        }
    };
});
//# sourceMappingURL=variant-editor.js.map