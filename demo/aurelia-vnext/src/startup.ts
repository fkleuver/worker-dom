import { BasicConfiguration } from '@aurelia/jit';
import { Aurelia } from '@aurelia/runtime';
import { App } from './app';

const au: Aurelia = new Aurelia();
au.register(BasicConfiguration);
au.app({
  host: document.querySelector('app'),
  component: new App(),
});
au.start();
