import { IoCInjectable } from "../../installer";
import { IWeapon } from "../../../shared/interfaces";

@IoCInjectable()
export class Katana implements IWeapon {
    hit(): string {
        return "Katana hit";
    }

}