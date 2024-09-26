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
import { OrgSagebionetworksRepoModelEntityRef } from './orgSagebionetworksRepoModelEntityRef';

/**
 * A dataset is a type of view defined by a flat list of entities.
 */
export interface OrgSagebionetworksRepoModelTableDataset {
  name?: string;
  description?: string;
  id?: string;
  etag?: string;
  createdOn?: string;
  modifiedOn?: string;
  createdBy?: string;
  modifiedBy?: string;
  parentId?: string;
  concreteType: OrgSagebionetworksRepoModelTableDataset.ConcreteTypeEnum;
  versionNumber?: number;
  versionLabel?: string;
  versionComment?: string;
  isLatestVersion?: boolean;
  /**
   * The list of ColumnModel IDs that define the schema of the object.
   */
  columnIds?: Array<string>;
  isSearchEnabled?: boolean;
  /**
   * The flat list of file entity references that define this dataset.  Limit: 30K items.
   */
  items?: Array<OrgSagebionetworksRepoModelEntityRef>;
  size?: number;
  checksum?: string;
  count?: number;
}
export namespace OrgSagebionetworksRepoModelTableDataset {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.Dataset';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableDataset:
      'org.sagebionetworks.repo.model.table.Dataset' as ConcreteTypeEnum,
  };
}