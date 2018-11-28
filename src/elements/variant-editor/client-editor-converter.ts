import { ClientEditor } from "../settings-editor/client-editor";

export class ClientEditorValueConverter {
	toView(value: ClientEditor): string {
		switch (value) {
			case ClientEditor.Boolean: return "boolean";
			case ClientEditor.Number: return "number";
			case ClientEditor.PaymentProvider: return "payment-provider";
			case ClientEditor.String: return "string";
			case ClientEditor.Textarea: return "textarea";
			case ClientEditor.Password: return "password";
			case ClientEditor.Date: return "date";
			default: return "string";
		}
	}

	fromView(value: string): number {
		throw new Error("Not implemented");
	}
}
