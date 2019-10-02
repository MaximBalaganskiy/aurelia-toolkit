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
            VariantEditor = class VariantEditor {
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
            exports_1("VariantEditor", VariantEditor);
        }
    };
});
