import { IoCInjectable } from "../../installer";
import { IThrowableWeapon } from '../../../shared/interfaces';

@IoCInjectable()
export class Boomerang implements IThrowableWeapon {
    throw() {
        return "Boomerang throw";
    }
}