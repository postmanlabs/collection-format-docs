---
title: "Certificate list"
order: 1
page_id: "certificate-list"
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

The certificate list is an array of SSL [certificates](/reference/certificate/).

<br />

#### Schema

```json
{
  "$id": "#/definitions/certificate-list",
  "title": "Certificate List",
  "description": "A representation of a list of SSL certificates",
  "type": "array",
  "items": {
    "$ref": "#/definitions/certificate"
  }
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
