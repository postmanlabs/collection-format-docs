---
title: "Header"
order: 1
page_id: "header"
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

The header objects allows you to include HTTP headers in your requests.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[key](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/header.json#L7) | `string` | `true` | The LHS of the HTTP header. For example, `Content-Type` or `X-Custom-Header`.
[value](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/header.json#L11) | `string` | `true` | The value or RHS of the header.
[disabled](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/header.json#L7) | `boolean` | `false` | If set to `true`, the current header won't be sent with requests.
[description](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/header.json#LL20C6-L20C17) | [#description](/docs/reference/description/) | `false` | The description of this header.

<br />

#### Reference diagram

![Header Unit Image](../../../images/header@2x.jpg)

<br />

#### Schema

```json
{
  "type": "object",
  "title": "Header",
  "$id": "#/definitions/header",
  "description": "Represents a single HTTP Header",
  "properties": {
    "key": {
      "description": "This holds the LHS of the HTTP Header, e.g ``Content-Type`` or ``X-Custom-Header``",
      "type": "string"
    },
    "value": {
      "type": "string",
      "description": "The value (or the RHS) of the Header is stored in this field."
    },
    "disabled": {
      "type": "boolean",
      "default": false,
      "description": "If set to true, the current header will not be sent with requests."
    },
    "description": {
      "$ref": "#/definitions/description"
    }
  },
  "required": [
    "key",
    "value"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
