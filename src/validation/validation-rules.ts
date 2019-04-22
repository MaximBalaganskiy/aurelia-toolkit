import * as au from "../aurelia";
import { FluentRuleCustomizer, FluentRules } from "aurelia-validation";
import { IPasswordRequirements } from "./i-password-requirements";
import { I18N } from "aurelia-i18n";
import { I18NResource } from "../interfaces/i18n-resource";

export function addCustomValidationRules(i18n: I18N) {
	let i18nResource = i18n.tr("aurelia-toolkit:validation", { returnObjects: true }) as any as I18NResource["validation"];

	au.ValidationRules.customRule("requiredLength", (v: string, o, length: number) => {
		return v && v.length >= length;
	}, i18nResource.requiredLength, (length: number) => ({ length }));

	au.ValidationRules.customRule("requireDigit", (v: string) => {
		return /[0-9]+/.test(v);
	}, i18nResource.requireDigit);

	au.ValidationRules.customRule("requireLowercase", (v: string) => {
		return /[a-z]+/.test(v);
	}, i18nResource.requireLowercase);

	au.ValidationRules.customRule("requireUppercase", (v: string) => {
		return /[A-Z]+/.test(v);
	}, i18nResource.requireUppercase);

	au.ValidationRules.customRule("requireNonAlphanumeric", (v: string) => {
		return /[\W]+/.test(v);
	}, i18nResource.requireNonAlphanumeric);

	au.ValidationRules.customRule("requiredUniqueChars", (v: string, o, length: number) => {
		if (!v) {
			return false;
		}
		let onlyUnique = "";
		// tslint:disable-next-line:prefer-for-of
		for (let i = 0; i < v.length; ++i) {
			let char = v[i];
			if (onlyUnique.indexOf(char) === -1) {
				onlyUnique += char;
			}
		}
		return onlyUnique.length >= length;
	}, i18nResource.requiredUniqueChars, (length: number) => ({ length }));

	au.ValidationRules.customRule("mustMatch",
		(value, obj, otherPropertyName) =>
			value === null
			|| value === undefined
			|| value === ""
			|| obj[otherPropertyName] === null
			|| obj[otherPropertyName] === undefined
			|| obj[otherPropertyName] === ""
			|| value === obj[otherPropertyName],
			i18nResource.mustMatch,
		otherPropertyName => ({ otherPropertyName })
	);
}

declare module "aurelia-validation" {
	// tslint:disable-next-line:interface-name
	interface FluentRules<TObject, TValue> {
		password(requirements: IPasswordRequirements): FluentRuleCustomizer<TObject, TValue>;
		mustMatch(otherPropertyName: string): FluentRuleCustomizer<TObject, TValue>;
	}

	// tslint:disable-next-line:interface-name
	interface FluentRuleCustomizer<TObject, TValue> {
		password(requirements: IPasswordRequirements): FluentRuleCustomizer<TObject, TValue>;
		mustMatch(otherPropertyName: string): FluentRuleCustomizer<TObject, TValue>;
	}
}

FluentRules.prototype.password = function(r: IPasswordRequirements) {
	let result: FluentRuleCustomizer<any, any>;
	if (r.requiredLength) {
		result = result ? result.satisfiesRule("requiredLength", r.requiredLength) : this.satisfiesRule("requiredLength", r.requiredLength);
	}
	if (r.requireLowercase) {
		result = result ? result.satisfiesRule("requireLowercase") : this.satisfiesRule("requireLowercase");
	}
	if (r.requireUppercase) {
		result = result ? result.satisfiesRule("requireUppercase") : this.satisfiesRule("requireUppercase");
	}
	if (r.requireDigit) {
		result = result ? result.satisfiesRule("requireDigit") : this.satisfiesRule("requireDigit");
	}
	if (r.requireNonAlphanumeric) {
		result = result ? result.satisfiesRule("requireNonAlphanumeric") : this.satisfiesRule("requireNonAlphanumeric");
	}
	if (r.requiredUniqueChars) {
		result = result ? result.satisfiesRule("requiredUniqueChars", r.requiredLength) : this.satisfiesRule("requiredUniqueChars", r.requiredLength);
	}
	if (!result) {
		throw new Error("Password requirements are not set");
	}
	return result;
};

FluentRuleCustomizer.prototype.password = function(r: IPasswordRequirements) {
	let result = this;
	if (r.requiredLength) {
		result = result.satisfiesRule("requiredLength", r.requiredLength);
	}
	if (r.requireLowercase) {
		result = result.satisfiesRule("requireLowercase");
	}
	if (r.requireUppercase) {
		result = result.satisfiesRule("requireUppercase");
	}
	if (r.requireDigit) {
		result = result.satisfiesRule("requireDigit");
	}
	if (r.requireNonAlphanumeric) {
		result = result.satisfiesRule("requireNonAlphanumeric");
	}
	if (r.requiredUniqueChars) {
		result = result.satisfiesRule("requiredUniqueChars", r.requiredLength);
	}
	if (!result) {
		throw new Error("Password requirements are not set");
	}
	return result;
};

FluentRules.prototype.mustMatch = function(otherPropertyName: string) {
	return this.satisfiesRule("mustMatch", otherPropertyName);
};

FluentRuleCustomizer.prototype.mustMatch = function(otherPropertyName: string) {
	return this.satisfiesRule("mustMatch", otherPropertyName);
};
