define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ClientEditor;
    (function (ClientEditor) {
        ClientEditor[ClientEditor["String"] = 0] = "String";
        ClientEditor[ClientEditor["Textarea"] = 1] = "Textarea";
        ClientEditor[ClientEditor["Number"] = 2] = "Number";
        ClientEditor[ClientEditor["Boolean"] = 3] = "Boolean";
        ClientEditor[ClientEditor["Select"] = 4] = "Select";
        ClientEditor[ClientEditor["Password"] = 5] = "Password";
        ClientEditor[ClientEditor["Colour"] = 6] = "Colour";
        ClientEditor[ClientEditor["Date"] = 7] = "Date";
    })(ClientEditor = exports.ClientEditor || (exports.ClientEditor = {}));
});
