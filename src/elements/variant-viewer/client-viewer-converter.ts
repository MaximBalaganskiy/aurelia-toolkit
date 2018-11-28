import { ClientEditor } from "../settings-editor/client-editor";

export class ClientViewerValueConverter {
	toView(value: ClientEditor): string {
		switch (value) {
			case ClientEditor.Boolean: return "boolean";
			case ClientEditor.PaymentProvider: return "payment-provider";
			case ClientEditor.Password: return "password";
			case ClientEditor.Date: return "date";
			default: return "string";
		}
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
