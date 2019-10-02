export var FilterOperator;
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