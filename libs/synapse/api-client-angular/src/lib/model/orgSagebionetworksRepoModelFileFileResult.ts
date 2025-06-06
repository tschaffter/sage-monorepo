/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelFileFileHandle } from './orgSagebionetworksRepoModelFileFileHandle';

/**
 * Result of a single File request.
 */
export interface OrgSagebionetworksRepoModelFileFileResult {
  fileHandleId?: string;
  fileHandle?: OrgSagebionetworksRepoModelFileFileHandle;
  preSignedURL?: string;
  previewPreSignedURL?: string;
  failureCode?: string;
}
