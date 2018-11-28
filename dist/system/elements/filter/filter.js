System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, Filter_1, au, Filter;
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
            "use strict";
            Filter = Filter_1 = class Filter {
                constructor(element, templatingEngine) {
                    this.element = element;
                    this.templatingEngine = templatingEngine;
                    this.lines = [];
                    this.filterId = Filter_1.id++;
                }
                availableFilterLinesChanged() {
                    if (!this.lines.length) {
                        this.availableFilterLines.filter(x => x.element.hasAttribute("default")).forEach(x => this.add(x));
                    }
                }
                attached() {
                    // this.itemsViewSlot = new au.ViewSlot(this.itemsCollection, true);
                    this.availableFilterLinesChanged();
                }
                add(i) {
                    let container = au.DOM.createElement("filter-line-container");
                    container.setAttribute("remove.delegate", "remove($event.detail.filterLine)");
                    let filter = au.DOM.createElement(i.element.tagName.toLowerCase());
                    container.appendChild(filter);
                    let view = this.templatingEngine.enhance(container);
                    let filterVm = filter.au.controller.viewModel;
                    let containerVm = container.au.controller.viewModel;
                    containerVm.filterLine = filterVm;
                    i.hydrate(filterVm);
                    view.bind(this);
                    view.attached();
                    this.itemsCollection.appendChild(container);
                    // this.itemsViewSlot.add(view);
                    this.lines.push(filterVm);
                    au.fireEvent(this.element, "added");
                }
                remove(i) {
                    this.lines.splice(this.lines.indexOf(i), 1);
                    let container = i.element.parentElement.parentElement;
                    this.itemsCollection.removeChild(container);
                    let containerView = container.au.controller.view;
                    // this.itemsViewSlot.remove(containerView, true, true);
                    containerView.detached();
                    containerView.unbind();
                    containerView.removeNodes();
                    au.fireEvent(this.element, "removed");
                }
                search() {
                    au.fireEvent(this.element, "search");
                }
            };
            Filter.id = 1;
            tslib_1.__decorate([
                au.children("text-filter-line,lookup-filter-line,date-filter-line,number-filter-line,select-filter-line,bool-filter-line")
            ], Filter.prototype, "availableFilterLines", void 0);
            tslib_1.__decorate([
                au.bindable
            ], Filter.prototype, "pageSizes", void 0);
            tslib_1.__decorate([
                au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
            ], Filter.prototype, "pageSize", void 0);
            tslib_1.__decorate([
                au.bindable
            ], Filter.prototype, "lines", void 0);
            Filter = Filter_1 = tslib_1.__decorate([
                au.customElement("filter")
            ], Filter);
            exports_1("Filter", Filter);
        }
    };
});
