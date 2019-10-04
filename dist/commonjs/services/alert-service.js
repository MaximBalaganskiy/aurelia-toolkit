"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var progress_handle_1 = require("./progress-handle");
var applicationinsights_web_1 = require("@microsoft/applicationinsights-web");
var AlertService = /** @class */ (function () {
    function AlertService(toast, eventAggregator, templatingEngine, i18n, appInsights) {
        this.toast = toast;
        this.eventAggregator = eventAggregator;
        this.templatingEngine = templatingEngine;
        this.i18n = i18n;
        this.appInsights = appInsights;
        this.progressCounter = 0;
        this.defaultTimeout = 4000;
        this.logger = au.getLogger("AlertService");
        this.i18nResource = this.i18n.tr("aurelia-toolkit:alert", { returnObjects: true });
    }
    AlertService.prototype.showModal = function (message, icon, iconColour, button1Text, button2Text) {
        var html = document.createElement("alert-modal");
        var view = this.templatingEngine.enhance(html);
        view.bind({});
        view.attached();
        document.querySelector("[aurelia-app]").appendChild(html);
        var alertModal = html.au["alert-modal"].viewModel;
        return new Promise(function (resolve) { return alertModal.open({
            icon: icon,
            iconColour: iconColour,
            message: message,
            button1Text: button1Text,
            button2Text: button2Text,
            button1Click: function () { return resolve(true); },
            button2Click: function () { return resolve(false); }
        }); }).then(function (x) {
            html.remove();
            view.unbind();
            view.detached();
            return x;
        });
    };
    AlertService.prototype.alert = function (message, icon, iconColour) {
        if (icon === void 0) { icon = "info"; }
        if (iconColour === void 0) { iconColour = "blue"; }
        return this.showModal(message, icon, iconColour, this.i18nResource.ok, undefined);
    };
    AlertService.prototype.confirm = function (message, icon, iconColour) {
        if (icon === void 0) { icon = "help"; }
        if (iconColour === void 0) { iconColour = "blue"; }
        return this.showModal(message, icon, iconColour, this.i18nResource.yes, this.i18nResource.no);
    };
    AlertService.prototype.error = function (message) {
        return this.alert(message, "error", "red");
    };
    AlertService.prototype.criticalError = function (message, error) {
        this.appInsights.trackException(error);
        return this.alert(message, "error", "red");
    };
    AlertService.prototype.confirmToast = function (message, timeout) {
        this.toast.show(message, timeout || this.defaultTimeout);
    };
    AlertService.prototype.errorToast = function (message, timeout) {
        this.toast.show(message, timeout || this.defaultTimeout, "red");
    };
    AlertService.prototype.warningToast = function (message, timeout) {
        this.toast.show(message, timeout || this.defaultTimeout, "orange darken-2");
    };
    AlertService.prototype.showProgress = function () {
        this.eventAggregator.publish("progress:on");
    };
    AlertService.prototype.hideProgress = function () {
        this.eventAggregator.publish("progress:off");
    };
    AlertService.prototype.usingProgress = function (action, catchHandler) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, using(this.progress(), action, catchHandler)];
            });
        });
    };
    AlertService.prototype.progress = function () {
        return new progress_handle_1.ProgressHandle(this);
    };
    AlertService = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [au.MdToastService, au.EventAggregator, au.TemplatingEngine, au.I18N, applicationinsights_web_1.ApplicationInsights])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
function using(disposable, action, catchHandler) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 6, 7]);
                    return [4 /*yield*/, action()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    e_1 = _a.sent();
                    if (!catchHandler) return [3 /*break*/, 4];
                    return [4 /*yield*/, catchHandler(e_1)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4: throw e_1;
                case 5: return [3 /*break*/, 7];
                case 6:
                    disposable.dispose();
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.using = using;
//# sourceMappingURL=alert-service.js.map