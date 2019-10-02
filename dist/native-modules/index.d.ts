import * as au from "./aurelia";
import "aurelia-materialize-bridge/dist/native-modules/augmentation/aurelia-typed-observable";
import "./augmentation/aurelia-router";
import "./augmentation/element";
export declare function configure(frameworkConfiguration: au.FrameworkConfiguration): void;
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
export { AppNavBar } from "./elements/app-nav-bar/app-nav-bar";
export { SettingsEditor } from "./elements/settings-editor/settings-editor";
export { SettingVM } from "./elements/settings-editor/setting-vm";
export { ISelectOption } from "./elements/settings-editor/i-select-option";
