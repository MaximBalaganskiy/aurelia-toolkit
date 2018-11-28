import * as au from "../../aurelia";
import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";

@au.autoinject
export class AtSelect {
	constructor(private element: Element) { }

	@au.bindable
	options: any[] = [];

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;

	@au.ato.bindable.stringMd
	label: string;

	@au.ato.bindable.stringMd
	hint: string;

	@au.ato.bindable.booleanMd
	readonly: boolean;

	@au.ato.bindable.booleanMd
	allowEmpty: boolean;

	input: HTMLDivElement;
	validationContainer: HTMLElement;

	select(o) {
		if (o || this.allowEmpty) {
			this.value = o;
		}
	}

	attached() {
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
	}

	detached() {
		MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input as any);
		this.element.mdRenderValidateResults = null;
		this.element.mdUnrenderValidateResults = null;
	}

	mdUnrenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.validationContainer, result);
			}
		}
		renderer.removeValidationClasses(this.input);
	}

	mdRenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.addMessage(this.validationContainer, result);
			}
		}
		renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
	}
}
