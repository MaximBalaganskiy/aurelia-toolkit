"use strict";
var Filter_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
"use strict";
const au = require("../../aurelia");
let Filter = Filter_1 = class Filter {
    constructor(element, templatingEngine, i18n) {
        this.element = element;
        this.templatingEngine = templatingEngine;
        this.i18n = i18n;
        this.availableFilterLinesPromise = new Promise(resolve => this.availableFilterLinesResolve = resolve);
        this.lines = [];
        this.filterId = Filter_1.id++;
        this.i18nResource = this.i18n.tr("aurelia-toolkit:filter", { returnObjects: true });
    }
    availableFilterLinesChanged() {
        this.availableFilterLinesResolve();
    }
    attached() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // in IE11 availableFilterLines is assigned after attached, so we need to wait till this happens
            yield this.availableFilterLinesPromise;
            if (this.lines.length) {
                // remove prepopulated filters and add back via adding filter elements
                let lines = [...this.lines];
                this.lines.splice(0);
                lines.forEach(x => {
                    let fl = this.availableFilterLines.find(l => l.name === x.name);
                    let newFilter = this.add(fl);
                    newFilter.operator = x.operator;
                    newFilter.value = x.value;
                });
            }
            else {
                this.availableFilterLines.filter(x => x.element.hasAttribute("default")).forEach(x => this.add(x));
            }
        });
    }
    add(i) {
        let container = au.DOM.createElement("filter-line-container");
        container.setAttribute("remove.delegate", "remove($event.detail.filterLine)");
        if (this.lock) {
            container.setAttribute("lock", "");
        }
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
        return filterVm;
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
tslib_1.__decorate([
    au.ato.bindable.booleanMd
], Filter.prototype, "lock", void 0);
Filter = Filter_1 = tslib_1.__decorate([
    au.customElement("filter")
], Filter);
exports.Filter = Filter;
