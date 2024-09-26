/**
 * Synapse REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * JSON schema for a message to another user
 */
export interface OrgSagebionetworksRepoModelMessageMessageToUser {
  id?: string;
  createdBy?: string;
  fileHandleId?: string;
  createdOn?: string;
  /**
   * The unique identifiers of the intended recipients of a message
   */
  recipients?: Set<string>;
  subject?: string;
  inReplyTo?: string;
  inReplyToRoot?: string;
  notificationUnsubscribeEndpoint?: string;
  userProfileSettingEndpoint?: string;
  withUnsubscribeLink?: boolean;
  withProfileSettingLink?: boolean;
  isNotificationMessage?: boolean;
  to?: string;
  cc?: string;
  bcc?: string;
}