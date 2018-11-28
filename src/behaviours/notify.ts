import * as au from "../aurelia";

const originalUpdateSource = "originalUpdateSource";

export class NotifyBindingBehavior {
	bind(binding: au.Binding, scope: au.Scope, notified: (value: any) => void) {
		if (binding[originalUpdateSource]) {
			return;
		}
		binding[originalUpdateSource] = binding.updateSource;
		binding.updateSource = function(value: any) {
			this.originalUpdateSource(value);
			notified.call(binding.source.bindingContext, value);
		};
	}

	unbind(binding: au.Binding, scope: au.Scope) {
		binding.updateSource = binding[originalUpdateSource];
		delete binding[originalUpdateSource];
	}
}

declare module "aurelia-binding" {
	// tslint:disable-next-line:interface-name
	interface Binding {
		originalUpdateSource?(value: any): void;
	}
}
