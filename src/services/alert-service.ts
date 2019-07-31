import * as au from "../aurelia";
import { ProgressHandle } from "./progress-handle";
import { IDisposable } from "../interfaces/i-disposable";
import { AlertModal } from "../elements/alert-modal/alert-modal";
import { I18NResource } from "../interfaces/i18n-resource";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

@au.autoinject
export class AlertService {
	constructor(private toast: au.MdToastService, private eventAggregator: au.EventAggregator, private templatingEngine: au.TemplatingEngine,
		private i18n: au.I18N, private appInsights: ApplicationInsights) {
		this.logger = au.getLogger("AlertService");
		this.i18nResource = this.i18n.tr("aurelia-toolkit:alert", { returnObjects: true }) as any as I18NResource["alert"];
	}

	progressCounter: number = 0;
	defaultTimeout: number = 4000;
	logger: au.Logger;
	i18nResource: I18NResource["alert"];

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
		return this.showModal(message, icon, iconColour, this.i18nResource.ok, undefined);
	}

	confirm(message: string, icon: string = "help", iconColour: string = "blue"): Promise<boolean> {
		return this.showModal(message, icon, iconColour, this.i18nResource.yes, this.i18nResource.no);
	}

	error(message: string): Promise<boolean> {
		return this.alert(message, "error", "red");
	}

	criticalError(message: string, error: any): Promise<boolean> {
		this.appInsights.trackException(error);
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
			return await catchHandler(e);
		}
		else {
			throw e;
		}
	}
	finally {
		disposable.dispose();
	}
}
