import * as au from "../../aurelia";
import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer, MdDropdown } from "aurelia-materialize-bridge";

@au.autoinject
export class AtSelect {
	constructor(private element: Element) { }

	@au.bindable
	options: unknown[] = [];
	optionsChanged() {
		this.valueChanged();
	}

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: unknown;
	valueChanged() {
		this.selectedOption = this.options?.find(x => this.getValue(x) === this.value);
		if (!this.selectedOption) {
			this.value = undefined;
		}
	}

	selectedOption: unknown;

	@au.ato.bindable.stringMd
	label: string;

	@au.ato.bindable.stringMd
	hint: string;

	@au.ato.bindable.booleanMd
	readonly: boolean;

	@au.ato.bindable.booleanMd
	allowEmpty: boolean;

	@au.bindable
	displayFieldName: ((option: unknown) => string) | string;

	@au.bindable
	valueFieldName: ((option: unknown) => unknown) | string;

	input: HTMLDivElement;
	validateResults: ValidateResult[] = [];
	validationClass: string;
	dropdownVM: MdDropdown;

	select(o: unknown) {
		if (o || this.allowEmpty) {
			this.value = this.getValue(o);
		}
		this.dropdownVM.close();
	}

	bind() {
		this.valueChanged();
	}

	attached() {
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
	}

	detached() {
		this.validationClass = undefined;
		this.validateResults = [];
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

	getValue(option: unknown): unknown {
		if (this.valueFieldName) {
			if (this.valueFieldName instanceof Function) {
				return this.valueFieldName(option);
			}
			else {
				return option[this.valueFieldName];
			}
		} else {
			return option;
		}
	}

	getDisplayValue(option: unknown): string {
		if (option === null || option === undefined) {
			return null;
		}
		if (!this.displayFieldName) {
			return option.toString();
		}
		else if (this.displayFieldName instanceof Function) {
			return this.displayFieldName(option);
		}
		else {
			return option[this.displayFieldName];
		}
	}

}
