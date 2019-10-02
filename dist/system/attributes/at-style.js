System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, AtStyleCustomAttribute;
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
            AtStyleCustomAttribute = /** @class */ (function () {
                function AtStyleCustomAttribute(element) {
                    this.element = element;
                }
                AtStyleCustomAttribute.prototype.valueChanged = function () {
                    this.element.style.cssText = this.value;
                };
                AtStyleCustomAttribute.prototype.attached = function () {
                    this.valueChanged();
                };
                AtStyleCustomAttribute = tslib_1.__decorate([
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], AtStyleCustomAttribute);
                return AtStyleCustomAttribute;
            }());
            exports_1("AtStyleCustomAttribute", AtStyleCustomAttribute);
        }
    };
});
//# sourceMappingURL=at-style.js.map