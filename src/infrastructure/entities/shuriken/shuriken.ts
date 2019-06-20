import { IoCInjectable } from "../../installer";
import { IThrowableWeapon } from "../../../shared/interfaces";

@IoCInjectable()
export class Shuriken implements IThrowableWeapon {
    throw() {
        return "Shuriken throw";
    }
}