import * as au from "../../aurelia";

@au.customElement("tw-progress")
@au.autoinject
export class TwProgress {
	constructor(private element: Element, private eventAggregator: au.EventAggregator) { }

	@au.bindable
	size: string = "small";

	@au.bindable
	opacity: number = 0.7;

	global: boolean;

	progressCounter: number = 0;
	onSubscription: au.Subscription;
	offSubscription: au.Subscription;

	attached() {
		if (this.element.parentElement) {
			this.element.parentElement.style.position = "relative";
		}
		this.global = this.element.hasAttribute("global");
		if (this.global) {
			this.onSubscription = this.eventAggregator.subscribe("progress:on", () => this.progressOn());
			this.offSubscription = this.eventAggregator.subscribe("progress:off", () => this.progressOff());
		}
	}

	detached() {
		if (this.onSubscription) {
			this.onSubscription.dispose();
		}
		if (this.offSubscription) {
			this.offSubscription.dispose();
		}
	}

	progressOn() {
		this.progressCounter++;
	}

	progressOff() {
		if (this.progressCounter > 0) {
			this.progressCounter--;
		}
	}
}
