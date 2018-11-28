"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../aurelia");
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
