import * as au from "../aurelia";
import { InputmaskCustomAttribute } from "aurelia-inputmask";

@au.autoinject
export class MdInputmaskCustomAttribute {
	constructor(private element: Element) { }

	label: HTMLLabelElement;

	attached() {
		this.label = this.element.querySelector("label");
		if (this.label) {
			this.element.addEventListener("inputmask-change", this.inputmaskChangeHandler);
			this.inputmaskChangeHandler();
		}
	}

	detached() {
		if (this.label) {
			this.element.removeEventListener("inputmask-change", this.inputmaskChangeHandler);
		}
	}

	inputmaskChangeHandler = () => {
		let inputmask = this.element.au["inputmask"].viewModel;
		if (inputmask) {
			this.label.classList.add(inputmask.value ? "active" : "inactive");
		}
	}
}
