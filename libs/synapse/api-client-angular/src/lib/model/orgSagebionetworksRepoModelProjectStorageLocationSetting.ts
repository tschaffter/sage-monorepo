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
import { OrgSagebionetworksRepoModelProjectProxyStorageLocationSettings } from './orgSagebionetworksRepoModelProjectProxyStorageLocationSettings';
import { OrgSagebionetworksRepoModelProjectExternalStorageLocationSetting } from './orgSagebionetworksRepoModelProjectExternalStorageLocationSetting';
import { OrgSagebionetworksRepoModelProjectS3StorageLocationSetting } from './orgSagebionetworksRepoModelProjectS3StorageLocationSetting';
import { OrgSagebionetworksRepoModelProjectExternalGoogleCloudStorageLocationSetting } from './orgSagebionetworksRepoModelProjectExternalGoogleCloudStorageLocationSetting';
import { OrgSagebionetworksRepoModelProjectExternalS3StorageLocationSetting } from './orgSagebionetworksRepoModelProjectExternalS3StorageLocationSetting';
import { OrgSagebionetworksRepoModelProjectExternalObjectStorageLocationSetting } from './orgSagebionetworksRepoModelProjectExternalObjectStorageLocationSetting';

/**
 * A storage location setting describes a location where files are uploaded to and downloaded from via Synapse. Storage location settings may be created for external locations, such as user-owned Amazon S3 buckets
 */
/**
 * @type OrgSagebionetworksRepoModelProjectStorageLocationSetting
 * A storage location setting describes a location where files are uploaded to and downloaded from via Synapse. Storage location settings may be created for external locations, such as user-owned Amazon S3 buckets
 * @export
 */
export type OrgSagebionetworksRepoModelProjectStorageLocationSetting =
  | OrgSagebionetworksRepoModelProjectExternalGoogleCloudStorageLocationSetting
  | OrgSagebionetworksRepoModelProjectExternalObjectStorageLocationSetting
  | OrgSagebionetworksRepoModelProjectExternalS3StorageLocationSetting
  | OrgSagebionetworksRepoModelProjectExternalStorageLocationSetting
  | OrgSagebionetworksRepoModelProjectProxyStorageLocationSettings
  | OrgSagebionetworksRepoModelProjectS3StorageLocationSetting;