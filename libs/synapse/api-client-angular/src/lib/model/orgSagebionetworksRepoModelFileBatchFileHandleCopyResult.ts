/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelFileFileHandleCopyResult } from './orgSagebionetworksRepoModelFileFileHandleCopyResult';

/**
 * Batch Result for copying FileHandles.
 */
export interface OrgSagebionetworksRepoModelFileBatchFileHandleCopyResult {
  /**
   * The results of each individual requests.
   */
  copyResults?: Array<OrgSagebionetworksRepoModelFileFileHandleCopyResult>;
}
