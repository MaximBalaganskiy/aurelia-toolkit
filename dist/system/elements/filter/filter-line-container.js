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
            FilterLineContainer = class FilterLineContainer {
                constructor(element) {
                    this.element = element;
                }
                remove() {
                    au.fireEvent(this.element, "remove", { filterLine: this.filterLine });
                }
            };
            tslib_1.__decorate([
                au.children("text-filter-line,lookup-filter-line,date-filter-line,number-filter-line,select-filter-line,bool-filter-line")
            ], FilterLineContainer.prototype, "availableFilterLines", void 0);
            FilterLineContainer = tslib_1.__decorate([
                au.customElement("filter-line-container")
            ], FilterLineContainer);
            exports_1("FilterLineContainer", FilterLineContainer);
        }
    };
});
