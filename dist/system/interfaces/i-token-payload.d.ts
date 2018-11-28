export interface ITokenPayload {
    family_name: string;
    given_name: string;
    email: string;
    role?: string | string[];
    permission?: string | string[];
    exp: number;
    status: string;
    nameid: string;
}
