/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelTableTextMatchesQueryFilter } from './orgSagebionetworksRepoModelTableTextMatchesQueryFilter';
import { OrgSagebionetworksRepoModelTableColumnSingleValueQueryFilter } from './orgSagebionetworksRepoModelTableColumnSingleValueQueryFilter';
import { OrgSagebionetworksRepoModelTableColumnMultiValueFunctionQueryFilter } from './orgSagebionetworksRepoModelTableColumnMultiValueFunctionQueryFilter';

/**
 * @type OrgSagebionetworksRepoModelTableQueryFilter
 * @export
 */
export type OrgSagebionetworksRepoModelTableQueryFilter =
  | OrgSagebionetworksRepoModelTableColumnMultiValueFunctionQueryFilter
  | OrgSagebionetworksRepoModelTableColumnSingleValueQueryFilter
  | OrgSagebionetworksRepoModelTableTextMatchesQueryFilter;
