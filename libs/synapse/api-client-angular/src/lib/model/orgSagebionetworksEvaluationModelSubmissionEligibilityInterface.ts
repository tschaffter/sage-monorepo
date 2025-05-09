/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksEvaluationModelSubmissionEligibility } from './orgSagebionetworksEvaluationModelSubmissionEligibility';
import { OrgSagebionetworksEvaluationModelMemberSubmissionEligibility } from './orgSagebionetworksEvaluationModelMemberSubmissionEligibility';

/**
 * Describes the eligibility of a to submit to an Evaluation queue, reflecting the queue\'s submission quotas and current submissions.
 */
/**
 * @type OrgSagebionetworksEvaluationModelSubmissionEligibilityInterface
 * Describes the eligibility of a to submit to an Evaluation queue, reflecting the queue\'s submission quotas and current submissions.
 * @export
 */
export type OrgSagebionetworksEvaluationModelSubmissionEligibilityInterface =
  | OrgSagebionetworksEvaluationModelMemberSubmissionEligibility
  | OrgSagebionetworksEvaluationModelSubmissionEligibility;
