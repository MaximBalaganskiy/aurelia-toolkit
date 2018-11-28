import * as au from "../../aurelia";
import { ClientEditor } from "../settings-editor/client-editor";

@au.autoinject
export class VariantEditor {
	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;

	@au.bindable
	dataType: ClientEditor;
}
