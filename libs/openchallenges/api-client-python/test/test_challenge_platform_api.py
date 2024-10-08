# coding: utf-8

"""
    OpenChallenges REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

import openchallenges_client
from openchallenges_client.api.challenge_platform_api import (
    ChallengePlatformApi,
)  # noqa: E501
from openchallenges_client.rest import ApiException


class TestChallengePlatformApi(unittest.TestCase):
    """ChallengePlatformApi unit test stubs"""

    def setUp(self):
        self.api = (
            openchallenges_client.api.challenge_platform_api.ChallengePlatformApi()
        )  # noqa: E501

    def tearDown(self):
        pass

    def test_get_challenge_platform(self):
        """Test case for get_challenge_platform

        Get a challenge platform  # noqa: E501
        """
        pass

    def test_list_challenge_platforms(self):
        """Test case for list_challenge_platforms

        List challenge platforms  # noqa: E501
        """
        pass


if __name__ == "__main__":
    unittest.main()
