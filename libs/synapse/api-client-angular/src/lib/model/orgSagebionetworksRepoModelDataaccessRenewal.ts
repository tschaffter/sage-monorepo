/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelDataaccessAccessorChange } from './orgSagebionetworksRepoModelDataaccessAccessorChange';

/**
 * A Renewal contains information required by an AccessRequirement and additional information about renewing a request.
 */
export interface OrgSagebionetworksRepoModelDataaccessRenewal {
  id?: string;
  accessRequirementId?: string;
  researchProjectId?: string;
  createdOn?: string;
  modifiedOn?: string;
  createdBy?: string;
  modifiedBy?: string;
  ducFileHandleId?: string;
  irbFileHandleId?: string;
  /**
   * The set of file handle ID of attached files to this request.
   */
  attachments?: Array<string>;
  /**
   * List of user changes. A user can gain access, renew access or have access revoked.
   */
  accessorChanges?: Array<OrgSagebionetworksRepoModelDataaccessAccessorChange>;
  etag?: string;
  concreteType: OrgSagebionetworksRepoModelDataaccessRenewal.ConcreteTypeEnum;
  publication?: string;
  summaryOfUse?: string;
}
export namespace OrgSagebionetworksRepoModelDataaccessRenewal {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.dataaccess.Renewal';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelDataaccessRenewal:
      'org.sagebionetworks.repo.model.dataaccess.Renewal' as ConcreteTypeEnum,
  };
}
