"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
let Message = class Message {
    constructor() {
        this.card = true;
    }
};
tslib_1.__decorate([
    au.bindable
], Message.prototype, "icon", void 0);
tslib_1.__decorate([
    au.bindable
], Message.prototype, "colour", void 0);
tslib_1.__decorate([
    au.ato.bindable.booleanMd
], Message.prototype, "card", void 0);
Message = tslib_1.__decorate([
    au.autoinject
], Message);
exports.Message = Message;
