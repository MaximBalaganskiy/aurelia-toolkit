define(["require", "exports", "tslib", "../../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AtSelect = /** @class */ (function () {
        function AtSelect(element) {
            var _this = this;
            this.element = element;
            this.options = [];
            this.validateResults = [];
            this.mdUnrenderValidateResults = function (results, renderer) {
                _this.validateResults = _this.validateResults.filter(function (x) { return !results.find(function (y) { return y.id === x.id; }); });
                _this.validationClass = undefined;
            };
            this.mdRenderValidateResults = function (results, renderer) {
                var _a;
                (_a = _this.validateResults).push.apply(_a, tslib_1.__spread(results.filter(function (x) { return !x.valid; })));
                _this.validationClass = results.find(function (x) { return !x.valid; }) ? "invalid" : "valid";
            };
        }
        AtSelect.prototype.select = function (o) {
            if (o || this.allowEmpty) {
                this.value = o;
            }
        };
        AtSelect.prototype.attached = function () {
            this.element.mdRenderValidateResults = this.mdRenderValidateResults;
            this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
        };
        AtSelect.prototype.detached = function () {
            this.element.mdRenderValidateResults = null;
            this.element.mdUnrenderValidateResults = null;
        };
        tslib_1.__decorate([
            au.bindable,
            tslib_1.__metadata("design:type", Array)
        ], AtSelect.prototype, "options", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", Object)
        ], AtSelect.prototype, "value", void 0);
        tslib_1.__decorate([
            au.ato.bindable.stringMd,
            tslib_1.__metadata("design:type", String)
        ], AtSelect.prototype, "label", void 0);
        tslib_1.__decorate([
            au.ato.bindable.stringMd,
            tslib_1.__metadata("design:type", String)
        ], AtSelect.prototype, "hint", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], AtSelect.prototype, "readonly", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], AtSelect.prototype, "allowEmpty", void 0);
        AtSelect = tslib_1.__decorate([
            au.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], AtSelect);
        return AtSelect;
    }());
    exports.AtSelect = AtSelect;
});
//# sourceMappingURL=at-select.js.map