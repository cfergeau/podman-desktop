/**********************************************************************
 * Copyright (C) 2022 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import type * as extensionApi from '@podman-desktop/api';
import { Emitter } from './events/emitter';

export class CancellationTokenImpl implements extensionApi.CancellationToken {
  isCancellationRequested: boolean;

  private readonly cancellationEmitter = new Emitter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCancellationRequested: extensionApi.Event<any> = this.cancellationEmitter.event;

  constructor() {
    this.isCancellationRequested = false;
  }
}
