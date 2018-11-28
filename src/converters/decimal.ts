import * as numeral from "numeral";

export class DecimalValueConverter {
	toView(value: string | number): string | undefined {
		if (!value) {
			return undefined;
		}
		else {
			return numeral(value).format("0,0.00");
		}
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
