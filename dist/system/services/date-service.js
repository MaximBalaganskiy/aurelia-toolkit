System.register(["tslib", "../aurelia"], function (exports_1, context_1) {
    "use strict";
    var tslib_1, au, DateService;
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
            DateService = class DateService {
                constructor(dateClient) {
                    this.dateClient = dateClient;
                    this.differenceWithServer = undefined;
                }
                now() {
                    return new Date();
                }
                getServerDate() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (this.differenceWithServer === undefined) {
                            let serverDate = yield this.dateClient.getServerDate();
                            this.differenceWithServer = this.now().getTime() - serverDate.getTime();
                            return serverDate;
                        }
                        else {
                            return new Date(this.now().getTime() - this.differenceWithServer);
                        }
                    });
                }
            };
            DateService = tslib_1.__decorate([
                au.autoinject
            ], DateService);
            exports_1("DateService", DateService);
        }
    };
});
