/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelTableQuery } from './orgSagebionetworksRepoModelTableQuery';

/**
 * Start an asynchronous job to add files from the given view query or folder to the user\'s download list,
 */
export interface OrgSagebionetworksRepoModelDownloadAddToDownloadListRequest {
  concreteType: OrgSagebionetworksRepoModelDownloadAddToDownloadListRequest.ConcreteTypeEnum;
  query?: OrgSagebionetworksRepoModelTableQuery;
  parentId?: string;
  useVersionNumber?: boolean;
}
export namespace OrgSagebionetworksRepoModelDownloadAddToDownloadListRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.download.AddToDownloadListRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelDownloadAddToDownloadListRequest:
      'org.sagebionetworks.repo.model.download.AddToDownloadListRequest' as ConcreteTypeEnum,
  };
}
