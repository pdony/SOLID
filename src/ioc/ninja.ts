import { TYPES } from './types';
import { injectable, inject } from 'inversify';

export interface INinja {
    fight(): string;
    sneak(): string;
}

@injectable()
export class Ninja implements INinja {

    private _katana: Katana;
    private _throwableWeapon: IThrowableWeapon;

    constructor(
        @inject(TYPES.Katana) katana: Katana,
        @inject(TYPES.IThrowableWeapon) throwableWeapon: IThrowableWeapon
    ) {
        this._katana = katana;
        this._throwableWeapon = throwableWeapon;
    }

    fight(): string {
        return this._katana.hit();
    }
    sneak(): string {
        return this._throwableWeapon.throw();
    }
}

export interface IKatana {
    hit(): string;
}

@injectable()
export class Katana implements IKatana {
    hit(): string {
        return "Katana hit";
    }

}

export interface IThrowableWeapon {
    throw(): string;
}

@injectable()
export class Shuriken implements IThrowableWeapon {
    throw() {
        return "Shuriken throw";
    }
}

@injectable()
export class Boomerang implements IThrowableWeapon {
    throw() {
        return "Boomerang throw";
    }
}