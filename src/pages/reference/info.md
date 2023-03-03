---
title: "Info"
order: 1
page_id: "info"
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

The info object contains metadata information for the collection.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

| Field Name | Type&nbsp;&nbsp; | Required | Description |
| --- | --- | --- | --- |
| [name](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/info.json#L9) | `string` | `true` | A collection's human-friendly name is defined by this field. Set this field to a value that lets you to identify this collection, such as highlighting its usage or content. |
| [_postman_id](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/info.json#L14) | `string` | `false` | The Postman unique identifier for this collection. |
| [description](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/info.json#LL18C6-L18C17) | [#description](/reference/description/) | `false` | The description of this collection. |
| [version](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/info.json#LL21C6-L21C13) | [#description](/reference/version/) | `false` | The version info of this collection. |
| [schema](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/info.json#L24) | `string` | `true` | Holds a link to the Postman schema that's used to validate this collection. For example, ```https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json```. |

<br />

#### Reference diagram

![Info Unit diagram](../../../images/information@2x.jpg)

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/info",
  "title": "Information",
  "description": "Detailed description of the info block",
  // TODO: Add detailed description
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "Name of the collection",
      "description": "A collection's friendly name is defined by this field. You would want to set this field to a value that would allow you to easily identify this collection among a bunch of other collections, as such outlining its usage or content."
    },
    "_postman_id": {
      "type": "string",
      "description": "Every collection is identified by the unique value of this field. The value of this field is usually easiest to generate using a UID generator function. If you already have a collection, it is recommended that you maintain the same id since changing the id usually implies that is a different collection than it was originally.\n *Note: This field exists for compatibility reasons with Collection Format V1.*"
    },
    "description": {
      "$ref": "#/definitions/description"
    },
    "version": {
      "$ref": "#/definitions/version"
    },
    "schema": {
      "description": "This should ideally hold a link to the Postman schema that is used to validate this collection. E.g: https://schema.getpostman.com/collection/v1",
      "type": "string"
    }
  },
  "required": [
    "name",
    "schema"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
