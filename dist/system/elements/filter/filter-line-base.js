System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, FilterLineBase;
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
            FilterLineBase = class FilterLineBase {
                constructor(element) {
                    this.element = element;
                }
                // tslint:disable-next-line:no-empty
                hydrateInternal(fl) { }
                hydrate(fl) {
                    fl.label = this.label;
                    fl.name = this.name;
                    fl.operators = this.operators;
                    fl.operator = this.operator;
                    fl.value = this.value;
                    fl.maxWidth = this.maxWidth;
                    this.hydrateInternal(fl);
                }
                toJson() {
                    return { name: this.name, operator: this.operator, value: this.value };
                }
            };
            tslib_1.__decorate([
                au.bindable
            ], FilterLineBase.prototype, "name", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
            ], FilterLineBase.prototype, "label", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
            ], FilterLineBase.prototype, "value", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
            ], FilterLineBase.prototype, "operator", void 0);
            tslib_1.__decorate([
                au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
            ], FilterLineBase.prototype, "operators", void 0);
            tslib_1.__decorate([
                au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
            ], FilterLineBase.prototype, "maxWidth", void 0);
            exports_1("FilterLineBase", FilterLineBase);
        }
    };
});
