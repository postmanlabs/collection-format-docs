---
title: "Variable"
order: 1
page_id: "variable"
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

Variables in collections remove the need to duplicate data in multiple places. Variables can be defined and referenced from any part of a collection.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L8) | `string` | `true` | A unique user-defined value that identifies the variable within a collection.
[key](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L12) | `string` | `true` | A human-friendly value that identifies the variable within a collection.
[value](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L16) | `string` | `false` | The value that a variable holds in this collection. The variables are replaced by this value when you run a set of requests from a collection.
[type](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L19) | `any` | `false` | A variable may have multiple types. This field specifies the type of the variable.
[name](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L29) | `string` | `false` | The name of the variable.
[description](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L33) | [#description](/reference/description/) | `false` | The description of the variable.
[system](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L36) | `boolean` | `false` | When set to `true`, indicates that this variable has been set by Postman.
[disabled](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/variable.json#L41) | `boolean` | `false` | When set to `true`, the variable is ignored at runtime.

<br />

#### Reference diagram

![Variable Object Diagram](../../../images/variable@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/variable",
  "title": "Variable",
  "description": "Using variables in your Postman requests eliminates the need to duplicate requests, which can save a lot of time. Variables can be defined, and referenced to from any part of a request.",
  "type": "object",
  "properties": {
    "id": {
      "description": "A variable ID is a unique user-defined value that identifies the variable within a collection. In traditional terms, this would be a variable name.",
      "type": "string"
    },
    "key": {
      "description": "A variable key is a human friendly value that identifies the variable within a collection. In traditional terms, this would be a variable name.",
      "type": "string"
    },
    "value": {
      "description": "The value that a variable holds in this collection. Ultimately, the variables will be replaced by this value, when say running a set of requests from a collection"
    },
    "type": {
      "description": "A variable may have multiple types. This field specifies the type of the variable.",
      "type": "string",
      "enum": [
        "string",
        "boolean",
        "any",
        "number"
      ]
    },
    "name": {
      "type": "string",
      "description": "Variable name"
    },
    "description": {
      "$ref": "#/definitions/description"
    },
    "system": {
      "type": "boolean",
      "default": false,
      "description": "When set to true, indicates that this variable has been set by Postman"
    },
    "disabled": {
      "type": "boolean",
      "default": false
    }
  },
  "anyOf": [
    {
      "required": [
        "id"
      ]
    },
    {
      "required": [
        "key"
      ]
    },
    {
      "required": [
        "id",
        "key"
      ]
    }
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
