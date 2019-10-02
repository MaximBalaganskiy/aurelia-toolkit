import * as au from "../../aurelia";
import { AtColoursService } from "../../services/at-colours-service";
export declare class AtColors {
    private mdCs;
    private atCs;
    constructor(mdCs: au.MdColorsService, atCs: AtColoursService);
    headerColor: string;
    headerColorChanged(): void;
    menuButtonColor: string;
    menuButtonColorChanged(): void;
}
