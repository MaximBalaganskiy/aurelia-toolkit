"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../../aurelia");
var AtProgress = /** @class */ (function () {
    function AtProgress(element, eventAggregator) {
        this.element = element;
        this.eventAggregator = eventAggregator;
        this.size = "small";
        this.opacity = 0.7;
        this.progressCounter = 0;
    }
    AtProgress.prototype.attached = function () {
        var _this = this;
        if (this.element.parentElement) {
            this.element.parentElement.style.position = "relative";
        }
        this.global = this.element.hasAttribute("global");
        if (this.global) {
            this.onSubscription = this.eventAggregator.subscribe("progress:on", function () { return _this.progressOn(); });
            this.offSubscription = this.eventAggregator.subscribe("progress:off", function () { return _this.progressOff(); });
        }
    };
    AtProgress.prototype.detached = function () {
        if (this.onSubscription) {
            this.onSubscription.dispose();
        }
        if (this.offSubscription) {
            this.offSubscription.dispose();
        }
    };
    AtProgress.prototype.progressOn = function () {
        this.progressCounter++;
    };
    AtProgress.prototype.progressOff = function () {
        if (this.progressCounter > 0) {
            this.progressCounter--;
        }
    };
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", String)
    ], AtProgress.prototype, "size", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Number)
    ], AtProgress.prototype, "opacity", void 0);
    AtProgress = tslib_1.__decorate([
        au.customElement("at-progress"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element, au.EventAggregator])
    ], AtProgress);
    return AtProgress;
}());
exports.AtProgress = AtProgress;
//# sourceMappingURL=at-progress.js.map