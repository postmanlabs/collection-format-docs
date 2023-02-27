---
title: "Collection"
order: 1
page_id: "collection"
warning: false
updated: 2023-01-17
contextual_links:
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Postman Essentials: Exploring the Collection Format"
    url: "https://blog.postman.com/postman-essentials-exploring-the-collection-format/"
  - type: link
    name: "Travelogue of Postman Collection Format v2"
    url: "https://blog.postman.com/travelogue-of-postman-collection-format-v2/"
---

The collection object includes every other thing in a collection. It allows you organize the most basic parts of your APIs and put them into small and reusable units.

## Contents

- [Reference table](/docs/reference/collection/#reference-table)
- [Reference diagram](/docs/reference/collection/#reference-diagram)
- [Schema](/docs/reference/collection/#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[info](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection.json#L6) | [#info](/docs/reference/info) | `true` | Lets you specify relevant metadata for your collection.
[item](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection.json#L9) | [#item](/docs/reference/item) | `true` | The basic unit of a collection. You can think of them as corresponding to a single API endpoint. Each item has one request and might have multiple API responses associated with it.
[event](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection.json#L24) | [#event](/docs/reference/event) | `false` | Lets you declare scripts that are executed when certain events occur.
[variable](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection.json#L27) | [#variable](/docs/reference/variable) | `false` | Lets you store and retrieve data across different units in your collection.
[auth](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection.json#L30) | [#auth](/docs/reference/auth) | `false` | Represents the different authentication helpers that can be used by a collection.
[protocolProfileBehavior](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection.json#L40) | [#protocolProfileBehavior](/docs/reference/protocolProfileBehavior) | `false` | Can change the usual behavior of sending the request.

<br />

#### Reference diagram

![Collection Object Diagram](../../../images/collection-format-overview-plain@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://schema.getpostman.com/json/draft-07/collection/v2.1.0/",
  "type": "object",
  "properties": {
    "info": {
      "$ref": "#/definitions/info"
    },
    "item": {
      "type": "array",
      "description": "Items are the basic unit for a Postman collection. You can think of them as corresponding to a single API endpoint. Each Item has one request and may have multiple API responses associated with it.",
      "items": {
        "title": "Items",
        "oneOf": [
          {
            "$ref": "#/definitions/item"
          },
          {
            "$ref": "#/definitions/item-group"
          }
        ]
      }
    },
    "event": {
      "$ref": "#/definitions/event-list"
    },
    "variable": {
      "$ref": "#/definitions/variable-list"
    },
    "auth": {
      "oneOf": [
        {
          "type": "null"
        },
        {
          "$ref": "#/definitions/auth"
        }
      ]
    },
    "protocolProfileBehavior": {
      "$ref": "#/definitions/protocol-profile-behavior"
    }
  },
  "required": [
    "info",
    "item"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
