# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate

context("Test Challenge")

model_instance <- Challenge$new()

test_that("id", {
  # tests for the property `id` (integer)
  # The unique identifier of the challenge.

  # uncomment below to test the property
  #expect_equal(model.instance$`id`, "EXPECTED_RESULT")
})

test_that("slug", {
  # tests for the property `slug` (character)
  # The slug of the challenge.

  # uncomment below to test the property
  #expect_equal(model.instance$`slug`, "EXPECTED_RESULT")
})

test_that("name", {
  # tests for the property `name` (character)
  # The name of the challenge.

  # uncomment below to test the property
  #expect_equal(model.instance$`name`, "EXPECTED_RESULT")
})

test_that("headline", {
  # tests for the property `headline` (character)
  # The headline of the challenge.

  # uncomment below to test the property
  #expect_equal(model.instance$`headline`, "EXPECTED_RESULT")
})

test_that("description", {
  # tests for the property `description` (character)
  # The description of the challenge.

  # uncomment below to test the property
  #expect_equal(model.instance$`description`, "EXPECTED_RESULT")
})

test_that("doi", {
  # tests for the property `doi` (character)

  # uncomment below to test the property
  #expect_equal(model.instance$`doi`, "EXPECTED_RESULT")
})

test_that("status", {
  # tests for the property `status` (ChallengeStatus)

  # uncomment below to test the property
  #expect_equal(model.instance$`status`, "EXPECTED_RESULT")
})

test_that("difficulty", {
  # tests for the property `difficulty` (ChallengeDifficulty)

  # uncomment below to test the property
  #expect_equal(model.instance$`difficulty`, "EXPECTED_RESULT")
})

test_that("platform", {
  # tests for the property `platform` (SimpleChallengePlatform)

  # uncomment below to test the property
  #expect_equal(model.instance$`platform`, "EXPECTED_RESULT")
})

test_that("websiteUrl", {
  # tests for the property `websiteUrl` (character)

  # uncomment below to test the property
  #expect_equal(model.instance$`websiteUrl`, "EXPECTED_RESULT")
})

test_that("avatarUrl", {
  # tests for the property `avatarUrl` (character)

  # uncomment below to test the property
  #expect_equal(model.instance$`avatarUrl`, "EXPECTED_RESULT")
})

test_that("incentives", {
  # tests for the property `incentives` (array[ChallengeIncentive])

  # uncomment below to test the property
  #expect_equal(model.instance$`incentives`, "EXPECTED_RESULT")
})

test_that("submissionTypes", {
  # tests for the property `submissionTypes` (array[ChallengeSubmissionType])

  # uncomment below to test the property
  #expect_equal(model.instance$`submissionTypes`, "EXPECTED_RESULT")
})

test_that("inputDataTypes", {
  # tests for the property `inputDataTypes` (array[SimpleChallengeInputDataType])

  # uncomment below to test the property
  #expect_equal(model.instance$`inputDataTypes`, "EXPECTED_RESULT")
})

test_that("startDate", {
  # tests for the property `startDate` (character)
  # The start date of the challenge.

  # uncomment below to test the property
  #expect_equal(model.instance$`startDate`, "EXPECTED_RESULT")
})

test_that("endDate", {
  # tests for the property `endDate` (character)
  # The end date of the challenge.

  # uncomment below to test the property
  #expect_equal(model.instance$`endDate`, "EXPECTED_RESULT")
})

test_that("starredCount", {
  # tests for the property `starredCount` (integer)
  # The number of times the challenge has been starred by users.

  # uncomment below to test the property
  #expect_equal(model.instance$`starredCount`, "EXPECTED_RESULT")
})

test_that("createdAt", {
  # tests for the property `createdAt` (character)

  # uncomment below to test the property
  #expect_equal(model.instance$`createdAt`, "EXPECTED_RESULT")
})

test_that("updatedAt", {
  # tests for the property `updatedAt` (character)

  # uncomment below to test the property
  #expect_equal(model.instance$`updatedAt`, "EXPECTED_RESULT")
})
