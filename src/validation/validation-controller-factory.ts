import * as au from "../aurelia";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";

export class ValidationControllerFactory extends au.ValidationControllerFactory {
	static get(container: au.Container) {
		return new ValidationControllerFactory(container);
	}

	constructor(container: au.Container) {
		super(container);
	}

	createForCurrentScope(validator?: au.Validator): au.ValidationController {
		let controller = super.createForCurrentScope(validator);
		controller.addRenderer(new MaterializeFormValidationRenderer());
		controller.validateTrigger = au.validateTrigger.changeOrBlur;
		return controller;
	}
}

// this tells DI to call static get method to resolve dependency
(ValidationControllerFactory as any)["protocol:aurelia:resolver"] = true;
