# OrganizationSearchQuery

An organization search query.

## Properties

| Name                             | Type                                                                | Description                                                          | Notes                       |
| -------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------- |
| **page_number**                  | **int**                                                             | The page number.                                                     | [optional] [default to 0]   |
| **page_size**                    | **int**                                                             | The number of items in a single page.                                | [optional] [default to 100] |
| **categories**                   | [**List[OrganizationCategory]**](OrganizationCategory.md)           | The array of organization categories used to filter the results.     | [optional]                  |
| **challenge_contribution_roles** | [**List[ChallengeContributionRole]**](ChallengeContributionRole.md) | An array of challenge contribution roles used to filter the results. | [optional]                  |
| **sort**                         | [**OrganizationSort**](OrganizationSort.md)                         |                                                                      | [optional]                  |
| **direction**                    | [**OrganizationDirection**](OrganizationDirection.md)               |                                                                      | [optional]                  |
| **search_terms**                 | **str**                                                             | A string of search terms used to filter the results.                 | [optional]                  |

## Example

```python
from openchallenges_client.models.organization_search_query import OrganizationSearchQuery

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationSearchQuery from a JSON string
organization_search_query_instance = OrganizationSearchQuery.from_json(json)
# print the JSON string representation of the object
print OrganizationSearchQuery.to_json()

# convert the object into a dict
organization_search_query_dict = organization_search_query_instance.to_dict()
# create an instance of OrganizationSearchQuery from a dict
organization_search_query_form_dict = organization_search_query.from_dict(organization_search_query_dict)
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
