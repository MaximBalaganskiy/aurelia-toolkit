import * as au from "../aurelia";
import { ITokenPayload } from "../interfaces/i-token-payload";
export declare class AuthService extends au.AuthService {
    isAuthenticatedAsync(): Promise<boolean>;
    getTokenPayload(): ITokenPayload;
}
