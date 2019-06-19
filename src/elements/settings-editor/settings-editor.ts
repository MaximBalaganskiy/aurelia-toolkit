import * as au from "../../aurelia";
import { SettingVM } from "./setting-vm";
import { ClientEditor } from "./client-editor";
import { ISettingInfo } from "./i-setting-info";
import { AlertService } from "../../services/alert-service";

@au.autoinject
export class SettingsEditor {
	constructor(private element: Element, private taskQueue: au.TaskQueue, private alertService: AlertService) { }

	@au.bindable
	info: ISettingInfo;

	@au.ato.bindable.booleanMd
	showHistory: boolean;

	settings: SettingVM[];
	ClientEditor = ClientEditor;

	bind() {
		this.settings = this.info.children
			.map(x => new SettingVM(x.key, x.value, !!x.children, x, this.taskQueue, this.alertService))
			.sort((a, b) => ((a.isObject as any) - (b.isObject as any)) * 2 + a.info.name.localeCompare(b.info.name));
	}

	edit(s: SettingVM) {
		s.isEdited = true;
		s.oldValue = s.value;
		this.taskQueue.queueTask(() => {
			let element = s.variantEditor.querySelector<HTMLInputElement | HTMLTextAreaElement>("input,textarea");
			if (element) {
				element.focus();
			}
		});
	}

	cancel(s: SettingVM) {
		s.isEdited = false;
		s.value = s.oldValue;
	}

	async save(s: SettingVM) {
		au.fireEvent(this.element, "save", s);
	}

	async history(s: SettingVM) {
		au.fireEvent(this.element, "history", s);
	}
}
