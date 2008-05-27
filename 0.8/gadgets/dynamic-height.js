/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview This library augments gadgets.window with functionality
 * to change the height of a gadget dynamically.
 */

/**
 * @static
 * @class Provides operations for getting information about and modifying the
 *     window the gadget is placed in.
 * @name gadgets.window
 */
gadgets.window = gadgets.window || {};

/**
 * Detects the inner dimensions of a frame.
 * See: http://www.quirksmode.org/viewport/compatibility.html for more
 * information.
 * @returns {Object} An object with width and height properties.
 * @member gadgets.window
 */
gadgets.window.getViewportDimensions = function() {};

/**
 * Adjusts the gadget height
 * @param {Number} opt_height An optional preferred height in pixels. If not
 *     specified, will attempt to fit the gadget to its content.
 * @member gadgets.window
 */
gadgets.window.adjustHeight = function(opt_height) {};

