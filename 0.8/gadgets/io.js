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
 * @fileoverview Provides remote content retrieval facilities.
 *     Available to every gadget.
 */

/**
 * @static
 * @class Provides remote content retrieval functions.
 * @name gadgets.io
 */

gadgets.io = function() {
  return /** @scope gadgets.io */ {
    /**
     * Fetches content from the provided URL and feeds that content into the
     * callback function.
     *
     * Example:
     * <pre>
     * var params = {};
     * params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.TEXT;
     * gadgets.io.makeRequest(url, callback, params);
     * </pre>
     *
     *
     * If opt_params[gadgets.io.RequestParameters.AUTHORIZATION] is set to
     * gadgets.io.AuthorizationType.SIGNED:
     *
     * This indicates that the container needs to vouch for the user's identity to
     * the destination server.
     *
     * The container will
     *   - remove any request parameters with names that begin with oauth, xoauth,
     *      or opensocial (ignoring whether the parameter names are upper or lower
     *      case.
     *   - add the following parameters to the request query string
     *      opensocial_viewer_id: (optional) The id of the current viewer, which
     *        will match the getId() value on the viewer person object.
     *      opensocial_owner_id: (required) The id of the current owner, which
     *        will match the getId() value on the owner person object.
     *      opensocial_app_url: (required) The URL of the application making the
     *        request. Containers may alias multiple application URLs to a single
     *        canonical application URL in the case where an application changes
     *        URLs.
     *      opensocial_instance_id: (optional) An opaque identifier
     *        used to distinguish between multiple instances of the same application
     *        in a single container.  If a container does not allow multiple
     *        instances of the same application to coexist, this parameter may be
     *        omitted.  The combination of opensocial_app_url and
     *        opensocial_instance_id will always uniquely identify an instance of an
     *        application in a container.
     *      opensocial_app_id: (optional) An opaque identifier for the
     *        application, unique to a particular container.  This parameter is
     *        optional.  Containers that wish to maintain backwards compatibility
     *        with the opensocial-0.7 specification may include this parameter.
     *      xoauth_public_key: (optional) An opaque identifier for the
     *        public key used to sign the request.  This parameter may be omitted by
     *        containers that do not use public keys to sign requests, or if the
     *        container arranges other means of key distribution with the target of
     *        the request.
     *   - sign the resulting request according to section 9 of the OAuth
    *       specification (http://oauth.net/core/1.0/#signing_process)
     *
     * Key management for gadgets.io.AuthorizationType.SIGNED:
     *
     * If a container uses public keys to sign request, the container may choose to
     * use either self-signed certificates or certificates signed by a well-known
     * certificate authority. If a container does not distribute their oauth signing
     * key over https, they should use a certificate signed by a well-known
     * certificate authority.
     *
     * The commonName attribute of the certificate should match the
     * hostname of the container server, and should also match the value of
     * the oauth_consumer_key parameter specified in the request.
     *
     * The container should make their public key available for download
     * at a well-known location. The location
     * https://<container-hostname>/opensocial/certificates/<xoauth_public_keyvalue>
     * is recommended.
     *
     * Recipients of signed requests must verify that the signature on
     * the request is correct, and that the timestamp on the request is
     * within a reasonable time window.  A time window of +-5 minutes from
     * the current time is recommended.
     *
     * Recipients of signed requests may use the oauth_consumer_key and
     * xoauth_public_key parameters to automatically detect when a container
     * deploys new certificates.  If the container deploys certificates at a
     * well-known location, the recipient may automatically download the new
     * certificate.  Recipients who automatically download new certificates
     * should cache the resulting certificates.
     *
     * If a container's certificate is not downloaded from
     * https://<container-hostname>, the recipient should verify that the
     * certificat is signed by a well-known certificate authority before
     * trusting the certificate.
     *
     *
     * If opt_params[gadgets.io.RequestParameters.AUTHORIZATION] is set
     * to gadgets.io.AuthorizationType.OAUTH:
     *
     * This indicates that the container needs to use OAuth to gain access to
     * the resource specified in the request.
     * This may require that the gadget obtain the user's content by
     * directing the user to the service provider to gain access.
     *
     * The following additional parameters may be specified in opt_params:
     * gadgets.io.RequestParameters.OAUTH_SERVICE_NAME:
     *   The nickname the gadget uses to refer to the OAuth <Service>
     * element from it's XML spec.  If unspecified, defaults to "".
     *
     * gadgets.io.RequestParameters.OAUTH_TOKEN_NAME:
     *   The nickname the gadget uses to refer to an oauth token granting
     * access to a particular resources.  If unspecified, defaults to "".
     *   Gadgets can use multiple token names if they have access to
     * multiple resources from the same service provider.  For example, a
     * gadget with access to a contact list and a calendar might use a token
     * name of "contacts" to use the contact list token, and a contact list
     * of "calendar" to use the calendar token.
     *
     * gadgets.io.RequestParameters.OAUTH_REQUEST_TOKEN
     *    A service provider may be able to automatically provision a
     * gadget with a request token that is preapproved for access to a
     * resource. The gadget can use that token with the OAUTH_REQUEST_TOKEN
     * parameter. This parameter is optional.
     *
     * gadgets.io.RequestParamters.OAUTH_REQUEST_TOKEN_SECRET
     *   The secret corresponding to a preapproved request token.  This
     * parameter is optional.
     *
     * If OAuth is used, the container should execute the OAuth protocol on
     * behalf of the gadget.  If the gadget has not registered a consumer key
     * for use with this service provider, the container may choose to use a
     * default RSA signing key corresponding to a well-known certificate to sign
     * requests.  If the container uses a default consumer key, it will include
     * an additional OAuth parameter xoauth_app_url that identifies the gadget
     * making the request.
     *
     * The makeRequest callback parameter is passed a javascript object with
     * several OAuth specific fields in addition to the normal values returned
     * by makeRequest:
     *
     * "oauthApprovalUrl": if this value is specified, the user needs to
     * visit an external page to approve the gadget's request to access
     * data.  Use of a pop-up window to direct the user to the external
     * page is recommended.  Once the user has approved access, the gadget
     * can repeate the makeRequest call to retrieve the data.
     *
     * "oauthError": if this value is specified, it indicates an OAuth
     * related error occurred.  The value will one of a set of string
     * constants that can be used for programmatically detecting errors.
     * The constants are undefined for opensocial-0.8, but implementers
     * should attempt to agree on a set of useful constant values for
     * standardization in opensocial-0.9.
     *
     * "oauthErrorText": if this value is specified, it indicates an
     * OAuth related error occurred.  The value is free-form text that
     * can be used to provide debugging information for gadget developers.
     *
     * @param {String} url The URL where the content is located
     * @param {Function} callback The function to call with the data from the
     *     URL once it is fetched
     * @param {Map.&lt;gadgets.io.RequestParameters, Object&gt;} opt_params
     *     Additional
     *     <a href="gadgets.io.RequestParameters.html">parameters</a>
     *     to pass to the request
     *
     * @member gadgets.io
     */
    makeRequest : function (url, callback, opt_params) {},

  /**
     * Converts an input object into a URL-encoded data string.
     * (key=value&amp;...)
     *
     * @param {Object} fields The post fields you wish to encode
     * @return {String} The processed post data; this will include a trailing
     *    ampersand (&)
     *
     * @member gadgets.io
     */
    encodeValues : function (fields) {},

  /**
     * Gets the proxy version of the passed-in URL.
     *
     * @param {String} url The URL to get the proxy URL for
     * @param {Map<String, String} opt_params Additional optional
     *     <a href="gadgets.io.ProxyUrlRequestParameters.html">parameters</a>
     *     to pass to the request
     * @return {String} The proxied version of the URL
     *
     * @member gadgets.io
     */
    getProxyUrl : function (url, opt_params) {}
  };
}();

/**
 * @static
 * @class
 * Used by the
 * <a href="gadgets.io.html#makeRequest">
 * <code>gadgets.io.makeRequest()</code></a> method.
 * @name gadgets.io.RequestParameters
 */
gadgets.io.RequestParameters = {
  /**
   * The method to use when fetching content from the URL;
   * defaults to <code>MethodType.GET</a></code>.
   * Specified as a
   * <a href="gadgets.io.MethodType.html">MethodType</a>.
   *
   * @member gadgets.io.RequestParameters
   */
   METHOD : 'METHOD',

  /**
   * The type of content that lives at the URL;
   * defaults to <code>ContentType.TEXT</code>.
   * Specified as a
   * <a href="gadgets.io.ContentType.html">
   * ContentType</a>.
   *
   * @member gadgets.io.RequestParameters
   */
  CONTENT_TYPE : "CONTENT_TYPE",

  /**
   * The data to send to the URL using the POST method;
   * defaults to null.
   * Specified as a <code>String</code>.
   *
   * @member gadgets.io.RequestParameters
   */
  POST_DATA : "POST_DATA",

  /**
   * The HTTP headers to send to the URL;
   * defaults to null.
   * Specified as a <code>Map.&lt;String,String&gt;</code>.
   *
   * @member gadgets.io.RequestParameters
   */
  HEADERS : "HEADERS",

  /**
   * The type of authentication to use when fetching the content;
   * defaults to <code>AuthorizationType.NONE</code>.
   * Specified as an
   * <a href="gadgets.io.AuthorizationType.html">
   * AuthorizationType</a>.
   *
   * @member gadgets.io.RequestParameters
   */
  AUTHORIZATION : 'AUTHORIZATION',


  /**
   * If the content is a feed, the number of entries to fetch;
   * defaults to 3.
   * Specified as a <code>Number</code>.
   *
   * @member gadgets.io.RequestParameters
   */
  NUM_ENTRIES : 'NUM_ENTRIES',

  /**
   * If the content is a feed, whether to fetch summaries for that feed;
   * defaults to false.
   * Specified as a <code>Boolean</code>.
   *
   * @member gadgets.io.RequestParameters
   */
  GET_SUMMARIES : 'GET_SUMMARIES'
};


/**
 * @static
 * @class
 * Used by
 * <a href="gadgets.io.RequestParameters.html">
 * RequestParameters</a>.
 * @name gadgets.io.MethodType
 */
gadgets.io.MethodType = {
  /**
   * The default type.
   * @member gadgets.io.MethodType
   */
  GET : 'GET',

  /**
   * Not supported by all containers.
   * @member gadgets.io.MethodType
   */
  POST : 'POST',

  /**
   * Not supported by all containers.
   * @member gadgets.io.MethodType
   */
  PUT : 'PUT',

  /**
   * Not supported by all containers.
   * @member gadgets.io.MethodType
   */
  DELETE : 'DELETE',

  /**
   * Not supported by all containers.
   * @member gadgets.io.MethodType
   */
  HEAD : 'HEAD'
};


/**
 * @static
 * @class
 * Used by
 * <a href="gadgets.io.RequestParameters.html">
 * RequestParameters</a>.
 * @name gadgets.io.ContentType
 */
gadgets.io.ContentType = {
  /**
   * Returns text; used for fetching HTML.
   * @member gadgets.io.ContentType
   */
  TEXT : 'TEXT',

  /**
   * Returns a DOM object; used for fetching XML.
   * @member gadgets.io.ContentType
   */
  DOM : 'DOM',

  /**
   * Returns a JSON object.
   * @member gadgets.io.ContentType
   */
  JSON : 'JSON',

  /**
   * Returns a JSON representation of a feed.
   * @member gadgets.io.ContentType
   */
  FEED : 'FEED'
};


/**
 * @static
 * @class
 * Used by
 * <a href="gadgets.io.RequestParameters.html">
 * RequestParameters</a>.
 * @name gadgets.io.AuthorizationType
 */
gadgets.io.AuthorizationType = {
  /**
   * No authorization.
   * @member gadgets.io.AuthorizationType
   */
  NONE : 'NONE',

  /**
   * The request will be signed by the container.
   * @member gadgets.io.AuthorizationType
   */
  SIGNED : 'SIGNED',

  /**
   * The container will use oauth for authentication.
   * @member gadgets.io.AuthorizationType
   */
  OAUTH : 'OAUTH'
};

/**
 * @static
 * @class
 * Used by
 * <a href="gadgets.io.html#getProxyUrl">
 * <code>gadgets.io.getProxyUrl()</code></a> method.
 * @name gadgets.io.ProxyUrlRequestParameters
 */
gadgets.io.ProxyUrlRequestParameters = {
  /**
   * Attempt to use content caching. The Refresh Interval is the number
   * of seconds we want to cache the given response. By default the http headers
   * will be respected. If there aren't any http headers this value will default
   * to 3600(1 hour). Note that Signed requests and objects with POST_DATA
   * present will generally not be cached.
   *
   * @member gadgets.io.AuthorizationType
   */
  REFRESH_INTERVAL : 'REFRESH_INTERVAL'
};
