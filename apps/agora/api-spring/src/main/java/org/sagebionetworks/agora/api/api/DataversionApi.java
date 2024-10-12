/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.0.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package org.sagebionetworks.agora.api.api;

import org.sagebionetworks.agora.api.model.dto.BasicErrorDto;
import org.sagebionetworks.agora.api.model.dto.DataversionDto;
import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Map;
import javax.annotation.Generated;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen")
@Validated
@Tag(name = "Dataversion", description = "Operations about dataversion.")
public interface DataversionApi {

    default DataversionApiDelegate getDelegate() {
        return new DataversionApiDelegate() {};
    }

    /**
     * GET /dataversion : Get dataversion
     * Get dataversion
     *
     * @return Success (status code 200)
     *         or Invalid request (status code 400)
     *         or The request cannot be fulfilled due to an unexpected server error (status code 500)
     */
    @Operation(
        operationId = "getDataversion",
        summary = "Get dataversion",
        description = "Get dataversion",
        tags = { "Dataversion" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Success", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = DataversionDto.class)),
                @Content(mediaType = "application/problem+json", schema = @Schema(implementation = DataversionDto.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "application/problem+json", schema = @Schema(implementation = BasicErrorDto.class))
            }),
            @ApiResponse(responseCode = "500", description = "The request cannot be fulfilled due to an unexpected server error", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "application/problem+json", schema = @Schema(implementation = BasicErrorDto.class))
            })
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/dataversion",
        produces = { "application/json", "application/problem+json" }
    )
    default ResponseEntity<DataversionDto> getDataversion(
        
    ) {
        return getDelegate().getDataversion();
    }

}
