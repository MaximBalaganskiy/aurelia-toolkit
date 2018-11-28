define(["require", "exports", "tslib", "../../aurelia", "aurelia-materialize-bridge"], function (require, exports, tslib_1, au, aurelia_materialize_bridge_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let AtSelect = class AtSelect {
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
    exports.AtSelect = AtSelect;
});
