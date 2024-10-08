/**
 * Agora REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { BioDomain } from './bioDomain';

/**
 * BioDomains
 */
export interface BioDomains {
  /**
   * The Ensembl Gene ID.
   */
  ensembl_gene_id: string;
  /**
   * A list of gene biodomains.
   */
  gene_biodomains: Array<BioDomain>;
}
