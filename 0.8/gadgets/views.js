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
 * @fileoverview This library provides functions for navigating to and dealing
 *     with views of the current gadget.
 */

/**
 * @static
 * @class Provides operations for dealing with Views.
 * @name gadgets.views
 */
gadgets.views = gadgets.views || {};

/**
 * Attempts to navigate to this gadget in a different view. If the container
 * supports parameters will pass the optional parameters along to the gadget in
 * the new view.
 *
 * @param {gadgets.views.View} view The view to navigate to
 * @param {Map.&lt;String, String&gt;} opt_params Parameters to pass to the
 *     gadget after it has been navigated to on the surface
 * @param {String} opt_ownerId The id of the owner of the page to navigate to.
 *     Defaults to the current owner.
 *
 * @member gadgets.views
 */
gadgets.views.requestNavigateTo = function(view, opt_params, opt_ownerId) {};

/**
 * Returns the current view.
 *
 * @return {gadgets.views.View} The current view
 * @member gadgets.views
 */
gadgets.views.getCurrentView = function() {};

/**
 * Returns a map of all the supported views. Keys each gadgets.view.View by
 * its name.
 *
 * @return {Map&lt;gadgets.views.ViewType | String, gadgets.views.View&gt;} All
 *   supported views, keyed by their name attribute.
 * @member gadgets.views
 */
gadgets.views.getSupportedViews = function() {};

/**
 * Returns the parameters passed into this gadget for this view. Does not
 * include all url parameters, only the ones passed into
 * gadgets.views.requestNavigateTo
 *
 * @return {Map.&lt;String, String&gt;} The parameter map
 * @member gadgets.views
 */
gadgets.views.getParams = function() {};


/**
 * @class Base interface for all view objects.
 * @name gadgets.views.View
 */

/**
 * @private
 * @constructor
 */
gadgets.views.View = function() {};

/**
 * Returns the name of this view.
 *
 * @return {gadgets.views.ViewType | String} The view name, usually specified as
 * a gadgets.views.ViewType
 */
gadgets.views.View.prototype.getName = function() {};

/**
 * Returns true if the gadget is the only visible gadget in this view.
 * On a canvas page or in maximize mode this is most likely true; on a profile
 * page or in dashboard mode, it is most likely false.
 *
 * @return {boolean} True if the gadget is the only visible gadget; otherwise, false
 */
gadgets.views.View.prototype.isOnlyVisibleGadget = function() {};


/**
 * @static
 * @class
 * Used by <a href="gadgets.views.View.html"> View</a>s.
 * @name gadgets.views.ViewType
 */
gadgets.views.ViewType = {
 /**
  * A view where the gadget is displayed in a small area usually on a page with
  * other gadgets. Typically the viewer is the same as the owner.
  *
  * @member gadgets.views.ViewType
  */
  HOME : 'HOME',

 /**
  * A view where the gadget is displayed in a small area usually on a page with
  * other gadgets. The viewer is not always the same as the owner.
  *
  * @member gadgets.views.ViewType
  */
  PROFILE : 'PROFILE',

 /**
  * A view where the gadget is displayed in a very large mode. It is typically
  * the main content on the page. The viewer is not always the same as the
  * owner.
  *
  * @member gadgets.views.ViewType
  */
  CANVAS : 'CANVAS',

 /**
  * A demo view of the gadget. In this view the owner and viewer are not known.
  *
  * @member gadgets.views.ViewType
  */
  PREVIEW : 'PREVIEW'
};
