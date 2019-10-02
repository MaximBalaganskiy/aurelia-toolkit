import * as tslib_1 from "tslib";
import * as au from "../aurelia";
import { ProgressHandle } from "./progress-handle";
let AlertService = class AlertService {
    constructor(toast, eventAggregator, templatingEngine, i18n, appInsights) {
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
    showModal(message, icon, iconColour, button1Text, button2Text) {
        let html = document.createElement("alert-modal");
        let view = this.templatingEngine.enhance(html);
        view.bind({});
        view.attached();
        document.querySelector("[aurelia-app]").appendChild(html);
        let alertModal = html.au["alert-modal"].viewModel;
        return new Promise(resolve => alertModal.open({
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
    alert(message, icon = "info", iconColour = "blue") {
        return this.showModal(message, icon, iconColour, this.i18nResource.ok, undefined);
    }
    confirm(message, icon = "help", iconColour = "blue") {
        return this.showModal(message, icon, iconColour, this.i18nResource.yes, this.i18nResource.no);
    }
    error(message) {
        return this.alert(message, "error", "red");
    }
    criticalError(message, error) {
        this.appInsights.trackException(error);
        return this.alert(message, "error", "red");
    }
    confirmToast(message, timeout) {
        this.toast.show(message, timeout || this.defaultTimeout);
    }
    errorToast(message, timeout) {
        this.toast.show(message, timeout || this.defaultTimeout, "red");
    }
    warningToast(message, timeout) {
        this.toast.show(message, timeout || this.defaultTimeout, "orange darken-2");
    }
    showProgress() {
        this.eventAggregator.publish("progress:on");
    }
    hideProgress() {
        this.eventAggregator.publish("progress:off");
    }
    usingProgress(action, catchHandler) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return using(this.progress(), action, catchHandler);
        });
    }
    progress() {
        return new ProgressHandle(this);
    }
};
AlertService = tslib_1.__decorate([
    au.autoinject
], AlertService);
export { AlertService };
export function using(disposable, action, catchHandler) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            return yield action();
        }
        catch (e) {
            if (catchHandler) {
                return yield catchHandler(e);
            }
            else {
                throw e;
            }
        }
        finally {
            disposable.dispose();
        }
    });
}
