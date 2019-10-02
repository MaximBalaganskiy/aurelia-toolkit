import * as moment from "moment";
export declare class DateValueConverter {
    toView(value: string | Date | moment.Moment, format: string): string;
    fromView(value: string): Date;
}
