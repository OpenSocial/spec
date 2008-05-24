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
 * @fileoverview This library provides a standard and convenient way to embed
 * Flash content into gadgets.
 */

/**
 * @static
 * @class Embeds Flash content in gadgets.
 * @name gadgets.flash
 */
gadgets.flash = gadgets.flash || {};

/**
 * Detects Flash Player and its major version.
 * @return {Number} The major version of Flash Player
 *                  or 0 if Flash is not supported
 *
 * @member gadgets.flash
 */
gadgets.flash.getMajorVersion = function() {};

/**
 * Injects a Flash file into the DOM tree.
 * @param {String} swfUrl SWF URL
 * @param {String | Object} swfContainer The ID or object reference of an
 *     existing HTML container element
 * @param {Number} swfVersion Minimum Flash Player version required
 * @param {Object} opt_params An optional object that may contain any valid HTML
 *     parameter; all attributes will be passed through to the Flash movie on
 *     creation
 * @return {Boolean} Whether the function call completes successfully
 *
 * @member gadgets.flash
 */
gadgets.flash.embedFlash = function(swfUrl, swfContainer, swfVersion,
    opt_params) {};

/**
 * Injects a cached Flash file into the DOM tree.
 * Accepts the same parameters as gadgets.flash.embedFlash does.
 * @return {Boolean} Whether the function call completes successfully
 *
 * @member gadgets.flash
 */
gadgets.flash.embedCachedFlash = function() {};
