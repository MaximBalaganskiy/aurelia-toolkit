"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
let AtProgress = class AtProgress {
    constructor(element, eventAggregator) {
        this.element = element;
        this.eventAggregator = eventAggregator;
        this.size = "small";
        this.opacity = 0.7;
        this.progressCounter = 0;
    }
    attached() {
        if (this.element.parentElement) {
            this.element.parentElement.style.position = "relative";
        }
        this.global = this.element.hasAttribute("global");
        if (this.global) {
            this.onSubscription = this.eventAggregator.subscribe("progress:on", () => this.progressOn());
            this.offSubscription = this.eventAggregator.subscribe("progress:off", () => this.progressOff());
        }
    }
    detached() {
        if (this.onSubscription) {
            this.onSubscription.dispose();
        }
        if (this.offSubscription) {
            this.offSubscription.dispose();
        }
    }
    progressOn() {
        this.progressCounter++;
    }
    progressOff() {
        if (this.progressCounter > 0) {
            this.progressCounter--;
        }
    }
};
tslib_1.__decorate([
    au.bindable
], AtProgress.prototype, "size", void 0);
tslib_1.__decorate([
    au.bindable
], AtProgress.prototype, "opacity", void 0);
AtProgress = tslib_1.__decorate([
    au.customElement("at-progress"),
    au.autoinject
], AtProgress);
exports.AtProgress = AtProgress;
