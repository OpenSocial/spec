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
 * @fileoverview General purpose utilities that gadgets can use.
 */

/**
 * @static
 * @class Provides general-purpose utility functions.
 * @name gadgets.util
 */

gadgets.util = function() {
  return /** @scope gadgets.util */ {

    /**
     * Escapes the input using HTML entities to make it safer.
     * The following characters are affected:
     *
     * <ul>
     * <li> newline (\n, Unicode code point 10) </li>
     * <li> carriage return (\r, Unicode 13) </li>
     * <li> double quote (", Unicode 34) </li>
     * <li> ampersand (&amp;, Unicode 38) </li>
     * <li> single quote (', Unicode 39) </li>
     * <li> left angle bracket (&lt;, Unicode 60) </li>
     * <li> right angle bracket (>, Unicode 62) </li>
     * <li> backslash (\, Unicode 92) </li>
     * <li> line separator (Unicode 8232) </li>
     * <li> paragraph separator (Unicode 8233) </li>
     * </ul>
     *
     * @param {String} str The string to escape
     * @return {String} The escaped string
     *
     * @member gadgets.util
     */
    escapeString : function(str) {},

    /**
     * Returns the value of parameters for this feature.
     * A gadget specifies parameters using the
     * <code>&lt;Param></code> subelement of the
     * <code>&lt;Requires></code> or
     * <code>&lt;Optional></code> element.
     *
     * @param {String} feature The feature to get parameters for
     * @return {Object} The parameters for the given feature, or null
     *
     * @member gadgets.util
     */
    getFeatureParameters : function (feature) {},

    /**
     * Returns whether the specified feature is supported.
     *
     * @param {String} feature The feature to test for
     * @return {Boolean} True if the feature is supported
     *
     * @member gadgets.util
     */
    hasFeature : function (feature) {},

    /**
     * Registers an onload handler &mdash;
     * a function that's executed when the gadget loads.
     * @param {Function} callback The handler to run
     *
     * @member gadgets.util
     */
    registerOnLoadHandler : function (callback) {},

    /**
     * Reverses escapeString
     *
     * @param {String} str The string to unescape.
     * @return {String} The unescaped string
     *
     * @member gadgets.util
     */
    unescapeString : function(str) {},

    /**
     * Sanitizes a text string. The returned value is safe to assign to
     * innerHTML. The returned value may include HTML tags. If plain text is
     * desired, use gadgets.util.escapeString instead.
     *
     * @param {String} text arbitrary text string
     * @return {String} a sanitized version that may include HTML tags,
     *     but will not execute script.
     */
    sanitizeHtml : function(text) {}
};
}();

