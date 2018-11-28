System.register([], function (exports_1, context_1) {
    "use strict";
    var FilterOperator;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (FilterOperator) {
                FilterOperator[FilterOperator["Like"] = 0] = "Like";
                FilterOperator[FilterOperator["NotLike"] = 1] = "NotLike";
                FilterOperator[FilterOperator["Is"] = 2] = "Is";
                FilterOperator[FilterOperator["IsNot"] = 3] = "IsNot";
                FilterOperator[FilterOperator["LessThan"] = 4] = "LessThan";
                FilterOperator[FilterOperator["GreaterThan"] = 5] = "GreaterThan";
                FilterOperator[FilterOperator["IsBefore"] = 6] = "IsBefore";
                FilterOperator[FilterOperator["IsAfter"] = 7] = "IsAfter";
            })(FilterOperator || (FilterOperator = {}));
            exports_1("FilterOperator", FilterOperator);
        }
    };
});
