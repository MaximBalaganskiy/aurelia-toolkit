import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
var AtStyleCustomAttribute = /** @class */ (function () {
    function AtStyleCustomAttribute(element) {
        this.element = element;
    }
    AtStyleCustomAttribute.prototype.valueChanged = function () {
        this.element.style.cssText = this.value;
    };
    AtStyleCustomAttribute.prototype.attached = function () {
        this.valueChanged();
    };
    AtStyleCustomAttribute = __decorate([
        au.autoinject,
        __metadata("design:paramtypes", [Element])
    ], AtStyleCustomAttribute);
    return AtStyleCustomAttribute;
}());
export { AtStyleCustomAttribute };
//# sourceMappingURL=at-style.js.map