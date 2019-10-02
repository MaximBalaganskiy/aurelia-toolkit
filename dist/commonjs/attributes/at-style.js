"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
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
    AtStyleCustomAttribute = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], AtStyleCustomAttribute);
    return AtStyleCustomAttribute;
}());
exports.AtStyleCustomAttribute = AtStyleCustomAttribute;
//# sourceMappingURL=at-style.js.map