# User

A simple user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier of an account | [optional] 
**login** | **str** |  | 
**email** | **str** | An email address. | 
**name** | **str** |  | [optional] 
**status** | [**UserStatus**](UserStatus.md) |  | [optional] 
**avatar_url** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**type** | **str** |  | 
**bio** | **str** |  | [optional] 

## Example

```python
from openchallenges_api_client_python.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


