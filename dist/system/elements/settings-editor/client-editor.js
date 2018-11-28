System.register([], function (exports_1, context_1) {
    "use strict";
    var ClientEditor;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (ClientEditor) {
                ClientEditor[ClientEditor["String"] = 0] = "String";
                ClientEditor[ClientEditor["Textarea"] = 1] = "Textarea";
                ClientEditor[ClientEditor["Number"] = 2] = "Number";
                ClientEditor[ClientEditor["Boolean"] = 3] = "Boolean";
                ClientEditor[ClientEditor["Select"] = 4] = "Select";
                ClientEditor[ClientEditor["Password"] = 5] = "Password";
                ClientEditor[ClientEditor["Colour"] = 6] = "Colour";
                ClientEditor[ClientEditor["Date"] = 7] = "Date";
            })(ClientEditor || (ClientEditor = {}));
            exports_1("ClientEditor", ClientEditor);
        }
    };
});
