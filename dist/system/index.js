System.register(["./aurelia", "aurelia-materialize-bridge/dist/native-modules/augmentation/aurelia-typed-observable", "./augmentation/aurelia-router", "./augmentation/element", "aurelia-i18n", "aurelia-logging", "./validation/validation-rules", "./interfaces/i-app-route-config", "./interfaces/i-server-date-provider", "./services/alert-service", "./services/auth-service", "./services/date-service", "./services/app-insights-step", "./services/exception-service", "./services/load-script", "./exceptions/exception", "./exceptions/too-many-records", "./exceptions/unconfirmed-email", "./exceptions/invalid-credentials", "./exceptions/forbidden", "./exceptions/unauthorized", "./validation/validation-controller-factory", "./elements/filter/filter", "./elements/filter/filter-operator", "./elements/app-nav-bar/app-nav-bar", "./elements/settings-editor/settings-editor", "./elements/settings-editor/setting-vm"], function (exports_1, context_1) {
    "use strict";
    var aurelia_1, aurelia_i18n_1, aurelia_logging_1, validation_rules_1;
    var __moduleName = context_1 && context_1.id;
    function configure(frameworkConfiguration) {
        frameworkConfiguration.globalResources([
            // elements
            aurelia_1.PLATFORM.moduleName("./elements/alert-modal/alert-modal"),
            aurelia_1.PLATFORM.moduleName("./elements/app-nav-bar/app-nav-bar"),
            aurelia_1.PLATFORM.moduleName("./elements/datepicker/datepicker"),
            aurelia_1.PLATFORM.moduleName("./elements/files/files"),
            aurelia_1.PLATFORM.moduleName("./elements/message/message"),
            aurelia_1.PLATFORM.moduleName("./elements/next-back-buttons/next-back-buttons"),
            aurelia_1.PLATFORM.moduleName("./elements/settings-editor/settings-editor"),
            aurelia_1.PLATFORM.moduleName("./elements/colours/at-colours"),
            aurelia_1.PLATFORM.moduleName("./elements/progress/at-progress"),
            aurelia_1.PLATFORM.moduleName("./elements/select/at-select"),
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor"),
            aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/filter"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/text-filter-line"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/lookup-filter-line"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/date-filter-line"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/number-filter-line"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/select-filter-line"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/bool-filter-line"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/filter-line-container"),
            aurelia_1.PLATFORM.moduleName("./elements/filter/filter-operator-converter"),
            // converters
            aurelia_1.PLATFORM.moduleName("./converters/date"),
            aurelia_1.PLATFORM.moduleName("./converters/currency"),
            aurelia_1.PLATFORM.moduleName("./converters/number"),
            aurelia_1.PLATFORM.moduleName("./converters/abn"),
            aurelia_1.PLATFORM.moduleName("./converters/decimal"),
            aurelia_1.PLATFORM.moduleName("./converters/password"),
            // attributes
            aurelia_1.PLATFORM.moduleName("./attributes/auto-focus"),
            aurelia_1.PLATFORM.moduleName("./attributes/autocomplete-attr"),
            aurelia_1.PLATFORM.moduleName("./attributes/readonly-children"),
            aurelia_1.PLATFORM.moduleName("./attributes/at-style"),
            aurelia_1.PLATFORM.moduleName("./attributes/md-inputmask"),
            // behaviours
            aurelia_1.PLATFORM.moduleName("./behaviours/notify"),
            aurelia_1.PLATFORM.moduleName("./helpers/enhance-inputmask"),
        ]);
        var i18n = frameworkConfiguration.container.get(aurelia_i18n_1.I18N);
        // i18n might not be initialised yet
        if (i18n.i18nextDeferred) {
            i18n.i18nextDeferred.then(function (i18next) {
                i18next.addResourceBundle("en", "aurelia-toolkit", {
                    alert: {
                        ok: "Ok",
                        no: "No",
                        yes: "Yes"
                    },
                    validation: {
                        requiredLength: "${$displayName} must have at least ${$config.length} characters",
                        requireDigit: "${$displayName} must include digits",
                        requireLowercase: "${$displayName} must include lowercase letters",
                        requireUppercase: "${$displayName} must include uppercase letters",
                        requireNonAlphanumeric: "${$displayName} must include special characters",
                        requiredUniqueChars: "${$displayName} must have at least ${$config.length} unique characters",
                        mustMatch: "${$displayName} must match the ${$config.otherPropertyName}"
                    },
                    filter: {
                        addFilter: "Add Filter",
                        all: "All",
                        operator: {
                            is: "is",
                            isAfter: "is after",
                            isBefore: "is before",
                            isNot: "is not",
                            like: "like",
                            notLike: "not like"
                        },
                        search: "Search",
                        operatorWidth: "80px"
                    }
                }, true, false);
                validation_rules_1.addCustomValidationRules(i18n);
            });
        }
        else {
            var logger = frameworkConfiguration.container.get(aurelia_logging_1.Logger);
            logger.error("Did you forget to initialise I18N plugin?");
            throw Error();
        }
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (aurelia_1_1) {
                aurelia_1 = aurelia_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (aurelia_i18n_1_1) {
                aurelia_i18n_1 = aurelia_i18n_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (validation_rules_1_1) {
                validation_rules_1 = validation_rules_1_1;
            },
            function (i_app_route_config_1_1) {
                exports_1({
                    "AuthStatus": i_app_route_config_1_1["AuthStatus"]
                });
            },
            function (i_server_date_provider_1_1) {
                exports_1({
                    "IServerDateProvider": i_server_date_provider_1_1["IServerDateProvider"]
                });
            },
            function (alert_service_1_1) {
                exports_1({
                    "AlertService": alert_service_1_1["AlertService"],
                    "using": alert_service_1_1["using"]
                });
            },
            function (auth_service_1_1) {
                exports_1({
                    "AuthService": auth_service_1_1["AuthService"]
                });
            },
            function (date_service_1_1) {
                exports_1({
                    "DateService": date_service_1_1["DateService"]
                });
            },
            function (app_insights_step_1_1) {
                exports_1({
                    "AppInsightsStep": app_insights_step_1_1["AppInsightsStep"]
                });
            },
            function (exception_service_1_1) {
                exports_1({
                    "ExceptionService": exception_service_1_1["ExceptionService"]
                });
            },
            function (load_script_1_1) {
                exports_1({
                    "loadScript": load_script_1_1["loadScript"]
                });
            },
            function (exception_1_1) {
                exports_1({
                    "Exception": exception_1_1["Exception"]
                });
            },
            function (too_many_records_1_1) {
                exports_1({
                    "TooManyRecordsException": too_many_records_1_1["TooManyRecordsException"]
                });
            },
            function (unconfirmed_email_1_1) {
                exports_1({
                    "UnconfirmedEmailException": unconfirmed_email_1_1["UnconfirmedEmailException"]
                });
            },
            function (invalid_credentials_1_1) {
                exports_1({
                    "InvalidCredentialsException": invalid_credentials_1_1["InvalidCredentialsException"]
                });
            },
            function (forbidden_1_1) {
                exports_1({
                    "ForbiddenException": forbidden_1_1["ForbiddenException"]
                });
            },
            function (unauthorized_1_1) {
                exports_1({
                    "UnauthorizedException": unauthorized_1_1["UnauthorizedException"]
                });
            },
            function (validation_controller_factory_1_1) {
                exports_1({
                    "ValidationControllerFactory": validation_controller_factory_1_1["ValidationControllerFactory"]
                });
            },
            function (filter_1_1) {
                exports_1({
                    "Filter": filter_1_1["Filter"]
                });
            },
            function (filter_operator_1_1) {
                exports_1({
                    "FilterOperator": filter_operator_1_1["FilterOperator"]
                });
            },
            function (app_nav_bar_1_1) {
                exports_1({
                    "AppNavBar": app_nav_bar_1_1["AppNavBar"]
                });
            },
            function (settings_editor_1_1) {
                exports_1({
                    "SettingsEditor": settings_editor_1_1["SettingsEditor"]
                });
            },
            function (setting_vm_1_1) {
                exports_1({
                    "SettingVM": setting_vm_1_1["SettingVM"]
                });
            }
        ],
        execute: function () {
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.boolean.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.date.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.integer.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.decimal.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.password.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.select.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.string.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.textarea.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.boolean.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.date.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.password.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.select.html");
            aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.string.html");
        }
    };
});
//# sourceMappingURL=index.js.map