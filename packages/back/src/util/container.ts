import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

export const container = new Container({
  defaultScope: 'Singleton',
  skipBaseClassChecks: true,
});

export const { lazyInject } = getDecorators(container);
