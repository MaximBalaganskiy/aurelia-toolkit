import * as au from "../../aurelia";
import { ILookupGetOptionsCriteria } from "./i-lookup-get-options-criteria";
import { ValidateResult } from "aurelia-validation";
import { TooManyRecordsException } from "../../exceptions/too-many-records";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge/dist/aurelia-materialize-bridge";

@au.autoinject
export class Lookup {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.logger = au.getLogger("Lookup");
	}

	dropdown: HTMLElement;
	dropdownUl: HTMLElement;
	input: HTMLInputElement;
	labelElement: HTMLLabelElement;
	validationContainer: HTMLElement;
	logger: au.Logger;
	view: au.View;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	filter: string;
	searchId: number = 1;
	suppressFilterChanged: boolean;
	async filterChanged() {
		if (!this.getOptions) {
			return;
		}
		if (this.suppressFilterChanged) {
			this.logger.debug("unsuppressed filter changed");
			this.suppressFilterChanged = false;
			return;
		}
		this.logger.debug("filterChanged");
		this.setValue(null);
		const id = ++this.searchId;
		this.searchCount++;
		this.errorMessage = undefined;
		try {
			const options = await this.getOptions({ filter: this.filter });
			if (id === this.searchId) {
				this.options = options;
				this.fixDropdownSizeIfTooBig();
			}
		}
		catch (e) {
			if (e instanceof TooManyRecordsException) {
				if (id === this.searchId) {
					this.errorMessage = e.message;
					this.options = undefined;
				}
			}
			else {
				this.errorMessage = "Error occurred";
				this.options = undefined;
			}
		}
		finally {
			this.searchCount--;
		}
	}
	setFilter(value: string) {
		this.logger.debug("suppressed filter changed");
		this.suppressFilterChanged = true;
		this.filter = value;
	}

	searchCount: number = 0;
	@au.computedFrom("searchCount")
	get searching(): boolean {
		return this.searchCount > 0;
	}

	@au.bindable
	label: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;
	suppressValueChanged: boolean;
	async valueChanged(newValue: any, oldValue: any) {
		if (this.suppressValueChanged) {
			this.suppressValueChanged = false;
			return;
		}
		this.logger.debug("valueChanged", newValue);
		await this.updateFilterBasedOnValue();
	}
	setValue(value: string) {
		this.logger.debug("suppressed value changed");
		this.suppressValueChanged = true;
		this.value = value;
	}

	@au.bindable
	getOptions: (criteria: ILookupGetOptionsCriteria<any>) => Promise<any[]>;

	@au.bindable
	displayFieldName: ((options: any) => string) | string;

	@au.bindable
	valueFieldName: ((options: any) => any) | string;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	readonly: boolean;

	@au.bindable
	placeholder: string = "Start Typing To Search";

	options: any[];
	errorMessage: string;

	@au.bindable
	debounce: number = 850;

	@au.bindable
	preloadOptions: boolean;

	isOpen: boolean;

	async updateFilterBasedOnValue() {
		this.logger.debug("updateFilterBasedOnValue", this.value);
		if (this.value) {
			this.options = await this.getOptions({ value: this.value });
		}
		else {
			this.options = [];
		}
		if (this.options && this.options.length) {
			this.setFilter(this.getDisplayValue(this.options[0]));
		} else {
			this.setFilter(undefined);
		}
	}

	fixDropdownSizeIfTooBig() {
		this.taskQueue.queueTask(() => {
			if (!this.isOpen) {
				return;
			}
			const rect = this.dropdown.getBoundingClientRect();
			let availableSpace = window.innerHeight - rect.top + document.body.scrollTop - 5;
			if (this.dropdownUl.offsetHeight > availableSpace) {
				this.dropdown.style.height = `${availableSpace}px`;
			}
			else {
				this.dropdown.style.height = "auto";
			}
		});
	}

	open() {
		if (!this.readonly) {
			this.logger.debug("open");
			this.isOpen = true;
			this.fixDropdownSizeIfTooBig();
		}
	}

	close() {
		this.logger.debug("close");
		this.isOpen = false;
	}

	created(owningView: au.View, view: au.View) {
		this.view = view;
	}

	async bind(bindingContext: object, overrideContext: object) {
		await this.updateFilterBasedOnValue();
		// restore initial value because it is set by updateFilterBasedOnValue
		this.suppressFilterChanged = false;
	}

	async attached() {
		this.logger.debug("attached");
		// we need to use queueTask because open sometimes happens before browser bubbles the click further thus closing just opened dropdown
		this.input.onselect = () => this.taskQueue.queueTask(() => this.open());
		this.input.onclick = () => this.taskQueue.queueTask(() => this.open());
		this.input.onblur = () => this.close();
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		if (this.preloadOptions) {
			await this.loadOptions();
		}
		this.labelElement.classList.add(this.filter || this.placeholder ? "active" : "inactive");
	}

	async loadOptions() {
		this.options = await this.getOptions({ value: this.value, filter: this.filter });
	}

	detached() {
		this.input.onselect = null;
		this.input.onfocus = null;
		this.input.onblur = null;
		MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
		this.element.mdRenderValidateResults = null;
		this.element.mdUnrenderValidateResults = null;
	}

	select(option: any) {
		if (this.valueFieldName) {
			if (this.valueFieldName instanceof Function) {
				this.setValue(this.valueFieldName(option));
			}
			else {
				this.setValue(option[this.valueFieldName]);
			}
		} else {
			this.value = option;
		}
		this.setFilter(this.getDisplayValue(option));
		this.options = [option];
		this.close();
		au.fireEvent(this.element, "selected", { value: this.value });
	}

	getDisplayValue(option: any): any {
		if (!this.displayFieldName) {
			return option;
		}
		else if (this.displayFieldName instanceof Function) {
			return this.displayFieldName(option);
		}
		else {
			return option[this.displayFieldName];
		}
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
