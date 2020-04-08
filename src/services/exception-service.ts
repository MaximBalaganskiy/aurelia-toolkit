import { Exception } from "../exceptions/exception";
import { IApiException } from "../interfaces/i-api-exception";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ForbiddenException } from "../exceptions/forbidden";
import { HttpClient } from "aurelia-fetch-client";
import { autoinject } from "aurelia-framework";

@autoinject
export class ExceptionService {
	constructor(private http: HttpClient) { }

	registry = new Map<string, typeof Exception>();

	register(className: string, exceptionType: typeof Exception) {
		this.registry.set(className, exceptionType);
	}

	throw(apiException: IApiException) {
		let exceptionType = this.registry.get(apiException.ClassName);
		if (!exceptionType) {
			exceptionType = Exception;
		}
		throw new exceptionType(apiException);
	}

	async assertResponse(r: Response): Promise<Response> {
		if (r.ok) {
			return r;
		}
		else if (r.status === 401) {
			throw new UnauthorizedException();
		}
		else if (r.status === 403) {
			throw new ForbiddenException();
		}
		else {
			return r.json().then<any>((d: IApiException) => this.throw(d));
		}
	}

	addHttpInterceptor() {
		this.http.configure(c => {
			c.withInterceptor({ response: r => this.assertResponse(r) });
		});
	}

}
