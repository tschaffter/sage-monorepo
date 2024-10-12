/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (7.0.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package org.sagebionetworks.agora.api.api;

import org.sagebionetworks.agora.api.model.dto.BasicErrorDto;
import org.sagebionetworks.agora.api.model.dto.TeamsListDto;
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
@Tag(name = "Teams", description = "the Teams API")
public interface TeamsApi {

    default TeamsApiDelegate getDelegate() {
        return new TeamsApiDelegate() {};
    }

    /**
     * GET /teamMembers/{name}/image : Get Team Member Image
     * Get Team Member Image
     *
     * @param name  (required)
     * @return Success (status code 200)
     *         or Invalid request (status code 400)
     *         or The request cannot be fulfilled due to an unexpected server error (status code 500)
     */
    @Operation(
        operationId = "getTeamMemberImage",
        summary = "Get Team Member Image",
        description = "Get Team Member Image",
        tags = { "Teams" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Success", content = {
                @Content(mediaType = "image/jpg", schema = @Schema(implementation = org.springframework.core.io.Resource.class)),
                @Content(mediaType = "image/jpeg", schema = @Schema(implementation = org.springframework.core.io.Resource.class)),
                @Content(mediaType = "image/png", schema = @Schema(implementation = org.springframework.core.io.Resource.class)),
                @Content(mediaType = "application/problem+json", schema = @Schema(implementation = org.springframework.core.io.Resource.class))
            }),
            @ApiResponse(responseCode = "400", description = "Invalid request", content = {
                @Content(mediaType = "image/jpg", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "image/jpeg", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "image/png", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "application/problem+json", schema = @Schema(implementation = BasicErrorDto.class))
            }),
            @ApiResponse(responseCode = "500", description = "The request cannot be fulfilled due to an unexpected server error", content = {
                @Content(mediaType = "image/jpg", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "image/jpeg", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "image/png", schema = @Schema(implementation = BasicErrorDto.class)),
                @Content(mediaType = "application/problem+json", schema = @Schema(implementation = BasicErrorDto.class))
            })
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/teamMembers/{name}/image",
        produces = { "image/jpg", "image/jpeg", "image/png", "application/problem+json" }
    )
    default ResponseEntity<org.springframework.core.io.Resource> getTeamMemberImage(
        @Parameter(name = "name", description = "", required = true, in = ParameterIn.PATH) @PathVariable("name") String name
    ) {
        return getDelegate().getTeamMemberImage(name);
    }


    /**
     * GET /teams : List Teams
     * List Teams
     *
     * @return Success (status code 200)
     *         or Invalid request (status code 400)
     *         or The request cannot be fulfilled due to an unexpected server error (status code 500)
     */
    @Operation(
        operationId = "listTeams",
        summary = "List Teams",
        description = "List Teams",
        tags = { "Teams" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Success", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = TeamsListDto.class)),
                @Content(mediaType = "application/problem+json", schema = @Schema(implementation = TeamsListDto.class))
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
        value = "/teams",
        produces = { "application/json", "application/problem+json" }
    )
    default ResponseEntity<TeamsListDto> listTeams(
        
    ) {
        return getDelegate().listTeams();
    }

}
