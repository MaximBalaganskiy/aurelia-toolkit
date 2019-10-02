"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var ReadonlyChildrenCustomAttribute = /** @class */ (function () {
    function ReadonlyChildrenCustomAttribute(element) {
        this.element = element;
    }
    ReadonlyChildrenCustomAttribute.prototype.valueChanged = function () {
        // TODO: make generic
        // let inputs = $(this.element).find(":not(md-readonly) :not(md-readonly.bind) :not(readonly) :not(readonly.bind)");
        // for (let i = 0; i < inputs.length; ++i) {
        // 	let auElement = <{au: any | undefined}><any>inputs[i];
        // 	if(auElement.au)
        // 	if (!inputs[i].hasAttribute("md-readonly") && !inputs[i].hasAttribute("md-readonly.bind"))
        // 		(<any>inputs[i]).au["md-input"].viewModel.mdReadonly = this.value;
        // }
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f;
        var inputs = this.element.querySelectorAll("md-input");
        try {
            for (var _g = tslib_1.__values(Array.from(inputs)), _h = _g.next(); !_h.done; _h = _g.next()) {
                var input = _h.value;
                if (!input.hasAttribute("readonly") && !input.hasAttribute("readonly.bind")) {
                    input.au["md-input"].viewModel.readonly = this.value;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var checkboxes = this.element.querySelectorAll("md-checkbox");
        try {
            for (var _j = tslib_1.__values(Array.from(checkboxes)), _k = _j.next(); !_k.done; _k = _j.next()) {
                var checkbox = _k.value;
                if (!checkbox.hasAttribute("readonly") && !checkbox.hasAttribute("readonly.bind")) {
                    checkbox.au["md-checkbox"].viewModel.readonly = this.value;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var selects = this.element.querySelectorAll("select[md-select]");
        try {
            for (var _l = tslib_1.__values(Array.from(selects)), _m = _l.next(); !_m.done; _m = _l.next()) {
                var select = _m.value;
                select.au["md-select"].viewModel.readonly = this.value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var mdlookups = this.element.querySelectorAll("md-lookup");
        try {
            for (var _o = tslib_1.__values(Array.from(mdlookups)), _p = _o.next(); !_p.done; _p = _o.next()) {
                var lookup = _p.value;
                if (!lookup.hasAttribute("readonly") && !lookup.hasAttribute("readonly.bind")) {
                    lookup.au["md-lookup"].viewModel.readonly = this.value;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_p && !_p.done && (_d = _o.return)) _d.call(_o);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var buttons = this.element.querySelectorAll("next-back-buttons");
        try {
            for (var _q = tslib_1.__values(Array.from(buttons)), _r = _q.next(); !_r.done; _r = _q.next()) {
                var button = _r.value;
                if (!button.hasAttribute("readonly") && !button.hasAttribute("readonly.bind")) {
                    button.au["next-back-buttons"].viewModel.readonly = this.value;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_r && !_r.done && (_e = _q.return)) _e.call(_q);
            }
            finally { if (e_5) throw e_5.error; }
        }
        var datepickers = this.element.querySelectorAll("datepicker");
        try {
            for (var _s = tslib_1.__values(Array.from(datepickers)), _t = _s.next(); !_t.done; _t = _s.next()) {
                var datepicker = _t.value;
                if (!datepicker.hasAttribute("readonly") && !datepicker.hasAttribute("readonly.bind")) {
                    datepicker.au["datepicker"].viewModel.readonly = this.value;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_t && !_t.done && (_f = _s.return)) _f.call(_s);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    ReadonlyChildrenCustomAttribute.prototype.attached = function () {
        this.valueChanged();
    };
    ReadonlyChildrenCustomAttribute = tslib_1.__decorate([
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], ReadonlyChildrenCustomAttribute);
    return ReadonlyChildrenCustomAttribute;
}());
exports.ReadonlyChildrenCustomAttribute = ReadonlyChildrenCustomAttribute;
//# sourceMappingURL=readonly-children.js.map