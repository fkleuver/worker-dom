import { customElement, TargetedInstructionType } from '@aurelia/runtime';
//import template from './app.html';

const template = document.createElement('template');
const div = document.createElement('div');
const marker = document.createElement('au-marker');
marker.classList.add('au');
const text = document.createTextNode(' ');
div.appendChild(marker);
div.appendChild(text);
template.appendChild(div);

@customElement({
  name: 'app',
  build: { required: false },
  template,
  instructions: [[{ type: TargetedInstructionType.textBinding, from: 'message' }]],
})
export class App {
  message = 'Hello World!';
}
