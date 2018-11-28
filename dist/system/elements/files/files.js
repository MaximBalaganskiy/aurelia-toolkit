System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, Files;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (tslib_1_1) {
                tslib_1 = tslib_1_1;
            },
            function (au_1) {
                au = au_1;
            }
        ],
        execute: function () {
            Files = class Files {
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
            exports_1("Files", Files);
        }
    };
});
