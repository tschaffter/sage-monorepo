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

from datetime import datetime
from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self


class ChallengePlatform(BaseModel):
    """
    A challenge platform
    """  # noqa: E501

    id: StrictInt = Field(description="The unique identifier of a challenge platform.")
    slug: Annotated[str, Field(min_length=3, strict=True, max_length=30)] = Field(
        description="The slug of the challenge platform."
    )
    name: Annotated[str, Field(min_length=3, strict=True, max_length=30)] = Field(
        description="The name of the challenge platform."
    )
    avatar_key: StrictStr = Field(alias="avatarKey")
    website_url: StrictStr = Field(alias="websiteUrl")
    created_at: datetime = Field(alias="createdAt")
    updated_at: datetime = Field(alias="updatedAt")
    __properties: ClassVar[List[str]] = [
        "id",
        "slug",
        "name",
        "avatarKey",
        "websiteUrl",
        "createdAt",
        "updatedAt",
    ]

    @field_validator("slug")
    def slug_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if not re.match(r"^[a-z0-9]+(?:-[a-z0-9]+)*$", value):
            raise ValueError(
                r"must validate the regular expression /^[a-z0-9]+(?:-[a-z0-9]+)*$/"
            )
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of ChallengePlatform from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ChallengePlatform from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "id": obj.get("id"),
                "slug": obj.get("slug"),
                "name": obj.get("name"),
                "avatarKey": obj.get("avatarKey"),
                "websiteUrl": obj.get("websiteUrl"),
                "createdAt": obj.get("createdAt"),
                "updatedAt": obj.get("updatedAt"),
            }
        )
        return _obj
