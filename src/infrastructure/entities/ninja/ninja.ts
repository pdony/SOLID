import { IoCInjectable, IoCInject } from "../../installer";
import { IWeapon } from "../../../shared/interfaces/IWeapon";
import { IFighter } from "../../../shared/interfaces/IFighter";
import { IThrowableWeapon } from "../../../shared/interfaces/IThrowableWeapon";
import { CONTRACTS } from "../../constants/identifiers";

@IoCInjectable()
export class Ninja implements IFighter {

    private _weapon: IWeapon;
    private _throwableWeapon: IThrowableWeapon;

    constructor(
        @IoCInject(CONTRACTS.IWeapon) weapon: IWeapon,
        @IoCInject(CONTRACTS.IThrowableWeapon) throwableWeapon: IThrowableWeapon
    ) {
        this._weapon = weapon;
        this._throwableWeapon = throwableWeapon;
    }

    fight(): string {
        return this._weapon.hit();
    }
    sneak(): string {
        return this._throwableWeapon.throw();
    }
}