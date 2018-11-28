"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const au = require("../../aurelia");
const filter_line_base_1 = require("./filter-line-base");
const filter_operator_1 = require("./filter-operator");
let BoolFilterLine = class BoolFilterLine extends filter_line_base_1.FilterLineBase {
    constructor(element) {
        super(element);
        this.operators = [filter_operator_1.FilterOperator.Is];
    }
};
BoolFilterLine = tslib_1.__decorate([
    au.customElement("bool-filter-line")
], BoolFilterLine);
exports.BoolFilterLine = BoolFilterLine;
