/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';
import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoActions from './data/TodoActions';

TodoActions.addTodo("cuongnt");
TodoActions.addTodo("cuongnt 1");
TodoActions.addTodo("cuongnt 2");
ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));