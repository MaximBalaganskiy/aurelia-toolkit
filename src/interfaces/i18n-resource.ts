export interface I18NResource {
	alert?: {
		ok: string;
		yes: string;
		no: string;
	};

	validation?: {
		requiredLength: string;
		requireDigit: string;
		requireLowercase: string;
		requireUppercase: string;
		requireNonAlphanumeric: string;
		requiredUniqueChars: string;
		mustMatch: string;
	};

	filter?: {
		operator?: {
			like: string;
			notLike: string;
			is: string;
			isNot: string;
			isBefore: string;
			isAfter: string;
		},
		search: string;
		all: string;
		addFilter: string;
		operatorWidth: string;
	};
}
