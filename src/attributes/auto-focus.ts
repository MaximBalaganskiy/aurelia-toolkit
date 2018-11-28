import * as au from "../aurelia";

@au.autoinject
export class AutoFocusCustomAttribute {
	constructor(private element: Element, private taskQueue: au.TaskQueue) {
		this.logger = au.getLogger("AutoFocusCustomAttribute");
	}

	logger: au.Logger;

	attached() {
		this.taskQueue.queueTask(() => {
			const input = this.element.querySelector("input");
			if (input) {
				input.focus();
				const label = input.nextElementSibling as HTMLLabelElement;
				if (label.nodeName === "LABEL") {
					this.taskQueue.queueTask(() => { label.classList.add("active"); });
				}
			}
			else {
				this.logger.warn("No input element found for auto-focus");
			}
		});
	}
}
