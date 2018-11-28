import * as tslib_1 from "tslib";
import * as au from "../aurelia";
let AtStyleCustomAttribute = class AtStyleCustomAttribute {
    constructor(element) {
        this.element = element;
    }
    valueChanged() {
        this.element.style.cssText = this.value;
    }
    attached() {
        this.valueChanged();
    }
};
AtStyleCustomAttribute = tslib_1.__decorate([
    au.autoinject
], AtStyleCustomAttribute);
export { AtStyleCustomAttribute };
