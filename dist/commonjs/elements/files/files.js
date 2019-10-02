"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
let Files = class Files {
    constructor(element) {
        this.element = element;
        this.files = [];
        this.buttonLabel = "Select Files";
        this.selectTypeLabel = "Select Type";
        this.accept = ".jpg,.jpeg,.gif,.png,.bmp,.pdf,.doc,.docx";
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
        au.fireEvent(this.element, "change", { action: "remove", file: f });
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
], Files.prototype, "maxFileSizeText", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "buttonLabel", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "selectTypeLabel", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "accept", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "types", void 0);
tslib_1.__decorate([
    au.bindable
], Files.prototype, "readonly", void 0);
Files = tslib_1.__decorate([
    au.autoinject
], Files);
exports.Files = Files;
