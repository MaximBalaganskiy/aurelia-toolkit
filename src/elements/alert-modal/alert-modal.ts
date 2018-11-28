import { MdModal } from "aurelia-materialize-bridge";

export interface IAlertModalOptions {
	icon: string;
	iconColour: string;
	message: string;
	button1Text: string;
	button2Text: string;

	button1Click: () => void;
	button2Click: () => void;
}

export class AlertModal {
	options: IAlertModalOptions;
	modal: HTMLDivElement;
	mdModal: MdModal;

	open(options: IAlertModalOptions) {
		this.options = options;
		this.mdModal.open();
	}
}
