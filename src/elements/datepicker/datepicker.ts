﻿import * as au from "../../aurelia";
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

	labelElement: HTMLLabelElement;

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: Date;
	valueChanged() {
		au.fireEvent(this.element, "change");
		au.fireEvent(this.element, "blur");
		this.taskQueue.queueTask(() => au.updateLabel(this.input, this.labelElement));
	}

	icon: HTMLElement;
	pickerInput: HTMLInputElement;
	mdDatepicker: MdDatePicker;
	validationContainer: HTMLElement;
	input: HTMLInputElement;

	bind() {
		//
	}

	attached() {
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.labelElement.classList.add(this.value ? "active" : "inactive");
	}

	detached() {
		MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
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