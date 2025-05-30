/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksEvaluationModelEvaluationRoundLimit } from './orgSagebionetworksEvaluationModelEvaluationRoundLimit';

/**
 * Defines the duration of a round and sets limits for maximum submissions per round
 */
export interface OrgSagebionetworksEvaluationModelEvaluationRound {
  id?: string;
  etag?: string;
  evaluationId: string;
  roundStart: string;
  roundEnd: string;
  /**
   * Optional. Sets limits for maximum submissions in this round.
   */
  limits?: Array<OrgSagebionetworksEvaluationModelEvaluationRoundLimit>;
}
