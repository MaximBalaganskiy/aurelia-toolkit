import * as numeral from "numeral";
export class CurrencyValueConverter {
    toView(value) {
        return numeral(value).format("$0,0.00");
    }
    fromView(value) {
        throw new Error("Not implemented");
    }
}
