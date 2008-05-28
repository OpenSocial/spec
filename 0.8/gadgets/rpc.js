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
 * @fileoverview Remote procedure call library for gadget-to-container,
 * container-to-gadget, and gadget-to-gadget communication.
 */

/**
 * @static
 * @class Provides operations for making remote procedure calls
 * for gadget-to-container,
 * container-to-gadget, and gadget-to-gadget communication.
 * @name gadgets.rpc
 */
gadgets.rpc = function() {
  return /** @scope gadgets.rpc */ {
    /**
     * Registers an RPC service.
     * @param {String} serviceName Service name to register
     * @param {Function} handler Service handler
     *
     * @member gadgets.rpc
     */
    register: function(serviceName, handler) {},

  /**
     * Unregisters an RPC service.
     * @param {String} serviceName Service name to unregister
     *
     * @member gadgets.rpc
     */
    unregister: function(serviceName) {},

  /**
     * Registers a default service handler to process all unknown
     * remote procedure calls, which fail silently by default.
     * @param {Function} handler Service handler
     *
     * @member gadgets.rpc
     */
    registerDefault: function(handler) {},

  /**
     * Unregisters the default service handler. Future unknown remote procedure
     * calls will fail silently.
     *
     * @member gadgets.rpc
     */
    unregisterDefault: function() {},

  /**
     * Calls an RPC service.
     * @param {String} targetId ID of the RPC service provider;
     *                          empty if calling the parent container
     * @param {String} serviceName Service name to call
     * @param {Function|null} callback Callback function (if any) to process
     *                                 the return value of the RPC request
     * @param {*} var_args Parameters for the RPC request
     *
     * @member gadgets.rpc
     */
    call: function(targetId, serviceName, callback, var_args) {}
  };
}();

