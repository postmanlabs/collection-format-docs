---
title: "Event list"
order: 1
page_id: "certificate"
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

The event list is an array of [events](/reference/event/).

#### Schema

```json
{
  "$id": "#/definitions/event-list",
  "title": "Event List",
  "type": "array",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Postman allows you to configure scripts to run when specific events occur. These scripts are stored here, and can be referenced in the collection by their ID.",
  "items": {
    "$ref": "#/definitions/event"
  }
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
