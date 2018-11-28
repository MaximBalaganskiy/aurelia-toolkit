import * as au from "../../aurelia";

@au.autoinject
export class Message {
	@au.bindable
	icon: string;

	@au.bindable
	colour: string;

	@au.ato.bindable.booleanMd
	card: boolean = true;
}
