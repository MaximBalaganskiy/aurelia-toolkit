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
            Files = /** @class */ (function () {
                function Files(element) {
                    this.element = element;
                    this.files = [];
                    this.buttonLabel = "Select Files";
                    this.selectTypeLabel = "Select Type";
                    this.accept = ".jpg,.jpeg,.gif,.png,.bmp,.pdf,.doc,.docx";
                }
                Files.prototype.selectedFilesChanged = function () {
                    var e_1, _a;
                    if (!this.selectedFiles) {
                        return;
                    }
                    var _loop_1 = function (newFile) {
                        if (!this_1.files.find(function (x) { return x.fileName === newFile.name && x.file.size === newFile.size && au.moment(x.file.lastModified).isSame(newFile.lastModified); })) {
                            this_1.files.push({ file: newFile, fileName: newFile.name, type: null, isTooBig: newFile.size > this_1.maxFileSize });
                        }
                    };
                    var this_1 = this;
                    try {
                        for (var _b = tslib_1.__values(Array.from(this.selectedFiles)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var newFile = _c.value;
                            _loop_1(newFile);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this.fileInput.value = "";
                };
                Files.prototype.remove = function (f) {
                    this.files.splice(this.files.indexOf(f), 1);
                    au.fireEvent(this.element, "change", { action: "remove", file: f });
                };
                tslib_1.__decorate([
                    au.observable,
                    tslib_1.__metadata("design:type", FileList)
                ], Files.prototype, "selectedFiles", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Array)
                ], Files.prototype, "files", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Number)
                ], Files.prototype, "maxFileSize", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], Files.prototype, "maxFileSizeText", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], Files.prototype, "buttonLabel", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], Files.prototype, "selectTypeLabel", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", String)
                ], Files.prototype, "accept", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Array)
                ], Files.prototype, "types", void 0);
                tslib_1.__decorate([
                    au.bindable,
                    tslib_1.__metadata("design:type", Boolean)
                ], Files.prototype, "readonly", void 0);
                Files = tslib_1.__decorate([
                    au.autoinject,
                    tslib_1.__metadata("design:paramtypes", [Element])
                ], Files);
                return Files;
            }());
            exports_1("Files", Files);
        }
    };
});
//# sourceMappingURL=files.js.map