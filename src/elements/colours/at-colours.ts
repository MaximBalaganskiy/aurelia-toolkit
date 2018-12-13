import * as au from "../../aurelia";
import { AtColoursService } from "../../services/at-colours-service";

@au.customElement("at-colors")
export class AtColors {
	constructor(private mdCs: au.MdColorsService, private atCs: AtColoursService) { }

	@au.bindable
	headerColor: string = this.atCs.headerColor;
	headerColorChanged() {
		this.atCs.headerColor = this.headerColor;
	}

	@au.bindable
	menuButtonColor: string = this.atCs.menuButtonColor;
	menuButtonColorChanged() {
		this.atCs.menuButtonColor = this.menuButtonColor;
	}
}
