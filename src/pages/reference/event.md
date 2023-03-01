---
title: "Event"
order: 1
page_id: "event"
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

Events let you define a script that runs when certain events are fired.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/event.json#L8) | `string` | `false` | A unique identifier for the enclosing event.
[listen](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/event.json#L12) | `string` | `true` | Set to `test` for test scripts or `prerequest` for pre-request scripts.
[script](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/event.json#L16) | [#script](/reference/script/) | `false` | Contains the test or pre-request script to be executed.
[disabled](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/event.json#L19) | `boolean` | `false` | Indicates whether the event is active. If absent, the event is enabled.

<br />

#### Reference diagram

![Description Unit Image](../../../images/event@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/event",
  "title": "Event",
  "description": "Defines a script associated with an associated event name",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "A unique identifier for the enclosing event."
    },
    "listen": {
      "type": "string",
      "description": "Can be set to `test` or `prerequest` for test scripts or pre-request scripts respectively."
    },
    "script": {
      "$ref": "#/definitions/script"
    },
    "disabled": {
      "type": "boolean",
      "default": false,
      "description": "Indicates whether the event is disabled. If absent, the event is assumed to be enabled."
    }
  },
  "required": [
    "listen"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
