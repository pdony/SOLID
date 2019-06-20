import { Container, injectable, inject } from 'inversify';



@injectable()
class Katana {
    public hit() {
        return "cut!";
    }
}

@injectable()
class Shuriken {
    public throw() {
        return "hit!";
    }
}

interface INinja {

}

@injectable()
class Ninja implements INinja {

    private _katana: Katana;
    private _shuriken: Shuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); };
    public sneak() { return this._shuriken.throw(); };

}

const container = new Container();
container.bind<Ninja>(Ninja).to(Ninja);
container.bind<Katana>(Katana).to(Katana);
container.bind<Shuriken>(Shuriken).to(Shuriken);
// container.bind<INinja>()


// container.resolve<>