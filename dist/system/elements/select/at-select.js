System.register(["tslib", "../../aurelia", "aurelia-materialize-bridge"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, aurelia_materialize_bridge_1, AtSelect;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            },
            function (aurelia_materialize_bridge_1_1) {
                aurelia_materialize_bridge_1 = aurelia_materialize_bridge_1_1;
            }
        ],
        execute: function () {
            AtSelect = class AtSelect {
                constructor(element) {
                    this.element = element;
                    this.options = [];
                    this.mdUnrenderValidateResults = (results, renderer) => {
                        for (let result of results) {
                            if (!result.valid) {
                                renderer.removeMessage(this.validationContainer, result);
                            }
                        }
                        renderer.removeValidationClasses(this.input);
                    };
                    this.mdRenderValidateResults = (results, renderer) => {
                        for (let result of results) {
                            if (!result.valid) {
                                renderer.addMessage(this.validationContainer, result);
                            }
                        }
                        renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
                    };
                }
                select(o) {
                    if (o || this.allowEmpty) {
                        this.value = o;
                    }
                }
                attached() {
                    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
                    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
                }
                detached() {
                    aurelia_materialize_bridge_1.MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
                    this.element.mdRenderValidateResults = null;
                    this.element.mdUnrenderValidateResults = null;
                }
            };
            tslib_1.__decorate([
                au.bindable
            ], AtSelect.prototype, "options", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
            ], AtSelect.prototype, "value", void 0);
            tslib_1.__decorate([
                au.ato.bindable.stringMd
            ], AtSelect.prototype, "label", void 0);
            tslib_1.__decorate([
                au.ato.bindable.stringMd
            ], AtSelect.prototype, "hint", void 0);
            tslib_1.__decorate([
                au.ato.bindable.booleanMd
            ], AtSelect.prototype, "readonly", void 0);
            tslib_1.__decorate([
                au.ato.bindable.booleanMd
            ], AtSelect.prototype, "allowEmpty", void 0);
            AtSelect = tslib_1.__decorate([
                au.autoinject
            ], AtSelect);
            exports_1("AtSelect", AtSelect);
        }
    };
});
