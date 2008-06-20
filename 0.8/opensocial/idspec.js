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
 * @fileoverview Representation of an group of people ids.
 */


/**
 * @class
 * Base interface for all id spec objects.
 *
 * @name opensocial.IdSpec
 */


/**
 * Base interface for all id spec objects. Use this class when specifying which
 * people you want to fetch.
 *
 * For example, opensocial.createIdSpec({userId : 'VIEWER', groupId : 'FRIENDS'})
 *                means you are looking for all of the viewer's friends.
 * For example, opensocial.createIdSpec({userId : 'VIEWER',
 *                                       groupId : 'FRIENDS', networkDistance : 2})
 *                means you are looking for all of the viewer's friends of friends.
 * For example, opensocial.createIdSpec({userId : 'OWNER'})
 *                means you are looking for the owner.
 *
 * Private, see opensocial.createIdSpec() for usage.
 *
 * @private
 * @constructor
 */
opensocial.IdSpec = function() {};


/**
 * @static
 * @class
 * All of the fields that id specs can have.
 *
 * <p>
 * <b>See also:</b>
 * <a
 * href="opensocial.IdSpec.html#getField">opensocial.IdSpec.getField()</a>
 * </p>
 *
 * @name opensocial.IdSpec.Field
 */
opensocial.IdSpec.Field = {
  /**
   * A string or an array of strings representing the user id.
   * @member opensocial.IdSpec.Field
   */
  USER_ID : 'userId',

  /**
   * A string representing the group id.
   * @member opensocial.IdSpec.Field
   */
  GROUP_ID : 'groupId',

  /**
   * An optional numeric parameter, used to specify how many "hops"
   * are allowed between two people still considered part of the
   * same group. This is 0 based, for example:
   *
   * A value of 0 means that the people are the same person.
   * 1 would mean that the people were friends. 
   * And 2 would mean that there was a friend of a friend relationship. 
   *
   * Defaults to 1 (they are both friends or directly in the same group).
   *
   * Not all containers will support networkDistances greater than 1.
   *
   * @member opensocial.IdSpec.Field
   */
  NETWORK_DISTANCE : 'networkDistance'
};

/**
 * @static
 * @class
 * Constant person IDs available when fetching person information.
 *
 * @name opensocial.IdSpec.PersonId
 */
opensocial.IdSpec.PersonId = {
 /**
  * @member opensocial.IdSpec.PersonId
  */
  OWNER : 'OWNER',
 /**
  * @member opensocial.IdSpec.PersonId
  */
  VIEWER : 'VIEWER'
};

/**
 * Gets the id spec's data that's associated with the specified key.
 *
 * @param {String} key The key to get data for;
 *   see the <a href="opensocial.IdSpec.Field.html">Field</a> class
 * for possible values
 * @param {Map.&lt;opensocial.DataRequest.DataRequestFields, Object&gt;}
 *  opt_params Additional
 *    <a href="opensocial.DataRequest.DataRequestFields.html">params</a>
 *    to pass to the request.
 * @return {String} The data
 * @member opensocial.IdSpec
 */
opensocial.IdSpec.prototype.getField = function(key, opt_params) {};


/**
 * Sets data for this id spec associated with the given key.
 *
 * @param {String} key The key to set data for
 * @param {String} data The data to set
 */
opensocial.IdSpec.prototype.setField = function(key, data) {};
