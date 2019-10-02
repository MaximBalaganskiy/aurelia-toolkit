"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numeral = require("numeral");
class CurrencyValueConverter {
    toView(value) {
        return numeral(value).format("$0,0.00");
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
exports.CurrencyValueConverter = CurrencyValueConverter;
