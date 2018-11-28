import { ClientEditor } from "./client-editor";

export interface ISettingInfo {
	key?: string | undefined;
	value?: any | undefined;
	typeName?: string | undefined;
	name?: string | undefined;
	description?: string | undefined;
	clientEditor: ClientEditor;
	children?: ISettingInfo[] | undefined;
}
