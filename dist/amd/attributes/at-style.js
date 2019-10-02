define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=at-style.js.map