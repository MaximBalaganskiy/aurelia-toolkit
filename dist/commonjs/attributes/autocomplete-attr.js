"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var AutocompleteAttrCustomAttribute = /** @class */ (function () {
    function AutocompleteAttrCustomAttribute(element) {
        this.element = element;
    }
    AutocompleteAttrCustomAttribute.prototype.attached = function () {
        switch (this.element.tagName) {
            case "MD-INPUT":
                this.attributeManager = new au.AttributeManager(this.element.querySelector("input"));
                break;
            case "INPUT":
                this.attributeManager = new au.AttributeManager(this.element);
                break;
        }
        this.attributeManager.addAttributes({ autocomplete: this.value });
    };
    AutocompleteAttrCustomAttribute.prototype.detached = function () {
        this.attributeManager.removeAttributes(["autocomplete"]);
    };
    AutocompleteAttrCustomAttribute = tslib_1.__decorate([
        au.customAttribute("autocomplete-attr"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], AutocompleteAttrCustomAttribute);
    return AutocompleteAttrCustomAttribute;
}());
exports.AutocompleteAttrCustomAttribute = AutocompleteAttrCustomAttribute;
//# sourceMappingURL=autocomplete-attr.js.map