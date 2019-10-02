define(["require", "exports", "../aurelia", "aurelia-validation"], function (require, exports, au, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function addCustomValidationRules(i18n) {
        let i18nResource = i18n.tr("aurelia-toolkit:validation", { returnObjects: true });
        au.ValidationRules.customRule("requiredLength", (v, o, length) => {
            return v && v.length >= length;
        }, i18nResource.requiredLength, (length) => ({ length }));
        au.ValidationRules.customRule("requireDigit", (v) => {
            return /[0-9]+/.test(v);
        }, i18nResource.requireDigit);
        au.ValidationRules.customRule("requireLowercase", (v) => {
            return /[a-z]+/.test(v);
        }, i18nResource.requireLowercase);
        au.ValidationRules.customRule("requireUppercase", (v) => {
            return /[A-Z]+/.test(v);
        }, i18nResource.requireUppercase);
        au.ValidationRules.customRule("requireNonAlphanumeric", (v) => {
            return /[\W]+/.test(v);
        }, i18nResource.requireNonAlphanumeric);
        au.ValidationRules.customRule("requiredUniqueChars", (v, o, length) => {
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
        }, i18nResource.requiredUniqueChars, (length) => ({ length }));
        au.ValidationRules.customRule("mustMatch", (value, obj, otherPropertyName) => value === null
            || value === undefined
            || value === ""
            || obj[otherPropertyName] === null
            || obj[otherPropertyName] === undefined
            || obj[otherPropertyName] === ""
            || value === obj[otherPropertyName], i18nResource.mustMatch, otherPropertyName => ({ otherPropertyName }));
    }
    exports.addCustomValidationRules = addCustomValidationRules;
    aurelia_validation_1.FluentRules.prototype.password = function (r) {
        let result;
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
            result = result ? result.satisfiesRule("requiredUniqueChars", r.requiredUniqueChars) : this.satisfiesRule("requiredUniqueChars", r.requiredUniqueChars);
        }
        if (!result) {
            throw new Error("Password requirements are not set");
        }
        return result;
    };
    aurelia_validation_1.FluentRuleCustomizer.prototype.password = function (r) {
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
            result = result.satisfiesRule("requiredUniqueChars", r.requiredUniqueChars);
        }
        if (!result) {
            throw new Error("Password requirements are not set");
        }
        return result;
    };
    aurelia_validation_1.FluentRules.prototype.mustMatch = function (otherPropertyName) {
        return this.satisfiesRule("mustMatch", otherPropertyName);
    };
    aurelia_validation_1.FluentRuleCustomizer.prototype.mustMatch = function (otherPropertyName) {
        return this.satisfiesRule("mustMatch", otherPropertyName);
    };
});
