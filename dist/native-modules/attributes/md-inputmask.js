import * as tslib_1 from "tslib";
import * as au from "../aurelia";
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
export { MdInputmaskCustomAttribute };
