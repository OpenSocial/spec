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
 * @fileoverview Library for creating small dismissible messages in gadgets.
 * Typical use cases:
 * <ul>
 * <li> status messages, e.g. loading, saving, etc.
 * <li> promotional messages, e.g. new features, new gadget, etc.
 * <li> debug/error messages, e.g. bad input, failed connection to server
 * </ul>
 */

/**
 * @class MiniMessage class.
 *
 * @description Used to create messages that will appear to the user within the
 *     gadget.
 * @param {String} opt_moduleId Optional module Id
 * @param {Element} opt_container Optional HTML container element where
 *                                mini-messages will appear.
 */
gadgets.MiniMessage = function(opt_moduleId, opt_container) {};

/**
 * Creates a dismissible message with an [[]x] icon that allows users to dismiss
 * the message. When the message is dismissed, it is removed from the DOM
 * and the optional callback function, if defined, is called.
 * @param {String | Object} message The message as an HTML string or DOM element
 * @param {Function} opt_callback Optional callback function to be called when
 *                                the message is dismissed
 * @return {Element} HTML element of the created message
 */
gadgets.MiniMessage.prototype.createDismissibleMessage = function(message,
    opt_callback) {};

/**
 * Creates a message that displays for the specified number of seconds.
 * When the timer expires,
 * the message is dismissed and the optional callback function is executed.
 * @param {String | Object} message The message as an HTML string or DOM element
 * @param {number} seconds Number of seconds to wait before dismissing
 *                         the message
 * @param {Function} opt_callback Optional callback function to be called when
 *                                the message is dismissed
 * @return {Element} HTML element of the created message
 */
gadgets.MiniMessage.prototype.createTimerMessage = function(message, seconds,
    opt_callback) {};

/**
 * Creates a static message that can only be dismissed programmatically
 * (by calling dismissMessage()).
 * @param {String | Object} message The message as an HTML string or DOM element
 * @return {Element} HTML element of the created message
 */
gadgets.MiniMessage.prototype.createStaticMessage = function(message) {};

/**
 * Dismisses the specified message.
 * @param {Element} message HTML element of the message to remove
 */
gadgets.MiniMessage.prototype.dismissMessage = function(message) {};