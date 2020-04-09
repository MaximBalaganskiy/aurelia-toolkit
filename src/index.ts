import * as au from "./aurelia";
import { PLATFORM } from "./aurelia";
import "aurelia-materialize-bridge/dist/native-modules/augmentation/aurelia-typed-observable";

// this is for webpack ts-loader to see ambient declaration
import "./augmentation/aurelia-router";
import "./augmentation/element";
import { I18N } from "aurelia-i18n";
import { I18NResource } from "./interfaces/i18n-resource";
import { Logger } from "aurelia-logging";
import { addCustomValidationRules } from "./validation/validation-rules";

export function configure(frameworkConfiguration: au.FrameworkConfiguration) {
	frameworkConfiguration.globalResources([
		// elements
		PLATFORM.moduleName("./elements/alert-modal/alert-modal"),
		PLATFORM.moduleName("./elements/app-nav-bar/app-nav-bar"),
		PLATFORM.moduleName("./elements/datepicker/datepicker"),
		PLATFORM.moduleName("./elements/files/files"),
		PLATFORM.moduleName("./elements/message/message"),
		PLATFORM.moduleName("./elements/next-back-buttons/next-back-buttons"),
		PLATFORM.moduleName("./elements/settings-editor/settings-editor"),
		PLATFORM.moduleName("./elements/colours/at-colours"),
		PLATFORM.moduleName("./elements/progress/at-progress"),
		PLATFORM.moduleName("./elements/select/at-select"),
		PLATFORM.moduleName("./elements/variant-editor/variant-editor"),
		PLATFORM.moduleName("./elements/variant-viewer/variant-viewer"),
		PLATFORM.moduleName("./elements/md-tweaks/md-tweaks"),

		PLATFORM.moduleName("./elements/filter/filter"),
		PLATFORM.moduleName("./elements/filter/text-filter-line"),
		PLATFORM.moduleName("./elements/filter/lookup-filter-line"),
		PLATFORM.moduleName("./elements/filter/date-filter-line"),
		PLATFORM.moduleName("./elements/filter/number-filter-line"),
		PLATFORM.moduleName("./elements/filter/select-filter-line"),
		PLATFORM.moduleName("./elements/filter/bool-filter-line"),
		PLATFORM.moduleName("./elements/filter/filter-line-container"),
		PLATFORM.moduleName("./elements/filter/filter-operator-converter"),

		// converters
		PLATFORM.moduleName("./converters/date"),
		PLATFORM.moduleName("./converters/currency"),
		PLATFORM.moduleName("./converters/number"),
		PLATFORM.moduleName("./converters/abn"),
		PLATFORM.moduleName("./converters/decimal"),
		PLATFORM.moduleName("./converters/password"),

		// attributes
		PLATFORM.moduleName("./attributes/auto-focus"),
		PLATFORM.moduleName("./attributes/autocomplete-attr"),
		PLATFORM.moduleName("./attributes/readonly-children"),
		PLATFORM.moduleName("./attributes/at-style"),
		PLATFORM.moduleName("./attributes/md-inputmask"),

		// behaviours
		PLATFORM.moduleName("./behaviours/notify"),

		PLATFORM.moduleName("./helpers/enhance-inputmask"),
	]);

	let i18n = frameworkConfiguration.container.get(I18N) as I18N;
	// i18n might not be initialised yet
	if (i18n.i18nextDeferred) {
		i18n.i18nextDeferred.then(i18next => {
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
			} as I18NResource, true, false);
			addCustomValidationRules(i18n);
		});
	}
	else {
		let logger = frameworkConfiguration.container.get(Logger) as Logger;
		logger.error("Did you forget to initialise I18N plugin?");
		throw Error();
	}
}

export { IAppRouteConfig, AuthStatus } from "./interfaces/i-app-route-config";
export { ITokenPayload } from "./interfaces/i-token-payload";
export { IDisposable } from "./interfaces/i-disposable";
export { IHaveId } from "./interfaces/i-have-id";
export { IApiException } from "./interfaces/i-api-exception";
export { IServerDateProvider } from "./interfaces/i-server-date-provider";
export { I18NResource } from "./interfaces/i18n-resource";

export { AlertService, using } from "./services/alert-service";
export { AuthService } from "./services/auth-service";
export { DateService } from "./services/date-service";
export { AppInsightsStep } from "./services/app-insights-step";
export { ExceptionService } from "./services/exception-service";
export { loadScript } from "./services/load-script";

export { Exception } from "./exceptions/exception";
export { TooManyRecordsException } from "./exceptions/too-many-records";
export { UnconfirmedEmailException } from "./exceptions/unconfirmed-email";
export { InvalidCredentialsException } from "./exceptions/invalid-credentials";
export { ForbiddenException } from "./exceptions/forbidden";
export { UnauthorizedException } from "./exceptions/unauthorized";

export { ValidationControllerFactory } from "./validation/validation-controller-factory";
export { IPasswordRequirements } from "./validation/i-password-requirements";

export { IFileRow } from "./elements/files/i-file-row";
export { IFilterLine } from "./elements/filter/i-filter-line";
export { Filter } from "./elements/filter/filter";
export { FilterOperator } from "./elements/filter/filter-operator";
export { FilterLineBase } from "./elements/filter/filter-line-base";
export { AppNavBar } from "./elements/app-nav-bar/app-nav-bar";
PLATFORM.moduleName("./elements/variant-editor/variant-editor.boolean.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.date.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.integer.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.decimal.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.password.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.select.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.string.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.textarea.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.boolean.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.date.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.password.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.select.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.string.html");
export { SettingsEditor } from "./elements/settings-editor/settings-editor";
export { SettingVM } from "./elements/settings-editor/setting-vm";
export { ISelectOption } from "./elements/settings-editor/i-select-option";
