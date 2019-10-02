define(["require", "exports", "tslib", "../../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FilterLineContainer = /** @class */ (function () {
        function FilterLineContainer(element) {
            this.element = element;
        }
        FilterLineContainer.prototype.remove = function () {
            au.fireEvent(this.element, "remove", { filterLine: this.filterLine });
        };
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], FilterLineContainer.prototype, "lock", void 0);
        FilterLineContainer = tslib_1.__decorate([
            au.customElement("filter-line-container"),
            tslib_1.__metadata("design:paramtypes", [Element])
        ], FilterLineContainer);
        return FilterLineContainer;
    }());
    exports.FilterLineContainer = FilterLineContainer;
});
//# sourceMappingURL=filter-line-container.js.map