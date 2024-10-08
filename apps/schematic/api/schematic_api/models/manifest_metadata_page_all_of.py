# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from schematic_api.models.base_model_ import Model
from schematic_api.models.manifest_metadata import ManifestMetadata
from schematic_api import util

from schematic_api.models.manifest_metadata import ManifestMetadata  # noqa: E501


class ManifestMetadataPageAllOf(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, manifests=None):  # noqa: E501
        """ManifestMetadataPageAllOf - a model defined in OpenAPI

        :param manifests: The manifests of this ManifestMetadataPageAllOf.  # noqa: E501
        :type manifests: List[ManifestMetadata]
        """
        self.openapi_types = {"manifests": List[ManifestMetadata]}

        self.attribute_map = {"manifests": "manifests"}

        self._manifests = manifests

    @classmethod
    def from_dict(cls, dikt) -> "ManifestMetadataPageAllOf":
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ManifestMetadataPage_allOf of this ManifestMetadataPageAllOf.  # noqa: E501
        :rtype: ManifestMetadataPageAllOf
        """
        return util.deserialize_model(dikt, cls)

    @property
    def manifests(self):
        """Gets the manifests of this ManifestMetadataPageAllOf.

        A list of manifest metadata  # noqa: E501

        :return: The manifests of this ManifestMetadataPageAllOf.
        :rtype: List[ManifestMetadata]
        """
        return self._manifests

    @manifests.setter
    def manifests(self, manifests):
        """Sets the manifests of this ManifestMetadataPageAllOf.

        A list of manifest metadata  # noqa: E501

        :param manifests: The manifests of this ManifestMetadataPageAllOf.
        :type manifests: List[ManifestMetadata]
        """
        if manifests is None:
            raise ValueError(
                "Invalid value for `manifests`, must not be `None`"
            )  # noqa: E501

        self._manifests = manifests
