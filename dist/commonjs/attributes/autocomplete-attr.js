"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../aurelia");
let AutocompleteAttrCustomAttribute = class AutocompleteAttrCustomAttribute {
    constructor(element) {
        this.element = element;
    }
    attached() {
        switch (this.element.tagName) {
            case "MD-INPUT":
                this.attributeManager = new au.AttributeManager(this.element.querySelector("input"));
                break;
            case "INPUT":
                this.attributeManager = new au.AttributeManager(this.element);
                break;
        }
        this.attributeManager.addAttributes({ autocomplete: this.value });
    }
    detached() {
        this.attributeManager.removeAttributes(["autocomplete"]);
    }
};
AutocompleteAttrCustomAttribute = tslib_1.__decorate([
    au.customAttribute("autocomplete-attr"),
    au.autoinject
], AutocompleteAttrCustomAttribute);
exports.AutocompleteAttrCustomAttribute = AutocompleteAttrCustomAttribute;