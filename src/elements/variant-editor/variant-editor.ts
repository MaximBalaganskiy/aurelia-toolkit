import * as au from "../../aurelia";
import { ClientEditor } from "../settings-editor/client-editor";

@au.autoinject
export class VariantEditor {
	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	value: any;
	valueChanged() {
		if (this.dataType === ClientEditor.Decimal) {
			this.valueDecimal = (this.value as number).toString();
		}
	}

	bind(){
		this.valueChanged();
	}

	@au.bindable({ defaultBindingMode: au.bindingMode.twoWay })
	valueDecimal: string;

	@au.bindable
	dataType: ClientEditor;

	updateDecimalValue(){
		this.value = parseFloat(this.valueDecimal);
	}
}
