"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../aurelia");
let DateService = class DateService {
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
exports.DateService = DateService;
