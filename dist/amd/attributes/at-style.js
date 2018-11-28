define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.AtStyleCustomAttribute = AtStyleCustomAttribute;
});
