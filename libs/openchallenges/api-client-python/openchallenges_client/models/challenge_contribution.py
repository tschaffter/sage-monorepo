# coding: utf-8

"""
    OpenChallenges REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from pydantic import BaseModel, Field, StrictInt
from openchallenges_client.models.challenge_contribution_role import (
    ChallengeContributionRole,
)


class ChallengeContribution(BaseModel):
    """
    A challenge contribution.
    """

    challenge_id: StrictInt = Field(
        ..., alias="challengeId", description="The unique identifier of the challenge."
    )
    organization_id: StrictInt = Field(
        ...,
        alias="organizationId",
        description="The unique identifier of an organization",
    )
    role: ChallengeContributionRole = Field(...)
    __properties = ["challengeId", "organizationId", "role"]

    class Config:
        """Pydantic configuration"""

        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> ChallengeContribution:
        """Create an instance of ChallengeContribution from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True, exclude={}, exclude_none=True)
        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> ChallengeContribution:
        """Create an instance of ChallengeContribution from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return ChallengeContribution.parse_obj(obj)

        _obj = ChallengeContribution.parse_obj(
            {
                "challenge_id": obj.get("challengeId"),
                "organization_id": obj.get("organizationId"),
                "role": obj.get("role"),
            }
        )
        return _obj
