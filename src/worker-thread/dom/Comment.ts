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

import { CharacterData } from './CharacterData';
import { NumericBoolean } from '../../utils';
import { TransferrableKeys } from '../../transfer/TransferrableKeys';
import { HydrateableNode, NodeType } from '../../transfer/TransferrableNodes';
import { store as storeString } from '../strings';

// @see https://developer.mozilla.org/en-US/docs/Web/API/Comment
export class Comment extends CharacterData {
  constructor(data: string) {
    super(data, NodeType.COMMENT_NODE, '#comment');
    this._transferredFormat_ = {
      [TransferrableKeys._index_]: this._index_,
      [TransferrableKeys.transferred]: NumericBoolean.TRUE,
    };
    this._creationFormat_ = {
      [TransferrableKeys._index_]: this._index_,
      [TransferrableKeys.transferred]: NumericBoolean.FALSE,
      [TransferrableKeys.nodeType]: NodeType.COMMENT_NODE,
      [TransferrableKeys.nodeName]: storeString('#comment'),
      [TransferrableKeys.textContent]: storeString(this.data),
    };
  }

  public hydrate(): HydrateableNode {
    return this._creationFormat_;
  }

  /**
   * textContent getter, retrieves underlying CharacterData data.
   * This is a different implmentation than DOMv1-4 APIs, but should be transparent to Frameworks.
   */
  get textContent(): string {
    return this.data;
  }

  /**
   * textContent setter, mutates underlying CharacterData data.
   * This is a different implmentation than DOMv1-4 APIs, but should be transparent to Frameworks.
   * @param value new value
   */
  set textContent(value: string) {
    // Mutation Observation is performed by CharacterData.
    this.nodeValue = value;
  }

  /**
   *
   * @param deep
   */
  public cloneNode(deep: boolean = false): Comment {
    return this.ownerDocument.createComment(this.data);
  }
}
