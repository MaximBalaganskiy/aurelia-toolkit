import * as numeral from "numeral";

export class CurrencyValueConverter {
	toView(value: string | number): string {
		return numeral(value).format("$0,0.00");
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
