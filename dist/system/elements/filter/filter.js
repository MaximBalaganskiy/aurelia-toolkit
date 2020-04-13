System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, Filter;
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
            Filter = /** @class */ (function () {
                function Filter(element, templatingEngine, i18n) {
                    var _this = this;
                    this.element = element;
                    this.templatingEngine = templatingEngine;
                    this.i18n = i18n;
                    this.availableFilterLinesPromise = new Promise(function (resolve) { return _this.availableFilterLinesResolve = resolve; });
                    this.lines = [];
                    this.filterId = Filter_1.id++;
                    this.i18nResource = this.i18n.tr("aurelia-toolkit:filter", { returnObjects: true });
                }
                Filter_1 = Filter;
                Filter.prototype.availableFilterLinesChanged = function () {
                    this.availableFilterLinesResolve();
                };
                Filter.prototype.attached = function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var lines;
                        var _this = this;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: 
                                // in IE11 availableFilterLines is assigned after attached, so we need to wait till this happens
                                return [4 /*yield*/, this.availableFilterLinesPromise];
                                case 1:
                                    // in IE11 availableFilterLines is assigned after attached, so we need to wait till this happens
                                    _a.sent();
                                    if (this.lines.length) {
                                        lines = tslib_1.__spread(this.lines);
                                        this.lines.splice(0);
                                        lines.forEach(function (x) {
                                            var fl = _this.availableFilterLines.find(function (l) { return l.name === x.name; });
                                            var newFilter = _this.add(fl);
                                            newFilter.operator = x.operator;
                                            newFilter.value = x.value;
                                        });
                                    }
                                    else {
                                        this.availableFilterLines.filter(function (x) { return x.element.hasAttribute("default"); }).forEach(function (x) { return _this.add(x); });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                Filter.prototype.add = function (i) {
                    var container = au.DOM.createElement("filter-line-container");
                    container.setAttribute("remove.delegate", "remove($event.detail.filterLine)");
                    if (this.lock) {
                        container.setAttribute("lock", "");
                    }
                    var filter = au.DOM.createElement(i.element.tagName.toLowerCase());
                    var content = i.element.getAttribute("content");
                    if (content) {
                        filter.innerHTML = content;
                    }
                    container.appendChild(filter);
                    var view = this.templatingEngine.enhance(container);
                    var filterVm = filter.au.controller.viewModel;
                    var containerVm = container.au.controller.viewModel;
                    containerVm.filterLine = filterVm;
                    i.hydrate(filterVm);
                    view.bind(this);
                    view.attached();
                    this.itemsCollection.appendChild(container);
                    // this.itemsViewSlot.add(view);
                    this.lines.push(filterVm);
                    au.fireEvent(this.element, "added");
                    return filterVm;
                };
                Filter.prototype.remove = function (i) {
                    this.lines.splice(this.lines.indexOf(i), 1);
                    var container = i.element.parentElement.parentElement;
                    this.itemsCollection.removeChild(container);
                    var containerView = container.au.controller.view;
                    // this.itemsViewSlot.remove(containerView, true, true);
                    containerView.detached();
                    containerView.unbind();
                    containerView.removeNodes();
                    au.fireEvent(this.element, "removed");
                };
                Filter.prototype.search = function () {
                    au.fireEvent(this.element, "search");
                };
                var Filter_1;
                Filter.id = 1;
                tslib_1.__decorate([
                    au.children(".filter-line"),
                    tslib_1.__metadata("design:type", Array)
                ], Filter.prototype, "availableFilterLines", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Array)
                ], Filter.prototype, "pageSizes", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay }),
                    tslib_1.__metadata("design:type", Number)
                ], Filter.prototype, "pageSize", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Array)
                ], Filter.prototype, "lines", void 0);
                tslib_1.__decorate([
                    au.ato.bindable.booleanMd,
                    tslib_1.__metadata("design:type", Boolean)
                ], Filter.prototype, "lock", void 0);
                Filter = Filter_1 = tslib_1.__decorate([
                    au.customElement("filter"),
                    tslib_1.__metadata("design:paramtypes", [Element, au.TemplatingEngine, au.I18N])
                ], Filter);
                return Filter;
            }());
            exports_1("Filter", Filter);
        }
    };
});
//# sourceMappingURL=filter.js.map