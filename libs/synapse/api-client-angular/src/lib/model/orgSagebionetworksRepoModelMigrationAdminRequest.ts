/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelMigrationAsyncMigrationTypeChecksumRequest } from './orgSagebionetworksRepoModelMigrationAsyncMigrationTypeChecksumRequest';
import { OrgSagebionetworksRepoModelMigrationDatasetBackfillRequest } from './orgSagebionetworksRepoModelMigrationDatasetBackfillRequest';
import { OrgSagebionetworksRepoModelMigrationAsyncMigrationRangeChecksumRequest } from './orgSagebionetworksRepoModelMigrationAsyncMigrationRangeChecksumRequest';
import { OrgSagebionetworksRepoModelMigrationCalculateOptimalRangeRequest } from './orgSagebionetworksRepoModelMigrationCalculateOptimalRangeRequest';
import { OrgSagebionetworksRepoModelMigrationRestoreTypeRequest } from './orgSagebionetworksRepoModelMigrationRestoreTypeRequest';
import { OrgSagebionetworksRepoModelMigrationAsyncMigrationTypeCountsRequest } from './orgSagebionetworksRepoModelMigrationAsyncMigrationTypeCountsRequest';
import { OrgSagebionetworksRepoModelMigrationBatchChecksumRequest } from './orgSagebionetworksRepoModelMigrationBatchChecksumRequest';
import { OrgSagebionetworksRepoModelMigrationAsyncMigrationTypeCountRequest } from './orgSagebionetworksRepoModelMigrationAsyncMigrationTypeCountRequest';
import { OrgSagebionetworksRepoModelMigrationBackupTypeRangeRequest } from './orgSagebionetworksRepoModelMigrationBackupTypeRangeRequest';

/**
 * Abstraction for Admin request
 */
/**
 * @type OrgSagebionetworksRepoModelMigrationAdminRequest
 * Abstraction for Admin request
 * @export
 */
export type OrgSagebionetworksRepoModelMigrationAdminRequest =
  | OrgSagebionetworksRepoModelMigrationAsyncMigrationRangeChecksumRequest
  | OrgSagebionetworksRepoModelMigrationAsyncMigrationTypeChecksumRequest
  | OrgSagebionetworksRepoModelMigrationAsyncMigrationTypeCountRequest
  | OrgSagebionetworksRepoModelMigrationAsyncMigrationTypeCountsRequest
  | OrgSagebionetworksRepoModelMigrationBackupTypeRangeRequest
  | OrgSagebionetworksRepoModelMigrationBatchChecksumRequest
  | OrgSagebionetworksRepoModelMigrationCalculateOptimalRangeRequest
  | OrgSagebionetworksRepoModelMigrationDatasetBackfillRequest
  | OrgSagebionetworksRepoModelMigrationRestoreTypeRequest;
