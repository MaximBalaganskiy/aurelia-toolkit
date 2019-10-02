define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdInputmaskCustomAttribute = /** @class */ (function () {
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
    exports.MdInputmaskCustomAttribute = MdInputmaskCustomAttribute;
});
//# sourceMappingURL=md-inputmask.js.map