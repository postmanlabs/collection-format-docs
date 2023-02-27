---
title: "Request"
order: 1
page_id: "request"
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

A request represents an HTTP request. If it's a string, the string is assumed to be the request URL and the method is assumed to be `GET`.

## Contents

- [Reference table](/docs/reference/request/#reference-table)
- [Reference diagram](/docs/reference/request/#reference-diagram)
- [Schema](/docs/reference/request/#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[url](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L11) | [#url](/docs.reference/url/) | `false` | The URL of this request.
[auth](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L14) | [#auth](/docs.reference/auth/) | `false` | The authentication helper that this request uses.
[proxy](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L24) | [#proxy](/docs.reference/proxy/) | `false` | Configure a custom proxy for a particular URL match.
[certificate](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L27) | [#certificate](/docs/reference/certificate/) | `false` | The SSL certificate used in this request.
[method](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L30) | `string` | `false` | The standard HTTP method associated with this request.
[description](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L59) | [#description](/docs/reference/description/) | `false` | The description of this request and its parameters.
[header](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L62) | [#header](/docs/reference/header/) | `false` | The HTTP headers of this request.
[body](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/request.json#L72) | [#body](/docs/reference/body/) | `false` | The data of the request body.

<br />

#### Reference diagram

![Request Object](../../../images/request@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/request",
  "title": "Request",
  "description": "A request represents an HTTP request. If a string, the string is assumed to be the request URL and the method is assumed to be 'GET'.",
  "oneOf": [
    {
      "type": "object",
      "title": "Request",
      "properties": {
        "url": {
          "$ref": "#/definitions/url"
        },
        "auth": {
          "oneOf": [
            {
              "type": "null"
            },
            {
              "$ref": "#/definitions/auth"
            }
          ]
        },
        "proxy": {
          "$ref": "#/definitions/proxy-config"
        },
        "certificate": {
          "$ref": "#/definitions/certificate"
        },
        "method": {
          "anyOf": [
            {
              "description": "The Standard HTTP method associated with this request.",
              "type": "string",
              "enum": [
                "GET",
                "PUT",
                "POST",
                "PATCH",
                "DELETE",
                "COPY",
                "HEAD",
                "OPTIONS",
                "LINK",
                "UNLINK",
                "PURGE",
                "LOCK",
                "UNLOCK",
                "PROPFIND",
                "VIEW"
              ]
            },
            {
              "description": "The Custom HTTP method associated with this request.",
              "type": "string"
            }
          ]
        },
        "description": {
          "$ref": "#/definitions/description"
        },
        "header": {
          "oneOf": [
            {
              "$ref": "#/definitions/header-list"
            },
            {
              "type": "string"
            }
          ]
        },
        "body": {
          "oneOf": [
            {
              "type": "object",
              "description": "This field contains the data usually contained in the request body.",
              "properties": {
                "mode": {
                  "description": "Postman stores the type of data associated with this request in this field.",
                  "enum": [
                    "raw",
                    "urlencoded",
                    "formdata",
                    "file",
                    "graphql"
                  ]
                },
                "raw": {
                  "type": "string"
                },
                "graphql": {
                  "type": "object"
                },
                "urlencoded": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "title": "UrlEncodedParameter",
                    "properties": {
                      "key": {
                        "type": "string"
                      },
                      "value": {
                        "type": "string"
                      },
                      "disabled": {
                        "type": "boolean",
                        "default": false
                      },
                      "description": {
                        "$ref": "#/definitions/description"
                      }
                    },
                    "required": [
                      "key"
                    ]
                  }
                },
                "formdata": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "title": "FormParameter",
                    "anyOf": [
                      {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "value": {
                            "type": "string"
                          },
                          "disabled": {
                            "type": "boolean",
                            "default": false,
                            "description": "When set to true, prevents this form data entity from being sent."
                          },
                          "type": {
                            "type": "string",
                            "const": "text"
                          },
                          "contentType": {
                            "type": "string",
                            "description": "Override Content-Type header of this form data entity."
                          },
                          "description": {
                            "$ref": "#/definitions/description"
                          }
                        },
                        "required": [
                          "key"
                        ]
                      },
                      {
                        "properties": {
                          "key": {
                            "type": "string"
                          },
                          "src": {
                            "type": [
                              "array",
                              "string",
                              "null"
                            ]
                          },
                          "disabled": {
                            "type": "boolean",
                            "default": false,
                            "description": "When set to true, prevents this form data entity from being sent."
                          },
                          "type": {
                            "type": "string",
                            "const": "file"
                          },
                          "contentType": {
                            "type": "string",
                            "description": "Override Content-Type header of this form data entity."
                          },
                          "description": {
                            "$ref": "#/definitions/description"
                          }
                        },
                        "required": [
                          "key"
                        ]
                      }
                    ]
                  }
                },
                "file": {
                  "type": "object",
                  "properties": {
                    "src": {
                      "oneOf": [
                        {
                          "type": "string",
                          "description": "Contains the name of the file to upload. _Not the path_."
                        },
                        {
                          "type": "null",
                          "description": "A null src indicates that no file has been selected as a part of the request body"
                        }
                      ]
                    },
                    "content": {
                      "type": "string"
                    }
                  }
                },
                "options": {
                  "type": "object",
                  "description": "Additional configurations and options set for various body modes."
                },
                "disabled": {
                  "type": "boolean",
                  "default": false,
                  "description": "When set to true, prevents request body from being sent."
                }
              }
            },
            {
              "type": "null"
            }
          ]
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
