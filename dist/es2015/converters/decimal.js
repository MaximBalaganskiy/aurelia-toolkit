import * as numeral from "numeral";
export class DecimalValueConverter {
    toView(value) {
        if (!value) {
            return undefined;
        }
        else {
            return numeral(value).format("0,0.00");
        }
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
