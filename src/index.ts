import * as au from "./aurelia";
import { PLATFORM } from "./aurelia";

import "./validation/validation-rules";

// this is for webpack ts-loader to see JQuery ambient declaration
import "./augmentation/aurelia-router";
import "./augmentation/element";

export function configure(frameworkConfiguration: au.FrameworkConfiguration) {
	frameworkConfiguration.globalResources([
		// elements
		PLATFORM.moduleName("./elements/alert-modal/alert-modal"),
		PLATFORM.moduleName("./elements/app-nav-bar/app-nav-bar"),
		PLATFORM.moduleName("./elements/datepicker/datepicker"),
		PLATFORM.moduleName("./elements/files/files"),
		PLATFORM.moduleName("./elements/filter/filter"),
		PLATFORM.moduleName("./elements/filter/filter-row-converter"),
		PLATFORM.moduleName("./elements/filter/filter-operator-converter"),
		PLATFORM.moduleName("./elements/lookup/lookup"),
		PLATFORM.moduleName("./elements/message/message"),
		PLATFORM.moduleName("./elements/next-back-buttons/next-back-buttons"),
		PLATFORM.moduleName("./elements/settings-editor/settings-editor"),
		PLATFORM.moduleName("./elements/tw-colours/tw-colours"),
		PLATFORM.moduleName("./elements/tw-progress/tw-progress"),
		PLATFORM.moduleName("./elements/tw-select/tw-select"),
		PLATFORM.moduleName("./elements/variant-editor/variant-editor"),
		PLATFORM.moduleName("./elements/variant-viewer/variant-viewer"),

		PLATFORM.moduleName("./elements/new-filter/new-filter"),
		PLATFORM.moduleName("./elements/new-filter/text-filter-line"),
		PLATFORM.moduleName("./elements/new-filter/lookup-filter-line"),
		PLATFORM.moduleName("./elements/new-filter/date-filter-line"),
		PLATFORM.moduleName("./elements/new-filter/number-filter-line"),
		PLATFORM.moduleName("./elements/new-filter/select-filter-line"),
		PLATFORM.moduleName("./elements/new-filter/bool-filter-line"),
		PLATFORM.moduleName("./elements/new-filter/filter-line-container"),

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
		PLATFORM.moduleName("./attributes/tw-style"),
		PLATFORM.moduleName("./attributes/md-inputmask"),

		// behaviours
		PLATFORM.moduleName("./behaviours/notify"),

		PLATFORM.moduleName("./helpers/enhance-inputmask"),
	]);
}

export { IAppRouteConfig, AuthStatus } from "./interfaces/i-app-route-config";
export { ITokenPayload } from "./interfaces/i-token-payload";
export { IDisposable } from "./interfaces/i-disposable";
export { IHaveId } from "./interfaces/i-have-id";
export { IApiException } from "./interfaces/i-api-exception";
export { IServerDateProvider } from "./interfaces/i-server-date-provider";
export { ILookupGetOptionsCriteria } from "./elements/lookup/i-lookup-get-options-criteria";

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
export { IFilterRow } from "./elements/filter/i-filter-row";
export { DateFilterRow } from "./elements/filter/date-filter-row";
export { SelectFilterRow } from "./elements/filter/select-filter-row";
export { LookupFilterRow } from "./elements/filter/lookup-filter-row";
export { NumberFilterRow } from "./elements/filter/number-filter-row";
export { TextFilterRow } from "./elements/filter/text-filter-row";
export { IFilterLine } from "./elements/new-filter/i-filter-line";
export { NewFilter } from "./elements/new-filter/new-filter";
PLATFORM.moduleName("./elements/filter/date-filter-row-template.html");
PLATFORM.moduleName("./elements/filter/select-filter-row-template.html");
PLATFORM.moduleName("./elements/filter/lookup-filter-row-template.html");
PLATFORM.moduleName("./elements/filter/number-filter-row-template.html");
PLATFORM.moduleName("./elements/filter/text-filter-row-template.html");
export { FilterOperator } from "./elements/filter/filter-operator";
export { Lookup } from "./elements/lookup/lookup";
export { AppNavBar } from "./elements/app-nav-bar/app-nav-bar";
PLATFORM.moduleName("./elements/variant-editor/variant-editor.boolean.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.date.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.number.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.password.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.payment-provider.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.string.html");
PLATFORM.moduleName("./elements/variant-editor/variant-editor.textarea.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.boolean.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.date.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.password.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.payment-provider.html");
PLATFORM.moduleName("./elements/variant-viewer/variant-viewer.string.html");
export { SettingVM } from "./elements/settings-editor/setting-vm";
