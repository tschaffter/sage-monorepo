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
import { OrgSagebionetworksRepoModelTableQuery } from './orgSagebionetworksRepoModelTableQuery';

/**
 * Request to add either the children of a folder or the files of a view query to the user\'s download list.
 */
export interface OrgSagebionetworksRepoModelFileAddFileToDownloadListRequest {
  concreteType: OrgSagebionetworksRepoModelFileAddFileToDownloadListRequest.ConcreteTypeEnum;
  folderId?: string;
  query?: OrgSagebionetworksRepoModelTableQuery;
}
export namespace OrgSagebionetworksRepoModelFileAddFileToDownloadListRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.file.AddFileToDownloadListRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelFileAddFileToDownloadListRequest:
      'org.sagebionetworks.repo.model.file.AddFileToDownloadListRequest' as ConcreteTypeEnum,
  };
}