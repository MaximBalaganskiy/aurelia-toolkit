import * as au from "../aurelia";
let logger = au.getLogger("AuthService");
export class AuthService extends au.AuthService {
    isAuthenticatedAsync() {
        this.authentication.responseAnalyzed = false;
        let authenticated = this.authentication.isAuthenticated();
        // auto-update token?
        if (!authenticated
            && this.config.autoUpdateToken
            && this.authentication.getAccessToken()
            && this.authentication.getRefreshToken()) {
            return this.updateToken()
                .catch(error => logger.warn(error))
                .then(() => this.authenticated);
        }
        return Promise.resolve(authenticated);
    }
    getTokenPayload() {
        return super.getTokenPayload();
    }
}
