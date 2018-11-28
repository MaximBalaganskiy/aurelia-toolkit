"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
const filter_line_base_1 = require("./filter-line-base");
const filter_operator_1 = require("./filter-operator");
let NumberFilterLine = class NumberFilterLine extends filter_line_base_1.FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot, filter_operator_1.FilterOperator.GreaterThan, filter_operator_1.FilterOperator.LessThan];
        this.maxWidth = 150;
    }
    valueTextChanged() {
        this.value = au.numeral(this.valueText).value();
    }
};
tslib_1.__decorate([
    au.observable
], NumberFilterLine.prototype, "valueText", void 0);
NumberFilterLine = tslib_1.__decorate([
    au.customElement("number-filter-line")
], NumberFilterLine);
exports.NumberFilterLine = NumberFilterLine;
