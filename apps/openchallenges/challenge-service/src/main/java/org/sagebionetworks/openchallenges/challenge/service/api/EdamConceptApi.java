/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (6.2.1).
 * https://openapi-generator.tech Do not edit the class manually.
 */
package org.sagebionetworks.openchallenges.challenge.service.api;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.annotation.Generated;
import javax.validation.Valid;
import javax.validation.constraints.*;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.BasicErrorDto;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.EdamConceptSearchQueryDto;
import org.sagebionetworks.openchallenges.challenge.service.model.dto.EdamConceptsPageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
@Validated
@Tag(name = "EdamConcept", description = "Operations about EDAM concepts.")
public interface EdamConceptApi {
  default EdamConceptApiDelegate getDelegate() {
    return new EdamConceptApiDelegate() {};
  }

  /**
   * GET /edamConcepts : List EDAM concepts List EDAM concepts
   *
   * @param edamConceptSearchQuery The search query used to find EDAM concepts. (optional)
   * @return Success (status code 200) or Invalid request (status code 400) or The request cannot be
   *     fulfilled due to an unexpected server error (status code 500)
   */
  @Operation(
    operationId = "listEdamConcepts",
    summary = "List EDAM concepts",
    tags = { "EdamConcept" },
    responses = {
      @ApiResponse(
        responseCode = "200",
        description = "Success",
        content = {
          @Content(
            mediaType = "application/json",
            schema = @Schema(implementation = EdamConceptsPageDto.class)
          ),
          @Content(
            mediaType = "application/problem+json",
            schema = @Schema(implementation = EdamConceptsPageDto.class)
          ),
        }
      ),
      @ApiResponse(
        responseCode = "400",
        description = "Invalid request",
        content = {
          @Content(
            mediaType = "application/json",
            schema = @Schema(implementation = BasicErrorDto.class)
          ),
          @Content(
            mediaType = "application/problem+json",
            schema = @Schema(implementation = BasicErrorDto.class)
          ),
        }
      ),
      @ApiResponse(
        responseCode = "500",
        description = "The request cannot be fulfilled due to an unexpected server error",
        content = {
          @Content(
            mediaType = "application/json",
            schema = @Schema(implementation = BasicErrorDto.class)
          ),
          @Content(
            mediaType = "application/problem+json",
            schema = @Schema(implementation = BasicErrorDto.class)
          ),
        }
      ),
    }
  )
  @RequestMapping(
    method = RequestMethod.GET,
    value = "/edamConcepts",
    produces = { "application/json", "application/problem+json" }
  )
  default ResponseEntity<EdamConceptsPageDto> listEdamConcepts(
    @Parameter(
      name = "edamConceptSearchQuery",
      description = "The search query used to find EDAM concepts."
    ) @Valid EdamConceptSearchQueryDto edamConceptSearchQuery
  ) {
    return getDelegate().listEdamConcepts(edamConceptSearchQuery);
  }
}
