define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let MdInputmaskCustomAttribute = class MdInputmaskCustomAttribute {
        constructor(element) {
            this.element = element;
            this.inputmaskChangeHandler = () => {
                let inputmask = this.element.au["inputmask"].viewModel;
                if (inputmask) {
                    au.updateLabel(inputmask.input, this.label);
                }
            };
        }
        attached() {
            this.label = this.element.querySelector("label");
            if (this.label) {
                this.element.addEventListener("inputmask-change", this.inputmaskChangeHandler);
                this.inputmaskChangeHandler();
            }
        }
        detached() {
            if (this.label) {
                this.element.removeEventListener("inputmask-change", this.inputmaskChangeHandler);
            }
        }
    };
    MdInputmaskCustomAttribute = tslib_1.__decorate([
        au.autoinject
    ], MdInputmaskCustomAttribute);
    exports.MdInputmaskCustomAttribute = MdInputmaskCustomAttribute;
});