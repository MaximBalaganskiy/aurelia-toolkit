var AbnValueConverter = /** @class */ (function () {
    function AbnValueConverter() {
    }
    AbnValueConverter.prototype.toView = function (value) {
        if (!value) {
            return "";
        }
        return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
    };
    AbnValueConverter.prototype.fromView = function (value) {
        throw new Error("Not implemented");
    };
    return AbnValueConverter;
}());
export { AbnValueConverter };
//# sourceMappingURL=abn.js.map