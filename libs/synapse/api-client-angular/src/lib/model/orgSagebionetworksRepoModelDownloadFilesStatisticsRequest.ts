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
 * Request to get statistics about the files currently on the user\'s download list.
 */
export interface OrgSagebionetworksRepoModelDownloadFilesStatisticsRequest {
  concreteType: OrgSagebionetworksRepoModelDownloadFilesStatisticsRequest.ConcreteTypeEnum;
}
export namespace OrgSagebionetworksRepoModelDownloadFilesStatisticsRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.download.FilesStatisticsRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelDownloadFilesStatisticsRequest:
      'org.sagebionetworks.repo.model.download.FilesStatisticsRequest' as ConcreteTypeEnum,
  };
}
