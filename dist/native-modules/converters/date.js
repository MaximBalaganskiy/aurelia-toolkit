import * as moment from "moment";
export class DateValueConverter {
    toView(value, format) {
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
    fromView(value) {
        if (!value) {
            return undefined;
        }
        return moment(value, "DD/MM/YYYY").toDate();
    }
}
