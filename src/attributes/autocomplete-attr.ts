import * as au from "../aurelia";

@au.customAttribute("autocomplete-attr")
@au.autoinject
export class AutocompleteAttrCustomAttribute {
	constructor(private element: Element) {
	}

	attributeManager: au.AttributeManager;
	value: string;

	attached() {
		switch (this.element.tagName) {
			case "MD-INPUT":
				this.attributeManager = new au.AttributeManager(this.element.querySelector("input"));
				break;
			case "INPUT":
				this.attributeManager = new au.AttributeManager(this.element);
				break;
		}
		this.attributeManager.addAttributes({ autocomplete: this.value });
	}

	detached() {
		this.attributeManager.removeAttributes(["autocomplete"]);
	}
}
