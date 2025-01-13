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

/**
 * Gene Network Links
 */
export interface GeneNetworkLinks {
  /**
   * Ensembl gene ID for gene A
   */
  geneA_ensembl_gene_id: string;
  /**
   * Ensembl gene ID for gene B
   */
  geneB_ensembl_gene_id: string;
  /**
   * External gene name for gene A
   */
  geneA_external_gene_name: string;
  /**
   * External gene name for gene B
   */
  geneB_external_gene_name: string;
  /**
   * Associated brain region
   */
  brainRegion: string;
}