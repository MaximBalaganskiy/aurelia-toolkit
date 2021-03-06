define(["require", "exports", "tslib", "aurelia-pal", "aurelia-framework", "aurelia-logging", "aurelia-validation", "aurelia-router", "aurelia-authentication", "aurelia-event-aggregator", "aurelia-materialize-bridge", "numeral", "moment", "aurelia-typed-observable-plugin", "aurelia-i18n"], function (require, exports, tslib_1, aurelia_pal_1, aurelia_framework_1, aurelia_logging_1, aurelia_validation_1, aurelia_router_1, aurelia_authentication_1, aurelia_event_aggregator_1, aurelia_materialize_bridge_1, numeral, moment, ato, aurelia_i18n_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    tslib_1.__exportStar(aurelia_pal_1, exports);
    tslib_1.__exportStar(aurelia_framework_1, exports);
    tslib_1.__exportStar(aurelia_logging_1, exports);
    exports.ValidationRules = aurelia_validation_1.ValidationRules;
    exports.ValidationControllerFactory = aurelia_validation_1.ValidationControllerFactory;
    exports.ValidationController = aurelia_validation_1.ValidationController;
    exports.Validator = aurelia_validation_1.Validator;
    exports.validateTrigger = aurelia_validation_1.validateTrigger;
    tslib_1.__exportStar(aurelia_router_1, exports);
    exports.AuthService = aurelia_authentication_1.AuthService;
    exports.EventAggregator = aurelia_event_aggregator_1.EventAggregator;
    exports.fireEvent = aurelia_materialize_bridge_1.fireEvent;
    exports.MdToastService = aurelia_materialize_bridge_1.MdToastService;
    exports.AttributeManager = aurelia_materialize_bridge_1.AttributeManager;
    exports.MdColorsService = aurelia_materialize_bridge_1.MdColorsService;
    exports.DiscardablePromise = aurelia_materialize_bridge_1.DiscardablePromise;
    exports.discard = aurelia_materialize_bridge_1.discard;
    exports.MdLookup = aurelia_materialize_bridge_1.MdLookup;
    exports.MdTapTarget = aurelia_materialize_bridge_1.MdTapTarget;
    exports.updateLabel = aurelia_materialize_bridge_1.updateLabel;
    exports.numeral = numeral;
    exports.moment = moment;
    exports.ato = ato;
    exports.I18N = aurelia_i18n_1.I18N;
});
//# sourceMappingURL=aurelia.js.map