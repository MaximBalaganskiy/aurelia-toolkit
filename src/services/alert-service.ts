import * as au from "../aurelia";
import { ProgressHandle } from "./progress-handle";
import { IDisposable } from "../interfaces/i-disposable";
import { AlertModal } from "../elements/alert-modal/alert-modal";

@au.autoinject
export class AlertService {
	constructor(private toast: au.MdToastService, private eventAggregator: au.EventAggregator, private templatingEngine: au.TemplatingEngine,
	private viewCompiler: au.ViewCompiler) {
		this.logger = au.getLogger("AlertService");
	}

	progressCounter: number = 0;
	defaultTimeout: number = 4000;
	logger: au.Logger;

	private showModal(message: string, icon: string, iconColour: string, button1Text: string, button2Text: string): Promise<boolean> {
		let html = document.createElement("alert-modal");
		let view = this.templatingEngine.enhance(html);
		view.bind({});
		view.attached();
		document.querySelector("[aurelia-app]").appendChild(html);
		let alertModal = html.au["alert-modal"].viewModel;
		return new Promise<boolean>(resolve => alertModal.open({
			icon,
			iconColour,
			message,
			button1Text,
			button2Text,
			button1Click: () => resolve(true),
			button2Click: () => resolve(false)
		})).then(x => {
			html.remove();
			view.unbind();
			view.detached();
			return x;
		});
	}

	alert(message: string, icon: string = "info", iconColour: string = "blue"): Promise<boolean> {
		return this.showModal(message, icon, iconColour, "Ok", undefined);
	}

	confirm(message: string, icon: string = "help", iconColour: string = "blue"): Promise<boolean> {
		return this.showModal(message, icon, iconColour, "Yes", "No");
	}

	error(message: string): Promise<boolean> {
		return this.alert(message, "error", "red");
	}

	confirmToast(message: string, timeout?: number) {
		this.toast.show(message as any, timeout || this.defaultTimeout);
	}

	errorToast(message: string, timeout?: number) {
		this.toast.show(message as any, timeout || this.defaultTimeout, "red");
	}

	warningToast(message: string, timeout?: number) {
		this.toast.show(message as any, timeout || this.defaultTimeout, "orange darken-2");
	}

	showProgress() {
		this.eventAggregator.publish("progress:on");
	}

	hideProgress() {
		this.eventAggregator.publish("progress:off");
	}

	async usingProgress<T>(action: () => Promise<T>, catchHandler?: (e: any) => Promise<any>): Promise<T> {
		return using(this.progress(), action, catchHandler);
	}

	progress(): ProgressHandle {
		return new ProgressHandle(this);
	}
}

export async function using<T>(disposable: IDisposable, action: () => Promise<T>, catchHandler: (e: any) => Promise<any>): Promise<T> {
	try {
		return await action();
	}
	catch (e) {
		if (catchHandler) {
			await catchHandler(e);
			return Promise.resolve(undefined);
		}
		else {
			throw e;
		}
	}
	finally {
		disposable.dispose();
	}
}
