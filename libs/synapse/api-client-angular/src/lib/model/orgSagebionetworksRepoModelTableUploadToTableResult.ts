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
 * The result of a CSV table upload job.
 */
export interface OrgSagebionetworksRepoModelTableUploadToTableResult {
  concreteType: OrgSagebionetworksRepoModelTableUploadToTableResult.ConcreteTypeEnum;
  rowsProcessed?: number;
  etag?: string;
}
export namespace OrgSagebionetworksRepoModelTableUploadToTableResult {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.UploadToTableResult';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableUploadToTableResult:
      'org.sagebionetworks.repo.model.table.UploadToTableResult' as ConcreteTypeEnum,
  };
}