import "reflect-metadata";
import { Container, injectable, inject } from 'inversify';

class IoCContainer extends Container {}
const IoCInjectable = injectable;

// Override d.ts for @inject decorator to limit input to symbol only.
const IoCInject = inject as (serviceIdentifier: symbol) => (target: any, targetKey: string, index?: number | undefined) => void;

export { IoCContainer, IoCInjectable, IoCInject }