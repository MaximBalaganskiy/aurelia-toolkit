import { viewEngineHooks } from "../aurelia";

@viewEngineHooks
export class EnhanceMask {
	beforeCompile(template: DocumentFragment) {
		let inputs = template.querySelectorAll("[inputmask]");
		inputs.forEach(x => x.setAttribute("md-inputmask", ""));
	}
}
