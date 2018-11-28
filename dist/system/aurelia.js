System.register(["aurelia-pal", "aurelia-framework", "aurelia-logging", "aurelia-validation", "aurelia-router", "aurelia-authentication", "aurelia-event-aggregator", "aurelia-materialize-bridge", "numeral", "moment", "aurelia-typed-observable-plugin"], function (exports_1, context_1) {
    "use strict";
    var numeral, moment, ato;
    var __moduleName = context_1 && context_1.id;
    var exportedNames_1 = {
        "numeral": true,
        "moment": true,
        "ato": true,
        "ValidationRules": true,
        "ValidationControllerFactory": true,
        "ValidationController": true,
        "Validator": true,
        "validateTrigger": true,
        "AuthService": true,
        "EventAggregator": true,
        "fireEvent": true,
        "MdToastService": true,
        "AttributeManager": true,
        "MdColorsService": true,
        "DiscardablePromise": true,
        "discard": true,
        "MdLookup": true,
        "MdTapTarget": true,
        "updateLabel": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (aurelia_pal_1_1) {
                exportStar_1(aurelia_pal_1_1);
            },
            function (aurelia_framework_1_1) {
                exportStar_1(aurelia_framework_1_1);
            },
            function (aurelia_logging_1_1) {
                exportStar_1(aurelia_logging_1_1);
            },
            function (aurelia_validation_1_1) {
                exports_1({
                    "ValidationRules": aurelia_validation_1_1["ValidationRules"],
                    "ValidationControllerFactory": aurelia_validation_1_1["ValidationControllerFactory"],
                    "ValidationController": aurelia_validation_1_1["ValidationController"],
                    "Validator": aurelia_validation_1_1["Validator"],
                    "validateTrigger": aurelia_validation_1_1["validateTrigger"]
                });
            },
            function (aurelia_router_1_1) {
                exportStar_1(aurelia_router_1_1);
            },
            function (aurelia_authentication_1_1) {
                exports_1({
                    "AuthService": aurelia_authentication_1_1["AuthService"]
                });
            },
            function (aurelia_event_aggregator_1_1) {
                exports_1({
                    "EventAggregator": aurelia_event_aggregator_1_1["EventAggregator"]
                });
            },
            function (aurelia_materialize_bridge_1_1) {
                exports_1({
                    "fireEvent": aurelia_materialize_bridge_1_1["fireEvent"],
                    "MdToastService": aurelia_materialize_bridge_1_1["MdToastService"],
                    "AttributeManager": aurelia_materialize_bridge_1_1["AttributeManager"],
                    "MdColorsService": aurelia_materialize_bridge_1_1["MdColorsService"],
                    "DiscardablePromise": aurelia_materialize_bridge_1_1["DiscardablePromise"],
                    "discard": aurelia_materialize_bridge_1_1["discard"],
                    "MdLookup": aurelia_materialize_bridge_1_1["MdLookup"],
                    "MdTapTarget": aurelia_materialize_bridge_1_1["MdTapTarget"],
                    "updateLabel": aurelia_materialize_bridge_1_1["updateLabel"]
                });
            },
            function (numeral_1) {
                numeral = numeral_1;
            },
            function (moment_1) {
                moment = moment_1;
            },
            function (ato_1) {
                ato = ato_1;
            }
        ],
        execute: function () {
            exports_1("numeral", numeral);
            exports_1("moment", moment);
            exports_1("ato", ato);
        }
    };
});
