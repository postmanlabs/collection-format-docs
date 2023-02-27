---
title: "Description"
order: 1
page_id: "description"
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

Descriptions can be raw text or an object that holds the description content along with its format.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | --
[content](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/description.json#L10) | `string` | `false` | The content of the description as a raw string.
[type](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/description.json#L14) | `string` | `false` | The MIME type of the raw description content. For example, `text/markdown` or `text/html`. The type is used to correctly render the description when generating documentation in the Postman app.
[version](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/description.json#LL18C10-L18C17) | `string` | `false` | Versions associated with this description.

<br />

#### Reference diagram

![Description Unit Image](../../../images/description@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/description",
  "description": "A Description can be a raw text, or be an object, which holds the description along with its format.",
  "oneOf": [
    {
      "type": "object",
      "title": "Description",
      "properties": {
        "content": {
          "type": "string",
          "description": "The content of the description goes here, as a raw string."
        },
        "type": {
          "type": "string",
          "description": "Holds the mime type of the raw description content. E.g: 'text/markdown' or 'text/html'.\nThe type is used to correctly render the description when generating documentation, or in the Postman app."
        },
        "version": {
          "description": "Description can have versions associated with it, which should be put in this property."
        }
      }
    },
    {
      "type": "string"
    },
    {
      "type": "null"
    }
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
