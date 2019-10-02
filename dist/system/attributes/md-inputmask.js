System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, MdInputmaskCustomAttribute;
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
            MdInputmaskCustomAttribute = /** @class */ (function () {
                function MdInputmaskCustomAttribute(element) {
                    var _this = this;
                    this.element = element;
                    this.inputmaskChangeHandler = function () {
                        var inputmask = _this.element.au["inputmask"].viewModel;
                        if (inputmask) {
                            au.updateLabel(inputmask.input, _this.label);
                        }
                    };
                }
                MdInputmaskCustomAttribute.prototype.attached = function () {
                    this.label = this.element.querySelector("label");
                    if (this.label) {
                        this.element.addEventListener("inputmask-change", this.inputmaskChangeHandler);
                        this.inputmaskChangeHandler();
                    }
                };
                MdInputmaskCustomAttribute.prototype.detached = function () {
                    if (this.label) {
                        this.element.removeEventListener("inputmask-change", this.inputmaskChangeHandler);
                    }
                };
                MdInputmaskCustomAttribute = tslib_1.__decorate([
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], MdInputmaskCustomAttribute);
                return MdInputmaskCustomAttribute;
            }());
            exports_1("MdInputmaskCustomAttribute", MdInputmaskCustomAttribute);
        }
    };
});
//# sourceMappingURL=md-inputmask.js.map