import "reflect-metadata";
import { TYPES } from "./src/ioc/types";
import { Ninja, Shuriken, Katana, INinja, IThrowableWeapon, IKatana, Boomerang } from "./src/ioc/ninja";
import { Container } from "inversify";

const container = new Container();

container.bind<IKatana>(TYPES.Katana).to(Katana);
container.bind<IThrowableWeapon>(TYPES.IThrowableWeapon).to(Shuriken);
container.bind<INinja>(TYPES.Ninja).to(Ninja);

let ninja = container.resolve<INinja>(Ninja);

console.log(ninja.fight());
console.log(ninja.sneak());

container.unbind(TYPES.IThrowableWeapon);
container.bind<IThrowableWeapon>(TYPES.IThrowableWeapon).to(Boomerang);
ninja = container.get<INinja>(TYPES.Ninja);

console.log(ninja.fight());
console.log(ninja.sneak());