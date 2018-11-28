export abstract class IServerDateProvider {
	abstract getServerDate(): Promise<Date>;
}
