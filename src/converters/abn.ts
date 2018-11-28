export class AbnValueConverter {
	toView(value: string): string {
		if (!value) {
			return "";
		}
		return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
