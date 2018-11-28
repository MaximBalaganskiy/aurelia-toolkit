define(["require", "exports", "./aurelia", "./interfaces/i-app-route-config", "./interfaces/i-server-date-provider", "./services/alert-service", "./services/auth-service", "./services/date-service", "./services/app-insights-step", "./services/exception-service", "./services/load-script", "./exceptions/exception", "./exceptions/too-many-records", "./exceptions/unconfirmed-email", "./exceptions/invalid-credentials", "./exceptions/forbidden", "./exceptions/unauthorized", "./validation/validation-controller-factory", "./elements/filter/filter", "./elements/filter/filter-operator", "./elements/app-nav-bar/app-nav-bar", "./elements/settings-editor/setting-vm", "./validation/validation-rules", "./augmentation/aurelia-router", "./augmentation/element"], function (require, exports, aurelia_1, i_app_route_config_1, i_server_date_provider_1, alert_service_1, auth_service_1, date_service_1, app_insights_step_1, exception_service_1, load_script_1, exception_1, too_many_records_1, unconfirmed_email_1, invalid_credentials_1, forbidden_1, unauthorized_1, validation_controller_factory_1, filter_1, filter_operator_1, app_nav_bar_1, setting_vm_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    }
    exports.configure = configure;
    exports.AuthStatus = i_app_route_config_1.AuthStatus;
    exports.IServerDateProvider = i_server_date_provider_1.IServerDateProvider;
    exports.AlertService = alert_service_1.AlertService;
    exports.using = alert_service_1.using;
    exports.AuthService = auth_service_1.AuthService;
    exports.DateService = date_service_1.DateService;
    exports.AppInsightsStep = app_insights_step_1.AppInsightsStep;
    exports.ExceptionService = exception_service_1.ExceptionService;
    exports.loadScript = load_script_1.loadScript;
    exports.Exception = exception_1.Exception;
    exports.TooManyRecordsException = too_many_records_1.TooManyRecordsException;
    exports.UnconfirmedEmailException = unconfirmed_email_1.UnconfirmedEmailException;
    exports.InvalidCredentialsException = invalid_credentials_1.InvalidCredentialsException;
    exports.ForbiddenException = forbidden_1.ForbiddenException;
    exports.UnauthorizedException = unauthorized_1.UnauthorizedException;
    exports.ValidationControllerFactory = validation_controller_factory_1.ValidationControllerFactory;
    exports.Filter = filter_1.Filter;
    exports.FilterOperator = filter_operator_1.FilterOperator;
    exports.AppNavBar = app_nav_bar_1.AppNavBar;
    aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.boolean.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.date.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.number.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.password.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.select.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.string.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-editor/variant-editor.textarea.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.boolean.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.date.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.password.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.select.html");
    aurelia_1.PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.string.html");
    exports.SettingVM = setting_vm_1.SettingVM;
});
