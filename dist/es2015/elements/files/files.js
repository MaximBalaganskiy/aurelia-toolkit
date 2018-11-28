import * as tslib_1 from "tslib";
import * as au from "../../aurelia";
let Files = class Files {
    constructor() {
        this.files = [];
        this.buttonLabel = "Select Files";
        this.selectTypeLabel = "Select Type";
    }
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
    remove(f) {
        this.files.splice(this.files.indexOf(f), 1);
    }
};
tslib_1.__decorate([
    au.observable
], Files.prototype, "selectedFiles", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "files", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "maxFileSize", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "buttonLabel", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "selectTypeLabel", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "types", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "readonly", void 0);
Files = tslib_1.__decorate([
    au.autoinject
], Files);
export { Files };
