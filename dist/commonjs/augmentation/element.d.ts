import { NextBackButtons } from "../elements/next-back-buttons/next-back-buttons";
import { Datepicker } from "../elements/datepicker/datepicker";
import { AlertModal } from "../elements/alert-modal/alert-modal";
import { Controller } from "aurelia-framework";
import { InputmaskCustomAttribute } from "aurelia-inputmask";
declare module "aurelia-materialize-bridge/dist/commonjs/augmentation/element" {
    interface IElementAu {
        "next-back-buttons": IController<NextBackButtons>;
        "datepicker": IController<Datepicker>;
        "alert-modal": IController<AlertModal>;
        "inputmask": IController<InputmaskCustomAttribute>;
        controller: Controller;
    }
}
