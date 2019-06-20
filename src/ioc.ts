import { iocContainer } from './infrastructure/installer';
import { Boomerang,Ninja,Katana,Shuriken } from './infrastructure/entities';
import { CONTRACTS } from './infrastructure/constants';
import { IFighter,IThrowableWeapon,IWeapon } from './shared/interfaces';

iocContainer.bind<IWeapon>(CONTRACTS.IWeapon).to(Katana);
iocContainer.bind<IThrowableWeapon>(CONTRACTS.IThrowableWeapon).to(Boomerang);
iocContainer.bind<IFighter>(CONTRACTS.IFighter).to(Ninja);

type resolveOnly = { get<T>(serviceIdentifier: symbol): T; };

const container = iocContainer as resolveOnly;

export { container as iocContainer };