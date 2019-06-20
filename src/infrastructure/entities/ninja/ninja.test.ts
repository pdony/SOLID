import { IFighter } from "../../../shared/interfaces";
import { Ninja } from "./ninja";

describe("Ninja.", () => {

    let ninja: IFighter;

    beforeEach(() => {
        ninja = new Ninja({ hit: () => "hit" }, { throw: () => "throw" });
    })

    describe("fight(..)", () => {
        test("should success", () => {
            expect(ninja.fight()).toBe("hit");
        });

        test("should fail", () => {
            ninja = new Ninja({ hit: ()=> { throw new Error("Can't hit"); } }, null as any)
            expect(ninja.fight).toThrowError()
        });
    });

    describe("sneak(..)", () => {
        test("should success", () => {
            expect(ninja.sneak()).toBe("throw");
        });

        test("should fail", () => {
            ninja = new Ninja(null as any, { throw: () => { throw new Error("Can't throw"); } })
            expect(ninja.sneak).toThrowError(Error)
        });
    });
});