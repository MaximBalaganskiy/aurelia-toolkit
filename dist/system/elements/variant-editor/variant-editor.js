System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, VariantEditor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            VariantEditor = class VariantEditor {
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
            exports_1("VariantEditor", VariantEditor);
        }
    };
});
