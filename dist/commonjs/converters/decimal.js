"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeral = require("numeral");
class DecimalValueConverter {
    toView(value) {
        if (!value) {
            return undefined;
        }
        else {
            return numeral(value).format("0,0.00");
        }
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
exports.DecimalValueConverter = DecimalValueConverter;
