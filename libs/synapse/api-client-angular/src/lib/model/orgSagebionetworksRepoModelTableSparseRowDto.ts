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
 * Represents a single partial row of a TableEntity
 */
export interface OrgSagebionetworksRepoModelTableSparseRowDto {
  etag?: string;
  rowId?: number;
  versionNumber?: number;
  /**
   * The values for columns of this row as a map. The key is the columnId and value is the cell value
   */
  values?: { [key: string]: string };
}
