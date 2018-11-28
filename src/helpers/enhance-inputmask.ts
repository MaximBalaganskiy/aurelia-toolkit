import { viewEngineHooks } from "../aurelia";

@viewEngineHooks
export class EnhanceMask {
	beforeCompile(template: DocumentFragment) {
		let inputs = template.querySelectorAll("[inputmask]");
		for (let i of Array.from(inputs)) {
			i.setAttribute("md-inputmask", "");
		}
	}
}
