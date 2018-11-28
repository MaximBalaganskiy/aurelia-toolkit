import * as au from "../aurelia";
import { ITokenPayload } from "../interfaces/i-token-payload";

let logger = au.getLogger("AuthService");

export class AuthService extends au.AuthService {
	isAuthenticatedAsync(): Promise<boolean> {
		(this.authentication as any).responseAnalyzed = false;

		let authenticated = this.authentication.isAuthenticated();

		// auto-update token?
		if (!authenticated
			&& this.config.autoUpdateToken
			&& this.authentication.getAccessToken()
			&& this.authentication.getRefreshToken()
		) {
			return this.updateToken()
				.catch(error => logger.warn(error))
				.then(() => this.authenticated);
		}

		return Promise.resolve(authenticated);
	}

	getTokenPayload(): ITokenPayload {
		return super.getTokenPayload() as ITokenPayload;
	}
}
