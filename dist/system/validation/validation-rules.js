System.register(["../aurelia", "aurelia-validation"], function (exports_1, context_1) {
    "use strict";
    var au, aurelia_validation_1;
    var __moduleName = context_1 && context_1.id;
    function addCustomValidationRules(i18n) {
        var i18nResource = i18n.tr("aurelia-toolkit:validation", { returnObjects: true });
        au.ValidationRules.customRule("requiredLength", function (v, o, length) {
            return v && v.length >= length;
        }, i18nResource.requiredLength, function (length) { return ({ length: length }); });
        au.ValidationRules.customRule("requireDigit", function (v) {
            return /[0-9]+/.test(v);
        }, i18nResource.requireDigit);
        au.ValidationRules.customRule("requireLowercase", function (v) {
            return /[a-z]+/.test(v);
        }, i18nResource.requireLowercase);
        au.ValidationRules.customRule("requireUppercase", function (v) {
            return /[A-Z]+/.test(v);
        }, i18nResource.requireUppercase);
        au.ValidationRules.customRule("requireNonAlphanumeric", function (v) {
            return /[\W]+/.test(v);
        }, i18nResource.requireNonAlphanumeric);
        au.ValidationRules.customRule("requiredUniqueChars", function (v, o, length) {
            if (!v) {
                return false;
            }
            var onlyUnique = "";
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < v.length; ++i) {
                var char = v[i];
                if (onlyUnique.indexOf(char) === -1) {
                    onlyUnique += char;
                }
            }
            return onlyUnique.length >= length;
        }, i18nResource.requiredUniqueChars, function (length) { return ({ length: length }); });
        au.ValidationRules.customRule("mustMatch", function (value, obj, otherPropertyName) {
            return value === null
                || value === undefined
                || value === ""
                || obj[otherPropertyName] === null
                || obj[otherPropertyName] === undefined
                || obj[otherPropertyName] === ""
                || value === obj[otherPropertyName];
        }, i18nResource.mustMatch, function (otherPropertyName) { return ({ otherPropertyName: otherPropertyName }); });
    }
    exports_1("addCustomValidationRules", addCustomValidationRules);
    return {
        setters: [
            function (au_1) {
                au = au_1;
            },
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }
        ],
        execute: function () {
            aurelia_validation_1.FluentRules.prototype.password = function (r) {
                var result;
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
                var result = this;
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
        }
    };
});
//# sourceMappingURL=validation-rules.js.map