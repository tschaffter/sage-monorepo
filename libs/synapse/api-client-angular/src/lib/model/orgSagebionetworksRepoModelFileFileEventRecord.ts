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
 * File record for file upload and download events
 */
export interface OrgSagebionetworksRepoModelFileFileEventRecord {
  userId: number;
  projectId?: number;
  fileHandleId: string;
  downloadedFileHandleId?: string;
  associateType?: string;
  associateId: string;
  sessionId?: string;
}
