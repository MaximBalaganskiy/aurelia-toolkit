import * as au from "../../aurelia";
import { IDictionaryRow } from "../../interfaces/i-dictionary-row";
import { IFileRow } from "./i-file-row";

@au.autoinject
export class Files {
	constructor(private element: Element) { }

	fileInput: HTMLInputElement;

	@au.observable
	selectedFiles: FileList;
	selectedFilesChanged() {
		if (!this.selectedFiles) {
			return;
		}
		for (let newFile of Array.from(this.selectedFiles)) {
			if (!this.files.find(x => x.fileName === newFile.name && x.file.size === newFile.size && au.moment(x.file.lastModified).isSame(newFile.lastModified))) {
				this.files.push({ file: newFile, fileName: newFile.name, type: null, isTooBig: newFile.size > this.maxFileSize });
			}
		}
		this.fileInput.value = "";
	}

	@au.bindable
	files: IFileRow[] = [];

	@au.bindable
	maxFileSize: number;

	@au.bindable
	maxFileSizeText: string;

	@au.bindable
	buttonLabel: string = "Select Files";

	@au.bindable
	selectTypeLabel: string = "Select Type";

	@au.bindable
	types: IDictionaryRow[];

	@au.bindable
	readonly: boolean;

	remove(f: IFileRow) {
		this.files.splice(this.files.indexOf(f), 1);
		au.fireEvent(this.element, "change", { action: "remove", file: f });
	}
}
