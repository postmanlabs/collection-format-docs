---
title: "Response"
order: 1
page_id: "response"
warning: false
updated: 2022-11-15
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

The response object allows you to define an HTTP response for its corresponding request.

## Contents

- [Reference table](/docs/reference/response/#reference-table)
- [Reference diagram](/docs/reference/response/#reference-diagram)
- [Schema](/docs/reference/response/#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#LL8C22-L8C114) | `string` | `false` | A unique, user-defined identifier that you can use to refer to this response from requests.
[originalRequest](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L11) | [#originalRequest](/doc/reference/request/) | `false` | The request object that initiated this response.
[responseTime](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L14) | `string` \| `number` | `false` | The time taken by the request to complete. If a number, the unit is milliseconds. If the response is manually created, this can be set to `null`.
[timings](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L23) | `object` | `false` | Set of timing information related to the request and response in milliseconds.
[header](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L31) | [#header](/docs/reference/header) | `false` | An array containing all the headers.
[cookie](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L31) | [#cookie](/docs/reference/cookie) | `false` | An array containing all the cookies included in this response.
[body](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L64) | [#body](/docs/reference/body) | `false` | The raw text of the response.
[status](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L71) | `string` | `false` | The response status. For example, `200 OK`.
[code](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/response.json#L75) | `integer` | `false` | The numerical response code. For example, `200`, `201`, or `404`.

<br />

#### Reference diagram

![Response Object Diagram](../../../images/response@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/response",
  "title": "Response",
  "description": "A response represents an HTTP response.",
  "properties": {
    "id": {
      "description": "A unique, user defined identifier that can  be used to refer to this response from requests.",
      "type": "string"
    },
    "originalRequest": {
      "$ref": "#/definitions/request"
    },
    "responseTime": {
      "title": "ResponseTime",
      "type": [
        "null",
        "string",
        "number"
      ],
      "description": "The time taken by the request to complete. If a number, the unit is milliseconds. If the response is manually created, this can be set to `null`."
    },
    "timings": {
      "title": "Response Timings",
      "description": "Set of timing information related to request and response in milliseconds",
      "type": [
        "object",
        "null"
      ]
    },
    "header": {
      "title": "Headers",
      "oneOf": [
        {
          "type": "array",
          "title": "Header",
          "description": "No HTTP request is complete without its headers, and the same is true for a Postman request. This field is an array containing all the headers.",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/header"
              },
              {
                "title": "Header",
                "type": "string"
              }
            ]
          }
        },
        {
          "type": [
            "string",
            "null"
          ]
        }
      ]
    },
    "cookie": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/cookie"
      }
    },
    "body": {
      "type": [
        "null",
        "string"
      ],
      "description": "The raw text of the response."
    },
    "status": {
      "type": "string",
      "description": "The response status, e.g: '200 OK'"
    },
    "code": {
      "type": "integer",
      "description": "The numerical response code, example: 200, 201, 404, etc."
    }
  }
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
