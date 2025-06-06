/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * The generated shared secret to enable two factor authentication with TOTP compatible authenticator app. The secret is not active.
 */
export interface OrgSagebionetworksRepoModelAuthTotpSecret {
  secretId?: string;
  secret?: string;
  alg?: string;
  digits?: number;
  period?: number;
}
