import * as au from "../aurelia";

@au.autoinject
export class TwStyleCustomAttribute {
	constructor(private element: Element) { }

	style: any;

	value: string;
	valueChanged() {
		(this.element as HTMLElement).style.cssText = this.value;
	}

	attached() {
		this.valueChanged();
	}
}
