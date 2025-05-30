/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelProjectExternalGoogleCloudStorageLocationSetting } from './orgSagebionetworksRepoModelProjectExternalGoogleCloudStorageLocationSetting';
import { OrgSagebionetworksRepoModelProjectExternalS3StorageLocationSetting } from './orgSagebionetworksRepoModelProjectExternalS3StorageLocationSetting';

/**
 * A storage location that defines an external bucket that needs to be verified for ownership. For this type of storage location, upon creation there is a process of verification that will check that a owner.txt file is uploaded to the bucket (and if present within the baseKey folder) and that contains a line separated list of user identifiers. Valid user identifiers for verifications are: user id or id of a team the user is part of.
 */
/**
 * @type OrgSagebionetworksRepoModelProjectBucketOwnerStorageLocationSetting
 * A storage location that defines an external bucket that needs to be verified for ownership. For this type of storage location, upon creation there is a process of verification that will check that a owner.txt file is uploaded to the bucket (and if present within the baseKey folder) and that contains a line separated list of user identifiers. Valid user identifiers for verifications are: user id or id of a team the user is part of.
 * @export
 */
export type OrgSagebionetworksRepoModelProjectBucketOwnerStorageLocationSetting =
  | OrgSagebionetworksRepoModelProjectExternalGoogleCloudStorageLocationSetting
  | OrgSagebionetworksRepoModelProjectExternalS3StorageLocationSetting;
