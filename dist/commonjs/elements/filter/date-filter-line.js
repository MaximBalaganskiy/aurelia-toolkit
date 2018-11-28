"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
const filter_line_base_1 = require("./filter-line-base");
const filter_operator_1 = require("./filter-operator");
let DateFilterLine = class DateFilterLine extends filter_line_base_1.FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [filter_operator_1.FilterOperator.Is, filter_operator_1.FilterOperator.IsNot, filter_operator_1.FilterOperator.IsBefore, filter_operator_1.FilterOperator.IsAfter];
        this.maxWidth = 150;
    }
};
DateFilterLine = tslib_1.__decorate([
    au.customElement("date-filter-line")
], DateFilterLine);
exports.DateFilterLine = DateFilterLine;
