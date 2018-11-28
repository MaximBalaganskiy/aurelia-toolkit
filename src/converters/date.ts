import * as moment from "moment";

export class DateValueConverter {
	toView(value: string | Date | moment.Moment, format: string): string {
		if (!value) {
			return "";
		}
		const m = moment(value);
		if (m.isAfter("9999-12-31")) {
			return "";
		}
		else {
			if (!format) {
				return m.toDate().toLocaleDateString("en-AU");
			}
			else {
				return m.format(format);
			}
		}
	}

	fromView(value: string): Date {
		if (!value) {
			return undefined;
		}
		return moment(value, "DD/MM/YYYY").toDate();
	}
}
