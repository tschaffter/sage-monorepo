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
import { OrgSagebionetworksRepoModelSubmissionTeam } from './orgSagebionetworksRepoModelSubmissionTeam';

/**
 * A paginated list of SubmissionTeam objects
 */
export interface OrgSagebionetworksRepoModelSubmissionTeamPagedResults {
  /**
   * The list of results for this page
   */
  results?: Array<OrgSagebionetworksRepoModelSubmissionTeam>;
  totalNumberOfResults?: number;
}