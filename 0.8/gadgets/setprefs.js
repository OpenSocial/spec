/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

/**
 * @fileoverview This library augments gadgets.Prefs with functionality
 * to store prefs dynamically.
 */

/**
 * Stores a preference.
 * @param {String | Object} key The pref to store.
 * @param {String} val The values to store.
 * @private This feature is documented in prefs.js
 */
gadgets.Prefs.prototype.set = function(key, value) {};

/**
 * Stores a preference from the given list.
 * @param {String} key The pref to store.
 * @param {Array.<String | Number>} val The values to store.
 * @private This feature is documented in prefs.js
 */
gadgets.Prefs.prototype.setArray = function(key, val) {};

