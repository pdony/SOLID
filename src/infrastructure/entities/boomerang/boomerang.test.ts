import { IThrowableWeapon } from "../../../shared/interfaces";
import { Boomerang } from "./boomerang";

describe("Boomerang", () => {

    let boomerang: IThrowableWeapon;

    beforeEach(() => {
        
        boomerang = new Boomerang();
    })

    test("throw success",() => {
        expect(boomerang.throw()).toBe("Boomerang throw");
    })
});