"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_1 = require("./aurelia");
require("aurelia-materialize-bridge/dist/native-modules/augmentation/aurelia-typed-observable");
// this is for webpack ts-loader to see ambient declaration
require("./augmentation/aurelia-router");
require("./augmentation/element");
var aurelia_i18n_1 = require("aurelia-i18n");
var aurelia_logging_1 = require("aurelia-logging");
var validation_rules_1 = require("./validation/validation-rules");
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
        aurelia_1.PLATFORM.moduleName("./elements/md-tweaks/md-tweaks"),
        aurelia_1.PLATFORM.moduleName("./elements/sticky-footer/sticky-footer"),
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
exports.configure = configure;
var i_app_route_config_1 = require("./interfaces/i-app-route-config");
exports.AuthStatus = i_app_route_config_1.AuthStatus;
var i_server_date_provider_1 = require("./interfaces/i-server-date-provider");
exports.IServerDateProvider = i_server_date_provider_1.IServerDateProvider;
var alert_service_1 = require("./services/alert-service");
exports.AlertService = alert_service_1.AlertService;
exports.using = alert_service_1.using;
var auth_service_1 = require("./services/auth-service");
exports.AuthService = auth_service_1.AuthService;
var date_service_1 = require("./services/date-service");
exports.DateService = date_service_1.DateService;
var app_insights_step_1 = require("./services/app-insights-step");
exports.AppInsightsStep = app_insights_step_1.AppInsightsStep;
var exception_service_1 = require("./services/exception-service");
exports.ExceptionService = exception_service_1.ExceptionService;
var load_script_1 = require("./services/load-script");
exports.loadScript = load_script_1.loadScript;
var exception_1 = require("./exceptions/exception");
exports.Exception = exception_1.Exception;
var too_many_records_1 = require("./exceptions/too-many-records");
exports.TooManyRecordsException = too_many_records_1.TooManyRecordsException;
var unconfirmed_email_1 = require("./exceptions/unconfirmed-email");
exports.UnconfirmedEmailException = unconfirmed_email_1.UnconfirmedEmailException;
var invalid_credentials_1 = require("./exceptions/invalid-credentials");
exports.InvalidCredentialsException = invalid_credentials_1.InvalidCredentialsException;
var forbidden_1 = require("./exceptions/forbidden");
exports.ForbiddenException = forbidden_1.ForbiddenException;
var unauthorized_1 = require("./exceptions/unauthorized");
exports.UnauthorizedException = unauthorized_1.UnauthorizedException;
var validation_controller_factory_1 = require("./validation/validation-controller-factory");
exports.ValidationControllerFactory = validation_controller_factory_1.ValidationControllerFactory;
var filter_1 = require("./elements/filter/filter");
exports.Filter = filter_1.Filter;
var filter_operator_1 = require("./elements/filter/filter-operator");
exports.FilterOperator = filter_operator_1.FilterOperator;
var app_nav_bar_1 = require("./elements/app-nav-bar/app-nav-bar");
exports.AppNavBar = app_nav_bar_1.AppNavBar;
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
var settings_editor_1 = require("./elements/settings-editor/settings-editor");
exports.SettingsEditor = settings_editor_1.SettingsEditor;
var setting_vm_1 = require("./elements/settings-editor/setting-vm");
exports.SettingVM = setting_vm_1.SettingVM;
//# sourceMappingURL=index.js.map