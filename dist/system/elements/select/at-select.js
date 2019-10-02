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
            AtSelect = /** @class */ (function () {
                function AtSelect(element) {
                    var _this = this;
                    this.element = element;
                    this.options = [];
                    this.mdUnrenderValidateResults = function (results, renderer) {
                        var e_1, _a;
                        try {
                            for (var results_1 = tslib_1.__values(results), results_1_1 = results_1.next(); !results_1_1.done; results_1_1 = results_1.next()) {
                                var result = results_1_1.value;
                                if (!result.valid) {
                                    renderer.removeMessage(_this.validationContainer, result);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        renderer.removeValidationClasses(_this.input);
                    };
                    this.mdRenderValidateResults = function (results, renderer) {
                        var e_2, _a;
                        try {
                            for (var results_2 = tslib_1.__values(results), results_2_1 = results_2.next(); !results_2_1.done; results_2_1 = results_2.next()) {
                                var result = results_2_1.value;
                                if (!result.valid) {
                                    renderer.addMessage(_this.validationContainer, result);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (results_2_1 && !results_2_1.done && (_a = results_2.return)) _a.call(results_2);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        renderer.addValidationClasses(_this.input, !results.find(function (x) { return !x.valid; }));
                    };
                }
                AtSelect.prototype.select = function (o) {
                    if (o || this.allowEmpty) {
                        this.value = o;
                    }
                };
                AtSelect.prototype.attached = function () {
                    this.element.mdRenderValidateResults = this.mdRenderValidateResults;
                    this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
                };
                AtSelect.prototype.detached = function () {
                    aurelia_materialize_bridge_1.MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
                    this.element.mdRenderValidateResults = null;
                    this.element.mdUnrenderValidateResults = null;
                };
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Array)
                ], AtSelect.prototype, "options", void 0);
                tslib_1.__decorate([
                    au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Object)
                ], AtSelect.prototype, "value", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd,
                    tslib_1.__metadata("design:type", String)
                ], AtSelect.prototype, "label", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.stringMd,
                    tslib_1.__metadata("design:type", String)
                ], AtSelect.prototype, "hint", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], AtSelect.prototype, "readonly", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], AtSelect.prototype, "allowEmpty", void 0);
                AtSelect = tslib_1.__decorate([
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], AtSelect);
                return AtSelect;
            }());
            exports_1("AtSelect", AtSelect);
        }
    };
});
//# sourceMappingURL=at-select.js.map