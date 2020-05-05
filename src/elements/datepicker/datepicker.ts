import * as au from "../../aurelia";
import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer, MdDatePicker } from "aurelia-materialize-bridge";

@au.autoinject
export class Datepicker {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.controlId = `datepicker-${Datepicker.id++}`;
	}

	static id = 0;

	controlId: string;

	@au.bindable
	readonly: boolean;

	@au.bindable
	label: string;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	yearRange: number | number[];

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	minDate: Date;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	maxDate: Date;

	@au.bindable({ defaultBindingMode: au.bindingMode.oneTime })
	disableDayFn: (day: Date) => boolean;

	@au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime })
	disableWeekends: boolean;

	@au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime })
	firstDay: number;

	labelElement: HTMLLabelElement;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: Date;
	valueChanged() {
		au.fireEvent(this.element, "change");
		au.fireEvent(this.element, "blur");
		this.taskQueue.queueTask(() => {
			if (this.minDate && this.value < this.minDate) {
				this.value = this.minDate;
			}
			if (this.maxDate && this.value > this.maxDate) {
				this.value = this.maxDate;
			}
			if (this.disableDayFn && this.disableDayFn(this.value)) {
				this.value = undefined;
			}
			au.updateLabel(this.input, this.labelElement);
		});
	}

	icon: HTMLElement;
	pickerInput: HTMLInputElement;
	mdDatepicker: MdDatePicker;
	input: HTMLInputElement;
	validateResults: ValidateResult[] = [];
	validationClass: string;

	bind() {
		//
	}

	attached() {
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.labelElement.classList.add(this.value ? "active" : "inactive");
	}

	detached() {
		this.element.mdRenderValidateResults = null;
		this.element.mdUnrenderValidateResults = null;
	}

	open() {
		if (!this.readonly) {
			this.mdDatepicker.instance.setDate(this.value);
			this.mdDatepicker.open();
		}
	}

	mdUnrenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		this.validateResults = this.validateResults.filter(x => !results.find(y => y.id === x.id));
		this.validationClass = undefined;
	}

	mdRenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		this.validateResults.push(...results.filter(x => !x.valid));
		this.validationClass = results.find(x => !x.valid) ? "invalid" : "valid";
	}

	blur() {
		au.fireEvent(this.element, "blur");
	}

	focus() {
		this.input.focus();
		au.fireEvent(this.element, "focus");
	}

	suppressMaterializeChange(e: Event) {
		e.stopPropagation();
	}
}
