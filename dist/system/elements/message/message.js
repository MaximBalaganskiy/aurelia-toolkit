System.register(["tslib", "../../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, Message;
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
            Message = class Message {
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
            exports_1("Message", Message);
        }
    };
});
