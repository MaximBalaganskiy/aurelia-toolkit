import * as au from "../../aurelia";

@au.autoinject
export class NextBackButtons {
	constructor(private element: Element) { }

	@au.bindable
	readonly: boolean;

	@au.bindable
	backCaption: string = "back";

	@au.bindable
	backIcon: string = "arrow_back";

	@au.bindable
	saveCaption: string = "Save";

	@au.bindable
	saveIcon: string = "save";

	@au.bindable
	nextCaption: string = "next";

	@au.bindable
	nextIcon: string = "arrow_forward";

	back() {
		au.fireEvent(this.element, "back");
	}

	save() {
		au.fireEvent(this.element, "save");
	}

	next() {
		au.fireEvent(this.element, "next");
	}
}
