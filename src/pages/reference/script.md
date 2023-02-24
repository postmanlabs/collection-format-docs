---
title: "Script"
order: 1
page_id: "script"
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

A script is a snippet of code that you can use to perform setup or teardown operations on a particular request.

## Contents

- [Reference table](/docs/reference/script/#reference-table)
- [Reference diagram](/docs/reference/script/#schema)
- [Schema](/docs/reference/script/#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/script.json#L8) | `string` | `false` | A unique, user-defined identifier that you can use to refer to this script from requests.
[type](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/script.json#L12) | `string` | `false` | Type of the script. For example, `text/javascript`.
[exec](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/script.json#L12) | `string` \| `array` | `false` | An array of strings where each line represents a single line of code. Separate lines make it possible to track changes made to scripts.
[src](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/script.json#L30) | [#url](/docs/reference/url/) | `false` | An array of strings where each line represents a single line of code. Separate lines make it possible to track changes made to scripts.
[name](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/script.json#L33) | `string` | `false` | The name of the script.

<br />

#### Reference diagram

![Script Unit Diagram](../../../images/script.jpeg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/script",
  "title": "Script",
  "type": "object",
  "description": "A script is a snippet of Javascript code that can be used to to perform setup or teardown operations on a particular response.",
  "properties": {
    "id": {
      "description": "A unique, user defined identifier that can  be used to refer to this script from requests.",
      "type": "string"
    },
    "type": {
      "description": "Type of the script. E.g: 'text/javascript'",
      "type": "string"
    },
    "exec": {
      "oneOf": [
        {
          "type": "array",
          "description": "This is an array of strings, where each line represents a single line of code. Having lines separate makes it possible to easily track changes made to scripts.",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "src": {
      "$ref": "#/definitions/url"
    },
    "name": {
      "type": "string",
      "description": "Script name"
    }
  }
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
