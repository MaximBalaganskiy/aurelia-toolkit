import * as au from "../aurelia";

@au.autoinject
export class TwColoursService {
	constructor(public colorsService: au.MdColorsService) { }

	headerColor: string = this.colorsService.primaryColor ;
	menuButtonColor: string = "white";
}
