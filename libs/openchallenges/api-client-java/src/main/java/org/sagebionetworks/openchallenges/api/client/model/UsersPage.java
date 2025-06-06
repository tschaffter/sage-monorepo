/*
 * OpenChallenges REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package org.sagebionetworks.openchallenges.api.client.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import org.sagebionetworks.openchallenges.api.client.model.User;

/**
 * A page of users
 */
@JsonPropertyOrder(
  {
    UsersPage.JSON_PROPERTY_NUMBER,
    UsersPage.JSON_PROPERTY_SIZE,
    UsersPage.JSON_PROPERTY_TOTAL_ELEMENTS,
    UsersPage.JSON_PROPERTY_TOTAL_PAGES,
    UsersPage.JSON_PROPERTY_HAS_NEXT,
    UsersPage.JSON_PROPERTY_HAS_PREVIOUS,
    UsersPage.JSON_PROPERTY_USERS,
  }
)
@jakarta.annotation.Generated(
  value = "org.openapitools.codegen.languages.JavaClientCodegen",
  comments = "Generator version: 7.13.0"
)
public class UsersPage {

  public static final String JSON_PROPERTY_NUMBER = "number";

  @jakarta.annotation.Nonnull
  private Integer number;

  public static final String JSON_PROPERTY_SIZE = "size";

  @jakarta.annotation.Nonnull
  private Integer size;

  public static final String JSON_PROPERTY_TOTAL_ELEMENTS = "totalElements";

  @jakarta.annotation.Nonnull
  private Long totalElements;

  public static final String JSON_PROPERTY_TOTAL_PAGES = "totalPages";

  @jakarta.annotation.Nonnull
  private Integer totalPages;

  public static final String JSON_PROPERTY_HAS_NEXT = "hasNext";

  @jakarta.annotation.Nonnull
  private Boolean hasNext;

  public static final String JSON_PROPERTY_HAS_PREVIOUS = "hasPrevious";

  @jakarta.annotation.Nonnull
  private Boolean hasPrevious;

  public static final String JSON_PROPERTY_USERS = "users";

  @jakarta.annotation.Nonnull
  private List<User> users = new ArrayList<>();

  public UsersPage() {}

  public UsersPage number(@jakarta.annotation.Nonnull Integer number) {
    this.number = number;
    return this;
  }

  /**
   * The page number.
   * @return number
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_NUMBER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getNumber() {
    return number;
  }

  @JsonProperty(JSON_PROPERTY_NUMBER)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setNumber(@jakarta.annotation.Nonnull Integer number) {
    this.number = number;
  }

  public UsersPage size(@jakarta.annotation.Nonnull Integer size) {
    this.size = size;
    return this;
  }

  /**
   * The number of items in a single page.
   * @return size
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_SIZE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getSize() {
    return size;
  }

  @JsonProperty(JSON_PROPERTY_SIZE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSize(@jakarta.annotation.Nonnull Integer size) {
    this.size = size;
  }

  public UsersPage totalElements(@jakarta.annotation.Nonnull Long totalElements) {
    this.totalElements = totalElements;
    return this;
  }

  /**
   * Total number of elements in the result set.
   * @return totalElements
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_TOTAL_ELEMENTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Long getTotalElements() {
    return totalElements;
  }

  @JsonProperty(JSON_PROPERTY_TOTAL_ELEMENTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTotalElements(@jakarta.annotation.Nonnull Long totalElements) {
    this.totalElements = totalElements;
  }

  public UsersPage totalPages(@jakarta.annotation.Nonnull Integer totalPages) {
    this.totalPages = totalPages;
    return this;
  }

  /**
   * Total number of pages in the result set.
   * @return totalPages
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_TOTAL_PAGES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Integer getTotalPages() {
    return totalPages;
  }

  @JsonProperty(JSON_PROPERTY_TOTAL_PAGES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTotalPages(@jakarta.annotation.Nonnull Integer totalPages) {
    this.totalPages = totalPages;
  }

  public UsersPage hasNext(@jakarta.annotation.Nonnull Boolean hasNext) {
    this.hasNext = hasNext;
    return this;
  }

  /**
   * Returns if there is a next page.
   * @return hasNext
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_HAS_NEXT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Boolean getHasNext() {
    return hasNext;
  }

  @JsonProperty(JSON_PROPERTY_HAS_NEXT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setHasNext(@jakarta.annotation.Nonnull Boolean hasNext) {
    this.hasNext = hasNext;
  }

  public UsersPage hasPrevious(@jakarta.annotation.Nonnull Boolean hasPrevious) {
    this.hasPrevious = hasPrevious;
    return this;
  }

  /**
   * Returns if there is a previous page.
   * @return hasPrevious
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_HAS_PREVIOUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public Boolean getHasPrevious() {
    return hasPrevious;
  }

  @JsonProperty(JSON_PROPERTY_HAS_PREVIOUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setHasPrevious(@jakarta.annotation.Nonnull Boolean hasPrevious) {
    this.hasPrevious = hasPrevious;
  }

  public UsersPage users(@jakarta.annotation.Nonnull List<User> users) {
    this.users = users;
    return this;
  }

  public UsersPage addUsersItem(User usersItem) {
    if (this.users == null) {
      this.users = new ArrayList<>();
    }
    this.users.add(usersItem);
    return this;
  }

  /**
   * A list of users
   * @return users
   */
  @jakarta.annotation.Nonnull
  @JsonProperty(JSON_PROPERTY_USERS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public List<User> getUsers() {
    return users;
  }

  @JsonProperty(JSON_PROPERTY_USERS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setUsers(@jakarta.annotation.Nonnull List<User> users) {
    this.users = users;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UsersPage usersPage = (UsersPage) o;
    return (
      Objects.equals(this.number, usersPage.number) &&
      Objects.equals(this.size, usersPage.size) &&
      Objects.equals(this.totalElements, usersPage.totalElements) &&
      Objects.equals(this.totalPages, usersPage.totalPages) &&
      Objects.equals(this.hasNext, usersPage.hasNext) &&
      Objects.equals(this.hasPrevious, usersPage.hasPrevious) &&
      Objects.equals(this.users, usersPage.users)
    );
  }

  @Override
  public int hashCode() {
    return Objects.hash(number, size, totalElements, totalPages, hasNext, hasPrevious, users);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UsersPage {\n");
    sb.append("    number: ").append(toIndentedString(number)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    totalElements: ").append(toIndentedString(totalElements)).append("\n");
    sb.append("    totalPages: ").append(toIndentedString(totalPages)).append("\n");
    sb.append("    hasNext: ").append(toIndentedString(hasNext)).append("\n");
    sb.append("    hasPrevious: ").append(toIndentedString(hasPrevious)).append("\n");
    sb.append("    users: ").append(toIndentedString(users)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
