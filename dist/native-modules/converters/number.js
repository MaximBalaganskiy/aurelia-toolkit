import * as numeral from "numeral";
export class NumberValueConverter {
    toView(value) {
        if (!value) {
            return undefined;
        }
        else {
            return numeral(value).format("0");
        }
    }
    fromView(value) {
        if (!value) {
            return undefined;
        }
        return numeral(value).value();
    }
}
