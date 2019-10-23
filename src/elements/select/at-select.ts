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
	validateResults: ValidateResult[] = [];
	validationClass: string;

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
		this.element.mdRenderValidateResults = null;
		this.element.mdUnrenderValidateResults = null;
	}

	mdUnrenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		this.validateResults = this.validateResults.filter(x => !results.find(y => y.id === x.id));
		this.validationClass = undefined;
	}

	mdRenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		this.validateResults.push(...results.filter(x => !x.valid));
		this.validationClass = results.find(x => !x.valid) ? "invalid" : "valid";
	}
}
