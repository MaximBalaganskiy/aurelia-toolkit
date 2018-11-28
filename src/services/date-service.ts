import * as au from "../aurelia";
import { IServerDateProvider } from "../interfaces/i-server-date-provider";

@au.autoinject
export class DateService {
	constructor(private dateClient: IServerDateProvider) {
	}

	now(): Date {
		return new Date();
	}

	differenceWithServer: number = undefined;

	async getServerDate(): Promise<Date> {
		if (this.differenceWithServer === undefined) {
			let serverDate = await this.dateClient.getServerDate();
			this.differenceWithServer = this.now().getTime() - serverDate.getTime();
			return serverDate;
		}
		else {
			return new Date(this.now().getTime() - this.differenceWithServer);
		}
	}
}
