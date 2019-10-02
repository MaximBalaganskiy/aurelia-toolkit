import { IApiException } from "../interfaces/i-api-exception";
export declare class Exception implements Error {
    name: string;
    message: string;
    stack?: string;
    class: string;
    data: any;
    constructor(apiException?: IApiException);
}
