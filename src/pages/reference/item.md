---
title: "Item"
order: 1
page_id: "item"
warning: false
updated: 2023-01-16
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

An item is the basic building block of a collection. Items let you specify a request and its corresponding responses.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#L7) | `string` | `false` | A unique ID that is used to identify collections internally.
[name](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#L11) | `string` | `false` | A human-readable identifier for the current item.
[description](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#L15) | [#description](/docs/reference/description/) | `false` | The description of this item.
[variable](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#L18) | [#variable](/docs/reference/variable/) | `false` | The variables that are scoped to this item.
[event](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#L21) | [#event](/docs/reference/event/) | `false` | Events that this item listens to.
[request](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#L24) | [#request](/docs/reference/request/) | `true` | The request carries all the necessary information about this HTTP call.
[response](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#L27) | [#response](/docs/reference/response/) | `false` | Represents any type of response received from your HTTP request.
[protocolProfileBehavior](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item.json#LL34C6-L34C29) | [#protocolProfileBehavior](/docs/reference/protocol-profile-behavior) | `false` | Set of configurations used to change the usual behavior of sending the request.

<br />

#### Reference diagram

![Item Unit Diagram](../../../images/item@2x.jpg)

<br />

#### Schema

```json
{
  "type": "object",
  "title": "Item",
  "$id": "#/definitions/item",
  "description": "Items are entities which contain an actual HTTP request, and sample responses attached to it.",
  "properties": {
    "id": {
      "type": "string",
      "description": "A unique ID that is used to identify collections internally"
    },
    "name": {
      "type": "string",
      "description": "A human readable identifier for the current item."
    },
    "description": {
      "$ref": "#/definitions/description"
    },
    "variable": {
      "$ref": "#/definitions/variable-list"
    },
    "event": {
      "$ref": "#/definitions/event-list"
    },
    "request": {
      "$ref": "#/definitions/request"
    },
    "response": {
      "type": "array",
      "title": "Responses",
      "items": {
        "$ref": "#/definitions/response"
      }
    },
    "protocolProfileBehavior": {
      "$ref": "#/definitions/protocol-profile-behavior"
    }
  },
  "required": [
    "request"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
