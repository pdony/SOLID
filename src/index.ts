/**
 * This is the entry point of the application
 */

import { iocContainer } from './ioc';
import { sum, random1to10 } from './foo';
import { IWeapon, IFighter } from './shared/interfaces';
import { CONTRACTS } from './infrastructure/constants';

const numberBetween1to50 = sum(
    random1to10(),
    random1to10(),
    random1to10(),
    random1to10(),
    random1to10()
    );

console.log(numberBetween1to50);

const ninja = iocContainer.get<IFighter>(CONTRACTS.IFighter);

console.log(ninja.fight());
console.log(ninja.sneak());
