import * as au from "../../aurelia";
import { ClientEditor } from "../settings-editor/client-editor";
import { ISelectOption } from "../settings-editor/i-select-option";

@au.autoinject
export class VariantViewer {
	constructor(private element: Element, private taskQueue: au.TaskQueue) { }

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;

	@au.bindable
	dataType: ClientEditor;

	@au.bindable
	selectWidth: string = "120px";

	@au.bindable
	options: ISelectOption[];

	edit() {
		au.fireEvent(this.element, "edit");
	}

	change(e: Event) {
		// stop event and refire as a task to let value binding update first
		e.stopPropagation();
		this.taskQueue.queueTask(() => au.fireEvent(this.element, "change"));
	}
}
