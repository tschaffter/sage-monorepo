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
 * A single pre-signed URL for uploading or coping a part of a multi-part request. Note that the headers in the signedHeaders property must be included in the PUT request that is sent to the pre-signed URL. In the case of a multipart copy, when sending the PUT request to the pre-signed URL the body of the request needs to be empty.
 */
export interface OrgSagebionetworksRepoModelFilePartPresignedUrl {
  partNumber?: number;
  uploadPresignedUrl?: string;
  /**
   * A key/value pair map of additional headers that must be included in the PUT request for the request to succeed.
   */
  signedHeaders?: { [key: string]: string };
}
