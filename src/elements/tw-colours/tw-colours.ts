import * as au from "../../aurelia";
import { TwColoursService } from "../../services/tw-colours-service";

@au.customElement("tw-colors")
export class TwColors {
	constructor(private colorsService: TwColoursService) { }

	@au.bindable
	headerColor: string = this.colorsService.headerColor;
	headerColorChanged() {
		this.colorsService.headerColor = this.headerColor;
	}

	@au.bindable
	menuButtonColor: string = this.colorsService.menuButtonColor;
	menuButtonColorChanged() {
		this.colorsService.menuButtonColor = this.menuButtonColor;
	}

	async attached() {
		// let css = this.loader.loadText("!css-loader!sass-loader!./tw-colours.scss").toString();
		let css = require("!css-loader!sass-loader!./tw-colours.scss").toString();
		css = css
			.replace(/secondaryColor/g, this.colorsService.colorsService.secondaryColor)
			.replace(/errorColor/g, this.colorsService.colorsService.errorColor)
			.replace(/primaryColor/g, this.colorsService.colorsService.primaryColor)
			.replace(/successColor/g, this.colorsService.colorsService.successColor)
			.replace(/headerColor/g, this.colorsService.headerColor)
			.replace(/menuButtonColor/g, this.colorsService.menuButtonColor);
		au.DOM.injectStyles(css);
	}
}
