# R API client for openapi

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project. By using the [OpenAPI spec](https://openapis.org) from a remote server, you can easily generate an API client.

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.RClientCodegen
For more information, please visit [https://github.com/Sage-Bionetworks/sage-monorepo](https://github.com/Sage-Bionetworks/sage-monorepo)

## Installation

### Prerequisites

Install the dependencies

```R
install.packages("jsonlite")
install.packages("httr")
install.packages("base64enc")
```

### Build the package

```sh
git clone https://github.com/GIT_USER_ID/GIT_REPO_ID
cd GIT_REPO_ID
R CMD build .
R CMD check openapi_1.0.0.tar.gz --no-manual
R CMD INSTALL --preclean openapi_1.0.0.tar.gz
```

### Install the package

```R
install.packages("openapi")
```

To install directly from Github, use `devtools`:
```R
install.packages("devtools")
library(devtools)
install_github("GIT_USER_ID/GIT_REPO_ID")
```

To install the package from a local file:
```R
install.packages("openapi_1.0.0.tar.gz", repos = NULL, type = "source")
```

### Usage

```R
library(openapi)
```

### Reformat code

To reformat code using [styler](https://styler.r-lib.org/index.html), please run the following in the R console:

```R
install.packages("remotes")
remotes::install_github("r-lib/styler@v1.7.0.9003")
library("styler")
style_dir()
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ChallengeApi* | [**GetChallenge**](docs/ChallengeApi.md#GetChallenge) | **GET** /challenges/{challengeId} | Get a challenge
*ChallengeApi* | [**ListChallenges**](docs/ChallengeApi.md#ListChallenges) | **GET** /challenges | List challenges
*ChallengeContributionApi* | [**ListChallengeContributions**](docs/ChallengeContributionApi.md#ListChallengeContributions) | **GET** /challenges/{challengeId}/contributions | List challenge contributions
*ChallengeInputDataTypeApi* | [**ListChallengeInputDataTypes**](docs/ChallengeInputDataTypeApi.md#ListChallengeInputDataTypes) | **GET** /challengeInputDataTypes | List challenge input data types
*ChallengePlatformApi* | [**GetChallengePlatform**](docs/ChallengePlatformApi.md#GetChallengePlatform) | **GET** /challengePlatforms/{challengePlatformName} | Get a challenge platform
*ChallengePlatformApi* | [**ListChallengePlatforms**](docs/ChallengePlatformApi.md#ListChallengePlatforms) | **GET** /challengePlatforms | List challenge platforms
*ImageApi* | [**GetImage**](docs/ImageApi.md#GetImage) | **GET** /images | Get an image
*OrganizationApi* | [**GetOrganization**](docs/OrganizationApi.md#GetOrganization) | **GET** /organizations/{org} | Get an organization
*OrganizationApi* | [**ListOrganizations**](docs/OrganizationApi.md#ListOrganizations) | **GET** /organizations | List organizations


## Documentation for Models

 - [BasicError](docs/BasicError.md)
 - [Challenge](docs/Challenge.md)
 - [ChallengeContribution](docs/ChallengeContribution.md)
 - [ChallengeContributionRole](docs/ChallengeContributionRole.md)
 - [ChallengeContributionsPage](docs/ChallengeContributionsPage.md)
 - [ChallengeDifficulty](docs/ChallengeDifficulty.md)
 - [ChallengeDirection](docs/ChallengeDirection.md)
 - [ChallengeIncentive](docs/ChallengeIncentive.md)
 - [ChallengeInputDataType](docs/ChallengeInputDataType.md)
 - [ChallengeInputDataTypeDirection](docs/ChallengeInputDataTypeDirection.md)
 - [ChallengeInputDataTypeSearchQuery](docs/ChallengeInputDataTypeSearchQuery.md)
 - [ChallengeInputDataTypeSort](docs/ChallengeInputDataTypeSort.md)
 - [ChallengeInputDataTypesPage](docs/ChallengeInputDataTypesPage.md)
 - [ChallengePlatform](docs/ChallengePlatform.md)
 - [ChallengePlatformDirection](docs/ChallengePlatformDirection.md)
 - [ChallengePlatformSearchQuery](docs/ChallengePlatformSearchQuery.md)
 - [ChallengePlatformSort](docs/ChallengePlatformSort.md)
 - [ChallengePlatformsPage](docs/ChallengePlatformsPage.md)
 - [ChallengeSearchQuery](docs/ChallengeSearchQuery.md)
 - [ChallengeSort](docs/ChallengeSort.md)
 - [ChallengeStatus](docs/ChallengeStatus.md)
 - [ChallengeSubmissionType](docs/ChallengeSubmissionType.md)
 - [ChallengesPage](docs/ChallengesPage.md)
 - [Image](docs/Image.md)
 - [ImageAspectRatio](docs/ImageAspectRatio.md)
 - [ImageHeight](docs/ImageHeight.md)
 - [ImageQuery](docs/ImageQuery.md)
 - [Organization](docs/Organization.md)
 - [OrganizationCategory](docs/OrganizationCategory.md)
 - [OrganizationDirection](docs/OrganizationDirection.md)
 - [OrganizationSearchQuery](docs/OrganizationSearchQuery.md)
 - [OrganizationSort](docs/OrganizationSort.md)
 - [OrganizationsPage](docs/OrganizationsPage.md)
 - [PageMetadata](docs/PageMetadata.md)
 - [SimpleChallengeInputDataType](docs/SimpleChallengeInputDataType.md)
 - [SimpleChallengePlatform](docs/SimpleChallengePlatform.md)


## Documentation for Authorization

Endpoints do not require authorization.


