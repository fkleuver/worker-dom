/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import test from 'ava';
import { Element } from '../../worker-thread/dom/Element';
import { NodeType, HTML_NAMESPACE } from '../../transfer/TransferrableNodes';

test.beforeEach(t => {
  t.context = {
    node: new Element(NodeType.ELEMENT_NODE, 'div', HTML_NAMESPACE),
    child: new Element(NodeType.ELEMENT_NODE, 'div', HTML_NAMESPACE),
    childTwo: new Element(NodeType.ELEMENT_NODE, 'p', HTML_NAMESPACE),
    childThree: new Element(NodeType.ELEMENT_NODE, 'p', HTML_NAMESPACE),
  };
});

test('single direct child', t => {
  const { node, child } = t.context as { node: Element; child: Element };

  node.appendChild(child);

  t.is(node.getElementsByTagName('div').length, 1);
  t.is(node.getElementsByTagName('*').length, 1);
  t.is(node.getElementsByTagName('p').length, 0);
  t.deepEqual(node.getElementsByTagName('div'), [child]);
  t.deepEqual(node.getElementsByTagName('*'), [child]);
});

test('multiple direct children', t => {
  const { node, child, childTwo } = t.context as { node: Element; child: Element; childTwo: Element };

  node.appendChild(child);
  node.appendChild(childTwo);

  t.is(node.getElementsByTagName('div').length, 1);
  t.is(node.getElementsByTagName('p').length, 1);
  t.is(node.getElementsByTagName('*').length, 2);
  t.is(node.getElementsByTagName('amp-state').length, 0);
  t.deepEqual(node.getElementsByTagName('div'), [child]);
  t.deepEqual(node.getElementsByTagName('p'), [childTwo]);
  t.deepEqual(node.getElementsByTagName('*'), [child, childTwo]);
});

test('tree with depth > 1', t => {
  const { node, child, childTwo, childThree } = t.context as { node: Element; child: Element; childTwo: Element; childThree: Element };

  child.appendChild(childTwo);
  child.appendChild(childThree);
  node.appendChild(child);

  t.is(node.getElementsByTagName('div').length, 1);
  t.is(node.getElementsByTagName('p').length, 2);
  t.is(node.getElementsByTagName('*').length, 3);
  t.is(node.getElementsByTagName('amp-state').length, 0);
  t.deepEqual(node.getElementsByTagName('div'), [child]);
  t.deepEqual(node.getElementsByTagName('p'), [childTwo, childThree]);
  t.deepEqual(node.getElementsByTagName('*'), [child, childTwo, childThree]);
});
