import * as au from "../../aurelia";
import { IFilterLine } from "./i-filter-line";
import { FilterLineContainer } from "./filter-line-container";
import { I18NResource } from "../../interfaces/i18n-resource";

@au.customElement("filter")
export class Filter {
	constructor(private element: Element, private templatingEngine: au.TemplatingEngine, private i18n: au.I18N) {
		this.filterId = Filter.id++;
		this.i18nResource = this.i18n.tr("aurelia-toolkit:filter", { returnObjects: true }) as any as I18NResource["filter"];
	}

	static id: number = 1;
	filterId: number;
	itemsCollection: HTMLDivElement;
	i18nResource: I18NResource["filter"];

	@au.children(".filter-line")
	availableFilterLines: IFilterLine[];
	availableFilterLinesResolve: () => void;
	availableFilterLinesPromise = new Promise(resolve => this.availableFilterLinesResolve = resolve);
	availableFilterLinesChanged() {
		this.availableFilterLinesResolve();
	}

	@au.bindable
	pageSizes: number[];

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	pageSize: number;

	@au.bindable
	lines: IFilterLine[] = [];

	@au.ato.bindable.booleanMd
	lock: boolean;

	async attached() {
		// in IE11 availableFilterLines is assigned after attached, so we need to wait till this happens
		await this.availableFilterLinesPromise;
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
	}

	add(i: IFilterLine): IFilterLine {
		let container = au.DOM.createElement("filter-line-container");
		container.setAttribute("remove.delegate", "remove($event.detail.filterLine)");
		if (this.lock) {
			container.setAttribute("lock", "");
		}
		let filter = au.DOM.createElement(i.element.tagName.toLowerCase());
		container.appendChild(filter);
		let view = this.templatingEngine.enhance(container);
		let filterVm = filter.au.controller.viewModel as IFilterLine;
		let containerVm = container.au.controller.viewModel as FilterLineContainer;
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

	remove(i: IFilterLine) {
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
}
