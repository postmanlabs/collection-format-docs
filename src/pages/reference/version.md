---
title: "Version"
order: 1
page_id: "version"
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

You can version your collections as they grow, and this field holds the version number. While optional, it's recommended that you use this field to its fullest extent.

## Contents

- [Reference table](/docs/reference/version/#reference-table)
- [Reference diagram](/docs/reference/version/#reference-diagram)
- [Schema](/docs/reference/version/#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[major](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/version.json#L10) | `integer` | `true` | Increment this number if you make changes to the collection that change its behavior. For examples, removing or adding new test scripts.
[minor](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/version.json#L15) | `integer` | `true` | Increment this number if you make changes that don't break anything that uses the collection. For example, removing a folder.
[patch](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/version.json#L20) | `integer` | `true` | Increment this number if you make minor changes to a collection.
[identifier](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/version.json#L25) | `string` | `false` | A human-friendly identifier to make sense of the version numbers. For example, `beta-3`.
[meta](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/version.json#L30) | `object` | `false` | Any additional info relating to this version.

<br />

#### Reference diagram

![Version Object Diagram](../../../images/version.jpeg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/version",
  "title": "Collection Version",
  "description": "Postman allows you to version your collections as they grow, and this field holds the version number. While optional, it is recommended that you use this field to its fullest extent!",
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "major": {
          "description": "Increment this number if you make changes to the collection that changes its behaviour. E.g: Removing or adding new test scripts. (partly or completely).",
          "minimum": 0,
          "type": "integer"
        },
        "minor": {
          "description": "You should increment this number if you make changes that will not break anything that uses the collection. E.g: removing a folder.",
          "minimum": 0,
          "type": "integer"
        },
        "patch": {
          "description": "Ideally, minor changes to a collection should result in the increment of this number.",
          "minimum": 0,
          "type": "integer"
        },
        "identifier": {
          "description": "A human friendly identifier to make sense of the version numbers. E.g: 'beta-3'",
          "type": "string",
          "maxLength": 10
        },
        "meta": {}
      },
      "required": [
        "major",
        "minor",
        "patch"
      ]
    },
    {
      "type": "string"
    }
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
