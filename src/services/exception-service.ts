import { Exception } from "../exceptions/exception";
import { IApiException } from "../interfaces/i-api-exception";

export class ExceptionService {
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
}
