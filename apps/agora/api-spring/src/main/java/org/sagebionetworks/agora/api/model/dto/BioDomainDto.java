package org.sagebionetworks.agora.api.model.dto;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * BioDomain
 */

@Schema(name = "BioDomain", description = "BioDomain")
@JsonTypeName("BioDomain")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
// TODO Add x-java-class-annotations
public class BioDomainDto {

  private String biodomain;

  @Valid
  private List<String> goTerms = new ArrayList<>();

  private Integer nBiodomainTerms;

  private Integer nGeneBiodomainTerms;

  private Float pctLinkingTerms;

  public BioDomainDto() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public BioDomainDto(String biodomain, List<String> goTerms, Integer nBiodomainTerms, Integer nGeneBiodomainTerms, Float pctLinkingTerms) {
    this.biodomain = biodomain;
    this.goTerms = goTerms;
    this.nBiodomainTerms = nBiodomainTerms;
    this.nGeneBiodomainTerms = nGeneBiodomainTerms;
    this.pctLinkingTerms = pctLinkingTerms;
  }

  public BioDomainDto biodomain(String biodomain) {
    this.biodomain = biodomain;
    return this;
  }

  /**
   * Name of the biological domain
   * @return biodomain
  */
  @NotNull 
  @Schema(name = "biodomain", description = "Name of the biological domain", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("biodomain")
  public String getBiodomain() {
    return biodomain;
  }

  public void setBiodomain(String biodomain) {
    this.biodomain = biodomain;
  }

  public BioDomainDto goTerms(List<String> goTerms) {
    this.goTerms = goTerms;
    return this;
  }

  public BioDomainDto addGoTermsItem(String goTermsItem) {
    if (this.goTerms == null) {
      this.goTerms = new ArrayList<>();
    }
    this.goTerms.add(goTermsItem);
    return this;
  }

  /**
   * List of Gene Ontology (GO) terms
   * @return goTerms
  */
  @NotNull 
  @Schema(name = "go_terms", description = "List of Gene Ontology (GO) terms", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("go_terms")
  public List<String> getGoTerms() {
    return goTerms;
  }

  public void setGoTerms(List<String> goTerms) {
    this.goTerms = goTerms;
  }

  public BioDomainDto nBiodomainTerms(Integer nBiodomainTerms) {
    this.nBiodomainTerms = nBiodomainTerms;
    return this;
  }

  /**
   * Number of terms associated with the biological domain
   * @return nBiodomainTerms
  */
  @NotNull 
  @Schema(name = "n_biodomain_terms", description = "Number of terms associated with the biological domain", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("n_biodomain_terms")
  public Integer getnBiodomainTerms() {
    return nBiodomainTerms;
  }

  public void setnBiodomainTerms(Integer nBiodomainTerms) {
    this.nBiodomainTerms = nBiodomainTerms;
  }

  public BioDomainDto nGeneBiodomainTerms(Integer nGeneBiodomainTerms) {
    this.nGeneBiodomainTerms = nGeneBiodomainTerms;
    return this;
  }

  /**
   * Number of gene terms linked to the biological domain
   * @return nGeneBiodomainTerms
  */
  @NotNull 
  @Schema(name = "n_gene_biodomain_terms", description = "Number of gene terms linked to the biological domain", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("n_gene_biodomain_terms")
  public Integer getnGeneBiodomainTerms() {
    return nGeneBiodomainTerms;
  }

  public void setnGeneBiodomainTerms(Integer nGeneBiodomainTerms) {
    this.nGeneBiodomainTerms = nGeneBiodomainTerms;
  }

  public BioDomainDto pctLinkingTerms(Float pctLinkingTerms) {
    this.pctLinkingTerms = pctLinkingTerms;
    return this;
  }

  /**
   * Percentage of terms linking to the domain
   * @return pctLinkingTerms
  */
  @NotNull 
  @Schema(name = "pct_linking_terms", description = "Percentage of terms linking to the domain", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("pct_linking_terms")
  public Float getPctLinkingTerms() {
    return pctLinkingTerms;
  }

  public void setPctLinkingTerms(Float pctLinkingTerms) {
    this.pctLinkingTerms = pctLinkingTerms;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BioDomainDto bioDomain = (BioDomainDto) o;
    return Objects.equals(this.biodomain, bioDomain.biodomain) &&
        Objects.equals(this.goTerms, bioDomain.goTerms) &&
        Objects.equals(this.nBiodomainTerms, bioDomain.nBiodomainTerms) &&
        Objects.equals(this.nGeneBiodomainTerms, bioDomain.nGeneBiodomainTerms) &&
        Objects.equals(this.pctLinkingTerms, bioDomain.pctLinkingTerms);
  }

  @Override
  public int hashCode() {
    return Objects.hash(biodomain, goTerms, nBiodomainTerms, nGeneBiodomainTerms, pctLinkingTerms);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BioDomainDto {\n");
    sb.append("    biodomain: ").append(toIndentedString(biodomain)).append("\n");
    sb.append("    goTerms: ").append(toIndentedString(goTerms)).append("\n");
    sb.append("    nBiodomainTerms: ").append(toIndentedString(nBiodomainTerms)).append("\n");
    sb.append("    nGeneBiodomainTerms: ").append(toIndentedString(nGeneBiodomainTerms)).append("\n");
    sb.append("    pctLinkingTerms: ").append(toIndentedString(pctLinkingTerms)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

