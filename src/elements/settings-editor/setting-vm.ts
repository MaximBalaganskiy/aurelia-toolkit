import * as au from "../../aurelia";
import { ISettingInfo } from "./i-setting-info";
import { AlertService } from "../../services/alert-service";

export class SettingVM {
	constructor(public key: string, public value: any, public isObject: boolean, public info: ISettingInfo, private taskQueue: au.TaskQueue,
		private alertService: AlertService) { }

	isExpanded?: boolean;
	isEdited?: boolean;
	oldValue?: any;
	isSaving?: boolean;
	body?: HTMLDivElement;
	editor?: HTMLUnknownElement;
	variantEditor?: HTMLUnknownElement;

	setBodyHeightToAuto = () => {
		this.body.style.height = "auto";
		this.body.removeEventListener("transitionend", this.setBodyHeightToAuto);
	}

	toggleExpanded() {
		if (this.isExpanded) {
			// the following line is needed because height has been restored to auto"
			this.body.style.height = this.editor.clientHeight + "px";
			this.taskQueue.queueTask(() => { this.body.style.height = "0"; });
		}
		else {
			// after transition set body height to auto so that expandable children are visible
			this.body.addEventListener("transitionend", this.setBodyHeightToAuto);
			this.body.style.height = this.editor.clientHeight + "px";
		}
		this.isExpanded = !this.isExpanded;
	}

	async save(saveDelegate: (key: string, value: any) => Promise<any>) {
		try {
			this.isSaving = true;
			await saveDelegate(this.key, this.value);
			this.isEdited = false;
		}
		catch {
			this.alertService.error("Error occurred while saving the setting");
		}
		finally {
			this.isSaving = false;
		}
	}

}
