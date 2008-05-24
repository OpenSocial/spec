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
 * @fileoverview
 *
 * Provides access to user prefs, module dimensions, and messages.
 *
 * Clients can access their preferences by constructing an instance of
 * gadgets.Prefs and passing in their module ID.  Example:
 *
 *   var prefs = new gadgets.Prefs();
 *   var name = prefs.getString("name");
 *   var lang = prefs.getLang();
 *
 * Modules with type=url can also use this library to parse arguments passed
 * by URL, but this is not the common case:
 *
 *   &lt;script src="http://apache.org/shindig/prefs.js"&gt;&lt;/script&gt;
 *   &lt;script&gt;
 *   gadgets.Prefs.parseUrl(); //TODO: Fix! Prefs.parseUrl DOESN'T EXIST
 *   var prefs = new gadgets.Prefs();
 *   var name = prefs.getString("name");
 *   &lt;/script&lg;
 */

/**
 * @class
 * Provides access to user preferences, module dimensions, and messages.
 *
 * Clients can access their preferences by constructing an instance of
 * gadgets.Prefs and passing in their module ID.  Example:
 *
<pre>var prefs = new gadgets.Prefs();
var name = prefs.getString("name");
var lang = prefs.getLang();</pre>
 *
 * @description Creates a new Prefs object.
 * @param {String | Number} opt_moduleId An optional parameter specifying the
 *     module ID to create prefs for; if not provided, the default module ID
 *     is used
 */
gadgets.Prefs = function(opt_moduleId) {};

/**
 * Retrieves a preference as a string.
 * @param {String} key The preference to fetch
 * @return {String} The preference; if not set, an empty string
 */
gadgets.Prefs.prototype.getString = function(key) {};

/**
 * Retrieves a preference as an integer.
 * @param {String} key The preference to fetch
 * @return {Number} The preference; if not set, 0
 */
gadgets.Prefs.prototype.getInt = function(key) {};

/**
 * Retrieves a preference as a floating-point value.
 * @param {String} key The preference to fetch
 * @return {Number} The preference; if not set, 0
 */
gadgets.Prefs.prototype.getFloat = function(key) {};

/**
 * Retrieves a preference as a boolean.
 * @param {String} key The preference to fetch
 * @return {Boolean} The preference; if not set, false
 */
gadgets.Prefs.prototype.getBool = function(key) {};

/**
 * Stores a preference.
 * To use this call,
 * the gadget must require the feature setprefs.
 *
 * <p class="note">
 * <b>Note:</b>
 * If the gadget needs to store an Array it should use setArray instead of
 * this call.
 * </p>
 *
 * @param {String} key The pref to store
 * @param {Object} val The values to store
 */
gadgets.Prefs.prototype.set = function(key, value) {};

/**
 * Retrieves a preference as an array.
 * UserPref values that were not declared as lists are treated as
 * one-element arrays.
 *
 * @param {String} key The preference to fetch
 * @return {Array.&lt;String&gt;} The preference; if not set, an empty array
 */
gadgets.Prefs.prototype.getArray = function(key) {};

/**
 * Stores an array preference.
 * To use this call,
 * the gadget must require the feature setprefs.
 *
 * @param {String} key The pref to store
 * @param {Array} val The values to store
 */
gadgets.Prefs.prototype.setArray = function(key, val) {};

/**
 * Fetches an unformatted message.
 * @param {String} key The message to fetch
 * @return {String} The message
 */
gadgets.Prefs.prototype.getMsg = function(key) {};

/**
 * Gets the current country, returned as ISO 3166-1 alpha-2 code.
 *
 * @return {String} The country for this module instance
 */
gadgets.Prefs.prototype.getCountry = function() {};

/**
 * Gets the current language the gadget should use when rendering, returned as a
 * ISO 639-1 language code.
 *
 * @return {String} The language for this module instance
 */
gadgets.Prefs.prototype.getLang = function() {};

/**
 * Gets the module ID for the current instance.
 *
 * @return {String | Number} The module ID for this module instance
 */
gadgets.Prefs.prototype.getModuleId = function() {};
