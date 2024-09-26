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
 * Signed token containing the the information necessary to reset 2fa for a user.
 */
export interface OrgSagebionetworksRepoModelAuthTwoFactorAuthResetToken {
  concreteType: OrgSagebionetworksRepoModelAuthTwoFactorAuthResetToken.ConcreteTypeEnum;
  hmac?: string;
  version?: number;
  expiresOn?: string;
  createdOn?: string;
  userId?: number;
}
export namespace OrgSagebionetworksRepoModelAuthTwoFactorAuthResetToken {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.auth.TwoFactorAuthResetToken';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelAuthTwoFactorAuthResetToken:
      'org.sagebionetworks.repo.model.auth.TwoFactorAuthResetToken' as ConcreteTypeEnum,
  };
}