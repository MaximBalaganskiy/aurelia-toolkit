import * as au from "../aurelia";
import { IServerDateProvider } from "../interfaces/i-server-date-provider";

@au.autoinject
export class DateService {
	constructor(private dateClient: IServerDateProvider) {
	}

	now(): Date {
		if (this.differenceWithServer === undefined) {
			throw new Error("DateService is not initialised");
		}
		else {
			return new Date(Date.now() - this.differenceWithServer);
		}
	}

	momentNow(): au.moment.Moment {
		return au.moment(this.now());
	}

	differenceWithServer: number = undefined;

	async initialise(): Promise<void> {
		let serverDate = await this.dateClient.getServerDate();
		this.differenceWithServer = Date.now() - serverDate.getTime();
	}
}
