export class PasswordValueConverter {
	toView(value: string, isPassword: boolean): string {
		return isPassword ? (value.length ? Array(value.length + 1).join("•") : "") : value;
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
