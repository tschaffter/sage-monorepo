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
 * The calculated checksum for a single batch of rows.
 */
export interface OrgSagebionetworksRepoModelMigrationRangeChecksum {
  binNumber?: number;
  count?: number;
  checksum?: string;
  minimumId?: number;
  maximumId?: number;
}
