---
title: "URL"
order: 1
page_id: "url"
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

The URL object lets you define different parts of your URL in a collection.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[raw](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L10) | `string` | `false` | The string representation of the request URL, including the protocol, host, path, hash, query parameters and path variables.
[protocol](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L14) | `string` | `false` | The protocol associated with the request. For example, `http`.
[host](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L18) | `string` | `false` | The host for the URL. For example, `api.yourdomain.com` can be stored as a string or as an array of strings.
[path](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L34) | `string` | `false` | The complete path of the current URL broken down into segments. A segment could be a string or a path variable.
[port](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L63) | `string` | `false` | The port number present in this URL. An empty value implies 80/443 depending on whether the protocol field contains HTTP or HTTPS.
[query](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L67) | `string` | `false` | An array of QueryParams, which is the query string part of the URL, parsed into separate variables.
[hash](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L97) | `string` | `false` | Contains the URL fragment, if any. This isn't typically transmitted over the network, but it can be useful to store this in some cases.
[variable](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/url.json#L101) | [#variable](/reference/variable) | `false` | Stores collection variables with the syntax `/path/:variableName/to/somewhere`.

<br />

#### Reference diagram

![Url Object Image](../../../images/url@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "If object, contains the complete broken-down URL for this request. If string, contains the literal request URL.",
  "$id": "#/definitions/url",
  "title": "Url",
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "raw": {
          "type": "string",
          "description": "The string representation of the request URL, including the protocol, host, path, hash, query parameter(s) and path variable(s)."
        },
        "protocol": {
          "type": "string",
          "description": "The protocol associated with the request, E.g: 'http'"
        },
        "host": {
          "title": "Host",
          "description": "The host for the URL, E.g: api.yourdomain.com. Can be stored as a string or as an array of strings.",
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The host, split into subdomain strings."
            }
          ]
        },
        "path": {
          "oneOf": [
            {
              "type": "string"
            },
            {
              "type": "array",
              "description": "The complete path of the current url, broken down into segments. A segment could be a string, or a path variable.",
              "items": {
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      }
                    }
                  }
                ]
              }
            }
          ]
        },
        "port": {
          "type": "string",
          "description": "The port number present in this URL. An empty value implies 80/443 depending on whether the protocol field contains http/https."
        },
        "query": {
          "type": "array",
          "description": "An array of QueryParams, which is basically the query string part of the URL, parsed into separate variables",
          "items": {
            "type": "object",
            "title": "QueryParam",
            "properties": {
              "key": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "value": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "disabled": {
                "type": "boolean",
                "default": false,
                "description": "If set to true, the current query parameter will not be sent with the request."
              },
              "description": {
                "$ref": "#/definitions/description"
              }
            }
          }
        },
        "hash": {
          "description": "Contains the URL fragment (if any). Usually this is not transmitted over the network, but it could be useful to store this in some cases.",
          "type": "string"
        },
        "variable": {
          "type": "array",
          "description": "Postman supports path variables with the syntax `/path/:variableName/to/somewhere`. These variables are stored in this field.",
          "items": {
            "$ref": "#/definitions/variable"
          }
        }
      }
    },
    {
      "type": "string"
    }
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
