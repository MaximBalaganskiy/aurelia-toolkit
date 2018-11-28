import * as au from "../aurelia";
import { InputmaskCustomAttribute } from "aurelia-inputmask";

@au.autoinject
export class MdInputmaskCustomAttribute {
	constructor(private element: Element) { }

	label: HTMLLabelElement;
	inputmask: InputmaskCustomAttribute;

	attached() {
		this.label = this.element.querySelector("label");
		if (this.label) {
			this.inputmask = this.element.au["inputmask"].viewModel;
			this.element.addEventListener("inputmask-change", this.inputmaskChangeHandler);
		}
	}

	detached() {
		if (this.label) {
			this.element.removeEventListener("inputmask-change", this.inputmaskChangeHandler);
		}
	}

	inputmaskChangeHandler = () => {
		this.label.classList.add(this.inputmask.value ? "active" : "inactive");
	}
}
