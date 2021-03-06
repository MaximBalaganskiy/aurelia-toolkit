import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
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
    AutocompleteAttrCustomAttribute = __decorate([
        au.customAttribute("autocomplete-attr"),
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], AutocompleteAttrCustomAttribute);
    return AutocompleteAttrCustomAttribute;
}());
export { AutocompleteAttrCustomAttribute };
//# sourceMappingURL=autocomplete-attr.js.map