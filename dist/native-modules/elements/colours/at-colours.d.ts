import { AtColoursService } from "../../services/at-colours-service";
export declare class AtColors {
    private colorsService;
    constructor(colorsService: AtColoursService);
    headerColor: string;
    headerColorChanged(): void;
    menuButtonColor: string;
    menuButtonColorChanged(): void;
    attached(): Promise<void>;
}
