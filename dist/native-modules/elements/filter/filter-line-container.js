import { __decorate, __metadata } from "tslib";
import * as au from "../../aurelia";
var FilterLineContainer = /** @class */ (function () {
    function FilterLineContainer(element) {
        this.element = element;
    }
    FilterLineContainer.prototype.remove = function () {
        au.fireEvent(this.element, "remove", { filterLine: this.filterLine });
    };
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], FilterLineContainer.prototype, "lock", void 0);
    FilterLineContainer = __decorate([
        au.customElement("filter-line-container"),
        __metadata("design:paramtypes", [Element])
    ], FilterLineContainer);
    return FilterLineContainer;
}());
export { FilterLineContainer };
//# sourceMappingURL=filter-line-container.js.map