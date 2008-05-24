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
 * @fileoverview This library provides functions for using message channels.
 */

/**
 * @static
 * @class Provides operations for publishing and subscribing to message
 *     channels.
 * @name gadgets.pubsub
 */
gadgets.pubsub = gadgets.pubsub || {};


/**
 * Publishes a string-type message to a channel.
 *
 * @param {String} channelName The name of the channel
 * @param {String} message The message to publish
 * @member gadgets.pubsub
 */
 gadgets.pubsub.publish = function(channelName, message) {};


/**
 * Subscribes a gadget to a message channel.
 *
 * @param {String} channelName The name of the channel
 * @param {Function} callback A function that will be called with the channel
 *     messages
 * @member gadgets.pubsub
 */
 gadgets.pubsub.subscribe = function(channelName, callback) {};


/**
 * Unsubscribes the gadget from a message channel.
 *
 * @param {String} channelName The name of the channel
 * @member gadgets.pubsub
 */
 gadgets.pubsub.unsubscribe = function(channelName) {};
