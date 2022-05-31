/**
 * Registry of Open Community Challenges API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA
 *
 * The version of the OpenAPI document: 0.6.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ChallengeSponsorRole } from './challengeSponsorRole';

/**
 * The information used to create a challenge sponsor
 */
export interface ChallengeSponsorCreateRequest {
  name: string;
  /**
   * The user or organization account name
   */
  login?: string;
  roles?: Array<ChallengeSponsorRole>;
}
