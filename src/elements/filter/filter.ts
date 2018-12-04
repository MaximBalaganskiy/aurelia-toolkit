import * as au from "../../aurelia";
import { IFilterLine } from "./i-filter-line";
import { FilterLineContainer } from "./filter-line-container";

@au.customElement("filter")
export class Filter {
	constructor(private element: Element, private templatingEngine: au.TemplatingEngine) {
		this.filterId = Filter.id++;
	}

	static id: number = 1;
	filterId: number;
	itemsCollection: HTMLDivElement;

	@au.children("text-filter-line,lookup-filter-line,date-filter-line,number-filter-line,select-filter-line,bool-filter-line")
	availableFilterLines: IFilterLine[];
	availableFilterLinesChanged() {
		if (!this.lines.length) {
			this.availableFilterLines.filter(x => x.element.hasAttribute("default")).forEach(x => this.add(x));
		}
	}

	@au.bindable
	pageSizes: number[];

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.twoWay })
	pageSize: number;

	@au.bindable
	lines: IFilterLine[] = [];

	@au.ato.bindable.booleanMd
	lock: boolean;

	attached() {
		// this.itemsViewSlot = new au.ViewSlot(this.itemsCollection, true);
		this.availableFilterLinesChanged();
	}

	add(i: IFilterLine) {
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
