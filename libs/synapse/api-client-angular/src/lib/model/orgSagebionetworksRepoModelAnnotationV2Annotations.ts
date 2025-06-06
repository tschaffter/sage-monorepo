/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelAnnotationV2AnnotationsValue } from './orgSagebionetworksRepoModelAnnotationV2AnnotationsValue';

/**
 * Annotations are additional key-value pair metadata that are associated with an object.
 */
export interface OrgSagebionetworksRepoModelAnnotationV2Annotations {
  id?: string;
  etag?: string;
  /**
   * Additional metadata associated with the object. The key is the name of your desired annotations. The value is an object containing a list of string values (use empty list to represent no values for key) and the value type associated with all values in the list
   */
  annotations?: { [key: string]: OrgSagebionetworksRepoModelAnnotationV2AnnotationsValue };
}
