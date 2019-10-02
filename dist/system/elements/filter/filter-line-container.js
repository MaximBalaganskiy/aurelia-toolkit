System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, FilterLineContainer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            FilterLineContainer = /** @class */ (function () {
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
            exports_1("FilterLineContainer", FilterLineContainer);
        }
    };
});
//# sourceMappingURL=filter-line-container.js.map