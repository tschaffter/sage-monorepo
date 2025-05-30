/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelAnnotationLongAnnotation } from './orgSagebionetworksRepoModelAnnotationLongAnnotation';
import { OrgSagebionetworksRepoModelAnnotationStringAnnotation } from './orgSagebionetworksRepoModelAnnotationStringAnnotation';
import { OrgSagebionetworksRepoModelAnnotationDoubleAnnotation } from './orgSagebionetworksRepoModelAnnotationDoubleAnnotation';

/**
 * Primary container object for Annotations on a Synapse object
 */
export interface OrgSagebionetworksRepoModelAnnotationAnnotations {
  objectId?: string;
  scopeId?: string;
  version?: number;
  /**
   * A list of StringAnnnotations
   */
  stringAnnos?: Array<OrgSagebionetworksRepoModelAnnotationStringAnnotation>;
  /**
   * A list of LongAnnnotations
   */
  longAnnos?: Array<OrgSagebionetworksRepoModelAnnotationLongAnnotation>;
  /**
   * A list of DoubleAnnnotations
   */
  doubleAnnos?: Array<OrgSagebionetworksRepoModelAnnotationDoubleAnnotation>;
}
