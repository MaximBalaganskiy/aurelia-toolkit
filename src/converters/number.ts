import * as numeral from "numeral";

export class NumberValueConverter {
	toView(value: string | number): string | undefined {
		if (value === undefined || value === null || value === "") {
			return undefined;
		}
		else {
			return numeral(value).format("0");
		}
	}

	fromView(value: string): number {
		if (!value) {
			return undefined;
		}
		return numeral(value).value();
	}
}
