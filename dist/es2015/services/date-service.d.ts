import { IServerDateProvider } from "../interfaces/i-server-date-provider";
export declare class DateService {
    private dateClient;
    constructor(dateClient: IServerDateProvider);
    now(): Date;
    differenceWithServer: number;
    getServerDate(): Promise<Date>;
}
