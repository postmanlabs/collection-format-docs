---
title: "Auth attribute"
order: 1
page_id: "auth-attribute"
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

The auth attribute object represents an attribute for any authorization method in a collection request. For example, `username` and `password` are set as auth attributes for the basic authentication.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | --
[key](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth-attribute.json#L7) | `string` | `true` | The key of this auth attribute.
[value](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth-attribute.json#L10) | any | `false` | The key of this auth attribute. It can be of any type, specified by the `type` field.
[type](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth-attribute.json#L11) | `string` | `false` | The type of data put into the `value` field.

<br />

#### Reference diagram

![Auth Attribute Image](../../../images/auth-attribute@2x.jpg)

<br />

#### Schema

```json
{
  "type": "object",
  "title": "Auth",
  "$id": "#/definitions/auth-attribute",
  "description": "Represents an attribute for any authorization method provided by Postman. For example `username` and `password` are set as auth attributes for Basic Authentication method.",
  "properties": {
    "key": {
      "type": "string"
    },
    "value": {},
    "type": {
      "type": "string"
    }
  },
  "required": [
    "key"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
