---
title: "Item group"
order: 1
page_id: "item-group"
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

An item group is a group of related items. It's often referred to as a folder of items.

## Contents

- [Reference table](/docs/reference/item-group/#reference-table)
- [Reference diagram](/docs/reference/item-group/#reference-diagram)
- [Schema](/docs/reference/item-group/#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[name](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item-group.json#L8) | `string` | `false` | A folder-friendly name. Set this field to a value that allows you to identify this folder.
[description](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item-group.json#L12) | [#description](/docs/reference/description/) | `false` | The description of this item group or folder.
[variable](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item-group.json#L15) | [#variable](/docs/reference/variable/) | `false` | A list of variables scoped to this item group.
[item](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item-group.json#L18) | [#item](/docs/reference/item/) | `true` | Contains an HTTP request and sample responses. Folders can contain many items.
[event](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item-group.json#L33) | [#event](/docs/reference/event/) | `false` | A list of events and scripts that can be executed on this item group.
[auth](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item-group.json#L36) | `null` \| [#auth](/docs/reference/auth/) | `false` | A list of events and scripts that can be executed on this item group.
[protocolProfileBehavior](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/item-group.json#L46) | [#protocolProfileBehavior](/docs/reference/protocol-profile-behavior/) | `false` | A set of configurations used to change the usual behavior of sending the request.

<br />

#### Reference diagram

![Item Group Diagram](../../../images/item-group@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Folder",
  "$id": "#/definitions/item-group",
  "description": "One of the primary goals of Postman is to organize the development of APIs. To this end, it is necessary to be able to group requests together. This can be achived using 'Folders'. A folder just is an ordered set of requests.",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "A folder's friendly name is defined by this field. You would want to set this field to a value that would allow you to easily identify this folder."
    },
    "description": {
      "$ref": "#/definitions/description"
    },
    "variable": {
      "$ref": "#/definitions/variable-list"
    },
    "item": {
      "description": "Items are entities which contain an actual HTTP request, and sample responses attached to it. Folders may contain many items.",
      "type": "array",
      "items": {
        "title": "Items",
        "anyOf": [
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
    "item"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
