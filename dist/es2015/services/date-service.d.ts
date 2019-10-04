import * as au from "../aurelia";
import { IServerDateProvider } from "../interfaces/i-server-date-provider";
export declare class DateService {
    private dateClient;
    constructor(dateClient: IServerDateProvider);
    now(): Date;
    momentNow(): au.moment.Moment;
    differenceWithServer: number;
    initialise(): Promise<void>;
}
