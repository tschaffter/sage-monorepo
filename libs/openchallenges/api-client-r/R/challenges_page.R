#' Create a new ChallengesPage
#'
#' @description
#' A page of challenges.
#'
#' @docType class
#' @title ChallengesPage
#' @description ChallengesPage Class
#' @format An \code{R6Class} generator object
#' @field number The page number. integer
#' @field size The number of items in a single page. integer
#' @field totalElements Total number of elements in the result set. integer
#' @field totalPages Total number of pages in the result set. integer
#' @field hasNext Returns if there is a next page. character
#' @field hasPrevious Returns if there is a previous page. character
#' @field challenges A list of challenges. list(\link{Challenge})
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
ChallengesPage <- R6::R6Class(
  "ChallengesPage",
  public = list(
    `number` = NULL,
    `size` = NULL,
    `totalElements` = NULL,
    `totalPages` = NULL,
    `hasNext` = NULL,
    `hasPrevious` = NULL,
    `challenges` = NULL,
    #' Initialize a new ChallengesPage class.
    #'
    #' @description
    #' Initialize a new ChallengesPage class.
    #'
    #' @param number The page number.
    #' @param size The number of items in a single page.
    #' @param totalElements Total number of elements in the result set.
    #' @param totalPages Total number of pages in the result set.
    #' @param hasNext Returns if there is a next page.
    #' @param hasPrevious Returns if there is a previous page.
    #' @param challenges A list of challenges.
    #' @param ... Other optional arguments.
    #' @export
    initialize = function(`number`, `size`, `totalElements`, `totalPages`, `hasNext`, `hasPrevious`, `challenges`, ...) {
      if (!missing(`number`)) {
        if (!(is.numeric(`number`) && length(`number`) == 1)) {
          stop(paste("Error! Invalid data for `number`. Must be an integer:", `number`))
        }
        self$`number` <- `number`
      }
      if (!missing(`size`)) {
        if (!(is.numeric(`size`) && length(`size`) == 1)) {
          stop(paste("Error! Invalid data for `size`. Must be an integer:", `size`))
        }
        self$`size` <- `size`
      }
      if (!missing(`totalElements`)) {
        if (!(is.numeric(`totalElements`) && length(`totalElements`) == 1)) {
          stop(paste("Error! Invalid data for `totalElements`. Must be an integer:", `totalElements`))
        }
        self$`totalElements` <- `totalElements`
      }
      if (!missing(`totalPages`)) {
        if (!(is.numeric(`totalPages`) && length(`totalPages`) == 1)) {
          stop(paste("Error! Invalid data for `totalPages`. Must be an integer:", `totalPages`))
        }
        self$`totalPages` <- `totalPages`
      }
      if (!missing(`hasNext`)) {
        if (!(is.logical(`hasNext`) && length(`hasNext`) == 1)) {
          stop(paste("Error! Invalid data for `hasNext`. Must be a boolean:", `hasNext`))
        }
        self$`hasNext` <- `hasNext`
      }
      if (!missing(`hasPrevious`)) {
        if (!(is.logical(`hasPrevious`) && length(`hasPrevious`) == 1)) {
          stop(paste("Error! Invalid data for `hasPrevious`. Must be a boolean:", `hasPrevious`))
        }
        self$`hasPrevious` <- `hasPrevious`
      }
      if (!missing(`challenges`)) {
        stopifnot(is.vector(`challenges`), length(`challenges`) != 0)
        sapply(`challenges`, function(x) stopifnot(R6::is.R6(x)))
        self$`challenges` <- `challenges`
      }
    },
    #' To JSON string
    #'
    #' @description
    #' To JSON String
    #'
    #' @return ChallengesPage in JSON format
    #' @export
    toJSON = function() {
      ChallengesPageObject <- list()
      if (!is.null(self$`number`)) {
        ChallengesPageObject[["number"]] <-
          self$`number`
      }
      if (!is.null(self$`size`)) {
        ChallengesPageObject[["size"]] <-
          self$`size`
      }
      if (!is.null(self$`totalElements`)) {
        ChallengesPageObject[["totalElements"]] <-
          self$`totalElements`
      }
      if (!is.null(self$`totalPages`)) {
        ChallengesPageObject[["totalPages"]] <-
          self$`totalPages`
      }
      if (!is.null(self$`hasNext`)) {
        ChallengesPageObject[["hasNext"]] <-
          self$`hasNext`
      }
      if (!is.null(self$`hasPrevious`)) {
        ChallengesPageObject[["hasPrevious"]] <-
          self$`hasPrevious`
      }
      if (!is.null(self$`challenges`)) {
        ChallengesPageObject[["challenges"]] <-
          lapply(self$`challenges`, function(x) x$toJSON())
      }
      ChallengesPageObject
    },
    #' Deserialize JSON string into an instance of ChallengesPage
    #'
    #' @description
    #' Deserialize JSON string into an instance of ChallengesPage
    #'
    #' @param input_json the JSON input
    #' @return the instance of ChallengesPage
    #' @export
    fromJSON = function(input_json) {
      this_object <- jsonlite::fromJSON(input_json)
      if (!is.null(this_object$`number`)) {
        self$`number` <- this_object$`number`
      }
      if (!is.null(this_object$`size`)) {
        self$`size` <- this_object$`size`
      }
      if (!is.null(this_object$`totalElements`)) {
        self$`totalElements` <- this_object$`totalElements`
      }
      if (!is.null(this_object$`totalPages`)) {
        self$`totalPages` <- this_object$`totalPages`
      }
      if (!is.null(this_object$`hasNext`)) {
        self$`hasNext` <- this_object$`hasNext`
      }
      if (!is.null(this_object$`hasPrevious`)) {
        self$`hasPrevious` <- this_object$`hasPrevious`
      }
      if (!is.null(this_object$`challenges`)) {
        self$`challenges` <- ApiClient$new()$deserializeObj(this_object$`challenges`, "array[Challenge]", loadNamespace("openapi"))
      }
      self
    },
    #' To JSON string
    #'
    #' @description
    #' To JSON String
    #'
    #' @return ChallengesPage in JSON format
    #' @export
    toJSONString = function() {
      jsoncontent <- c(
        if (!is.null(self$`number`)) {
          sprintf(
          '"number":
            %d
                    ',
          self$`number`
          )
        },
        if (!is.null(self$`size`)) {
          sprintf(
          '"size":
            %d
                    ',
          self$`size`
          )
        },
        if (!is.null(self$`totalElements`)) {
          sprintf(
          '"totalElements":
            %d
                    ',
          self$`totalElements`
          )
        },
        if (!is.null(self$`totalPages`)) {
          sprintf(
          '"totalPages":
            %d
                    ',
          self$`totalPages`
          )
        },
        if (!is.null(self$`hasNext`)) {
          sprintf(
          '"hasNext":
            %s
                    ',
          tolower(self$`hasNext`)
          )
        },
        if (!is.null(self$`hasPrevious`)) {
          sprintf(
          '"hasPrevious":
            %s
                    ',
          tolower(self$`hasPrevious`)
          )
        },
        if (!is.null(self$`challenges`)) {
          sprintf(
          '"challenges":
          [%s]
',
          paste(sapply(self$`challenges`, function(x) jsonlite::toJSON(x$toJSON(), auto_unbox = TRUE, digits = NA)), collapse = ",")
          )
        }
      )
      jsoncontent <- paste(jsoncontent, collapse = ",")
      json_string <- as.character(jsonlite::minify(paste("{", jsoncontent, "}", sep = "")))
    },
    #' Deserialize JSON string into an instance of ChallengesPage
    #'
    #' @description
    #' Deserialize JSON string into an instance of ChallengesPage
    #'
    #' @param input_json the JSON input
    #' @return the instance of ChallengesPage
    #' @export
    fromJSONString = function(input_json) {
      this_object <- jsonlite::fromJSON(input_json)
      self$`number` <- this_object$`number`
      self$`size` <- this_object$`size`
      self$`totalElements` <- this_object$`totalElements`
      self$`totalPages` <- this_object$`totalPages`
      self$`hasNext` <- this_object$`hasNext`
      self$`hasPrevious` <- this_object$`hasPrevious`
      self$`challenges` <- ApiClient$new()$deserializeObj(this_object$`challenges`, "array[Challenge]", loadNamespace("openapi"))
      self
    },
    #' Validate JSON input with respect to ChallengesPage
    #'
    #' @description
    #' Validate JSON input with respect to ChallengesPage and throw an exception if invalid
    #'
    #' @param input the JSON input
    #' @export
    validateJSON = function(input) {
      input_json <- jsonlite::fromJSON(input)
      # check the required field `number`
      if (!is.null(input_json$`number`)) {
        if (!(is.numeric(input_json$`number`) && length(input_json$`number`) == 1)) {
          stop(paste("Error! Invalid data for `number`. Must be an integer:", input_json$`number`))
        }
      } else {
        stop(paste("The JSON input `", input, "` is invalid for ChallengesPage: the required field `number` is missing."))
      }
      # check the required field `size`
      if (!is.null(input_json$`size`)) {
        if (!(is.numeric(input_json$`size`) && length(input_json$`size`) == 1)) {
          stop(paste("Error! Invalid data for `size`. Must be an integer:", input_json$`size`))
        }
      } else {
        stop(paste("The JSON input `", input, "` is invalid for ChallengesPage: the required field `size` is missing."))
      }
      # check the required field `totalElements`
      if (!is.null(input_json$`totalElements`)) {
        if (!(is.numeric(input_json$`totalElements`) && length(input_json$`totalElements`) == 1)) {
          stop(paste("Error! Invalid data for `totalElements`. Must be an integer:", input_json$`totalElements`))
        }
      } else {
        stop(paste("The JSON input `", input, "` is invalid for ChallengesPage: the required field `totalElements` is missing."))
      }
      # check the required field `totalPages`
      if (!is.null(input_json$`totalPages`)) {
        if (!(is.numeric(input_json$`totalPages`) && length(input_json$`totalPages`) == 1)) {
          stop(paste("Error! Invalid data for `totalPages`. Must be an integer:", input_json$`totalPages`))
        }
      } else {
        stop(paste("The JSON input `", input, "` is invalid for ChallengesPage: the required field `totalPages` is missing."))
      }
      # check the required field `hasNext`
      if (!is.null(input_json$`hasNext`)) {
        if (!(is.logical(input_json$`hasNext`) && length(input_json$`hasNext`) == 1)) {
          stop(paste("Error! Invalid data for `hasNext`. Must be a boolean:", input_json$`hasNext`))
        }
      } else {
        stop(paste("The JSON input `", input, "` is invalid for ChallengesPage: the required field `hasNext` is missing."))
      }
      # check the required field `hasPrevious`
      if (!is.null(input_json$`hasPrevious`)) {
        if (!(is.logical(input_json$`hasPrevious`) && length(input_json$`hasPrevious`) == 1)) {
          stop(paste("Error! Invalid data for `hasPrevious`. Must be a boolean:", input_json$`hasPrevious`))
        }
      } else {
        stop(paste("The JSON input `", input, "` is invalid for ChallengesPage: the required field `hasPrevious` is missing."))
      }
      # check the required field `challenges`
      if (!is.null(input_json$`challenges`)) {
        stopifnot(is.vector(input_json$`challenges`), length(input_json$`challenges`) != 0)
        tmp <- sapply(input_json$`challenges`, function(x) stopifnot(R6::is.R6(x)))
      } else {
        stop(paste("The JSON input `", input, "` is invalid for ChallengesPage: the required field `challenges` is missing."))
      }
    },
    #' To string (JSON format)
    #'
    #' @description
    #' To string (JSON format)
    #'
    #' @return String representation of ChallengesPage
    #' @export
    toString = function() {
      self$toJSONString()
    },
    #' Return true if the values in all fields are valid.
    #'
    #' @description
    #' Return true if the values in all fields are valid.
    #'
    #' @return true if the values in all fields are valid.
    #' @export
    isValid = function() {
      # check if the required `number` is null
      if (is.null(self$`number`)) {
        return(FALSE)
      }

      # check if the required `size` is null
      if (is.null(self$`size`)) {
        return(FALSE)
      }

      # check if the required `totalElements` is null
      if (is.null(self$`totalElements`)) {
        return(FALSE)
      }

      # check if the required `totalPages` is null
      if (is.null(self$`totalPages`)) {
        return(FALSE)
      }

      # check if the required `hasNext` is null
      if (is.null(self$`hasNext`)) {
        return(FALSE)
      }

      # check if the required `hasPrevious` is null
      if (is.null(self$`hasPrevious`)) {
        return(FALSE)
      }

      # check if the required `challenges` is null
      if (is.null(self$`challenges`)) {
        return(FALSE)
      }

      TRUE
    },
    #' Return a list of invalid fields (if any).
    #'
    #' @description
    #' Return a list of invalid fields (if any).
    #'
    #' @return A list of invalid fields (if any).
    #' @export
    getInvalidFields = function() {
      invalid_fields <- list()
      # check if the required `number` is null
      if (is.null(self$`number`)) {
        invalid_fields["number"] <- "Non-nullable required field `number` cannot be null."
      }

      # check if the required `size` is null
      if (is.null(self$`size`)) {
        invalid_fields["size"] <- "Non-nullable required field `size` cannot be null."
      }

      # check if the required `totalElements` is null
      if (is.null(self$`totalElements`)) {
        invalid_fields["totalElements"] <- "Non-nullable required field `totalElements` cannot be null."
      }

      # check if the required `totalPages` is null
      if (is.null(self$`totalPages`)) {
        invalid_fields["totalPages"] <- "Non-nullable required field `totalPages` cannot be null."
      }

      # check if the required `hasNext` is null
      if (is.null(self$`hasNext`)) {
        invalid_fields["hasNext"] <- "Non-nullable required field `hasNext` cannot be null."
      }

      # check if the required `hasPrevious` is null
      if (is.null(self$`hasPrevious`)) {
        invalid_fields["hasPrevious"] <- "Non-nullable required field `hasPrevious` cannot be null."
      }

      # check if the required `challenges` is null
      if (is.null(self$`challenges`)) {
        invalid_fields["challenges"] <- "Non-nullable required field `challenges` cannot be null."
      }

      invalid_fields
    },
    #' Print the object
    #'
    #' @description
    #' Print the object
    #'
    #' @export
    print = function() {
      print(jsonlite::prettify(self$toJSONString()))
      invisible(self)
    }
  ),
  # Lock the class to prevent modifications to the method or field
  lock_class = TRUE
)
## Uncomment below to unlock the class to allow modifications of the method or field
# ChallengesPage$unlock()
#
## Below is an example to define the print function
# ChallengesPage$set("public", "print", function(...) {
#   print(jsonlite::prettify(self$toJSONString()))
#   invisible(self)
# })
## Uncomment below to lock the class to prevent modifications to the method or field
# ChallengesPage$lock()

