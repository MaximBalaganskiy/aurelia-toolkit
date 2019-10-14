import { parse, parseISO, format } from "date-fns";

export class DateValueConverter {
	toView(value: string | Date, formatStr: string): string {
		if (!value) {
			return "";
		}
		if (typeof (value) === "string") {
			value = parseISO(value);
		}
		formatStr = formatStr || "DD/MM/YYYY";
		return format(value, formatStr);
	}

	fromView(value: string, formatStr: string): Date {
		if (!value) {
			return undefined;
		}
		formatStr = formatStr || "DD/MM/YYYY";
		return parse(value, formatStr, Date.now());
	}
}
