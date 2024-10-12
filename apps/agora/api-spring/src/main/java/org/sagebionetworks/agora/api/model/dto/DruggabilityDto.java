package org.sagebionetworks.agora.api.model.dto;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * Druggability
 */

@Schema(name = "Druggability", description = "Druggability")
@JsonTypeName("Druggability")
@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
// TODO Add x-java-class-annotations
public class DruggabilityDto {

  private Integer smDruggabilityBucket;

  private Integer safetyBucket;

  private Integer ababilityBucket;

  private String pharosClass;

  private String classification;

  private String safetyBucketDefinition;

  private String ababilityBucketDefinition;

  public DruggabilityDto() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public DruggabilityDto(Integer smDruggabilityBucket, Integer safetyBucket, Integer ababilityBucket, String pharosClass, String classification, String safetyBucketDefinition, String ababilityBucketDefinition) {
    this.smDruggabilityBucket = smDruggabilityBucket;
    this.safetyBucket = safetyBucket;
    this.ababilityBucket = ababilityBucket;
    this.pharosClass = pharosClass;
    this.classification = classification;
    this.safetyBucketDefinition = safetyBucketDefinition;
    this.ababilityBucketDefinition = ababilityBucketDefinition;
  }

  public DruggabilityDto smDruggabilityBucket(Integer smDruggabilityBucket) {
    this.smDruggabilityBucket = smDruggabilityBucket;
    return this;
  }

  /**
   * Get smDruggabilityBucket
   * @return smDruggabilityBucket
  */
  @NotNull 
  @Schema(name = "sm_druggability_bucket", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("sm_druggability_bucket")
  public Integer getSmDruggabilityBucket() {
    return smDruggabilityBucket;
  }

  public void setSmDruggabilityBucket(Integer smDruggabilityBucket) {
    this.smDruggabilityBucket = smDruggabilityBucket;
  }

  public DruggabilityDto safetyBucket(Integer safetyBucket) {
    this.safetyBucket = safetyBucket;
    return this;
  }

  /**
   * Get safetyBucket
   * @return safetyBucket
  */
  @NotNull 
  @Schema(name = "safety_bucket", example = "2", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("safety_bucket")
  public Integer getSafetyBucket() {
    return safetyBucket;
  }

  public void setSafetyBucket(Integer safetyBucket) {
    this.safetyBucket = safetyBucket;
  }

  public DruggabilityDto ababilityBucket(Integer ababilityBucket) {
    this.ababilityBucket = ababilityBucket;
    return this;
  }

  /**
   * Get ababilityBucket
   * @return ababilityBucket
  */
  @NotNull 
  @Schema(name = "abability_bucket", example = "3", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("abability_bucket")
  public Integer getAbabilityBucket() {
    return ababilityBucket;
  }

  public void setAbabilityBucket(Integer ababilityBucket) {
    this.ababilityBucket = ababilityBucket;
  }

  public DruggabilityDto pharosClass(String pharosClass) {
    this.pharosClass = pharosClass;
    return this;
  }

  /**
   * Get pharosClass
   * @return pharosClass
  */
  @NotNull 
  @Schema(name = "pharos_class", example = "Tclin", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("pharos_class")
  public String getPharosClass() {
    return pharosClass;
  }

  public void setPharosClass(String pharosClass) {
    this.pharosClass = pharosClass;
  }

  public DruggabilityDto classification(String classification) {
    this.classification = classification;
    return this;
  }

  /**
   * Get classification
   * @return classification
  */
  @NotNull 
  @Schema(name = "classification", example = "Enzyme", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("classification")
  public String getClassification() {
    return classification;
  }

  public void setClassification(String classification) {
    this.classification = classification;
  }

  public DruggabilityDto safetyBucketDefinition(String safetyBucketDefinition) {
    this.safetyBucketDefinition = safetyBucketDefinition;
    return this;
  }

  /**
   * Get safetyBucketDefinition
   * @return safetyBucketDefinition
  */
  @NotNull 
  @Schema(name = "safety_bucket_definition", example = "Low risk", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("safety_bucket_definition")
  public String getSafetyBucketDefinition() {
    return safetyBucketDefinition;
  }

  public void setSafetyBucketDefinition(String safetyBucketDefinition) {
    this.safetyBucketDefinition = safetyBucketDefinition;
  }

  public DruggabilityDto ababilityBucketDefinition(String ababilityBucketDefinition) {
    this.ababilityBucketDefinition = ababilityBucketDefinition;
    return this;
  }

  /**
   * Get ababilityBucketDefinition
   * @return ababilityBucketDefinition
  */
  @NotNull 
  @Schema(name = "abability_bucket_definition", example = "Moderate bioavailability", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("abability_bucket_definition")
  public String getAbabilityBucketDefinition() {
    return ababilityBucketDefinition;
  }

  public void setAbabilityBucketDefinition(String ababilityBucketDefinition) {
    this.ababilityBucketDefinition = ababilityBucketDefinition;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DruggabilityDto druggability = (DruggabilityDto) o;
    return Objects.equals(this.smDruggabilityBucket, druggability.smDruggabilityBucket) &&
        Objects.equals(this.safetyBucket, druggability.safetyBucket) &&
        Objects.equals(this.ababilityBucket, druggability.ababilityBucket) &&
        Objects.equals(this.pharosClass, druggability.pharosClass) &&
        Objects.equals(this.classification, druggability.classification) &&
        Objects.equals(this.safetyBucketDefinition, druggability.safetyBucketDefinition) &&
        Objects.equals(this.ababilityBucketDefinition, druggability.ababilityBucketDefinition);
  }

  @Override
  public int hashCode() {
    return Objects.hash(smDruggabilityBucket, safetyBucket, ababilityBucket, pharosClass, classification, safetyBucketDefinition, ababilityBucketDefinition);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DruggabilityDto {\n");
    sb.append("    smDruggabilityBucket: ").append(toIndentedString(smDruggabilityBucket)).append("\n");
    sb.append("    safetyBucket: ").append(toIndentedString(safetyBucket)).append("\n");
    sb.append("    ababilityBucket: ").append(toIndentedString(ababilityBucket)).append("\n");
    sb.append("    pharosClass: ").append(toIndentedString(pharosClass)).append("\n");
    sb.append("    classification: ").append(toIndentedString(classification)).append("\n");
    sb.append("    safetyBucketDefinition: ").append(toIndentedString(safetyBucketDefinition)).append("\n");
    sb.append("    ababilityBucketDefinition: ").append(toIndentedString(ababilityBucketDefinition)).append("\n");
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

