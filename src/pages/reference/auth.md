---
title: "Authorization"
order: 1
page_id: "auth"
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

The auth object represents the different authentication helpers that can be used by a collection.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | --
[type](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L7) | `enum` | `true` | The type of authentication.
[noauth](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L24) | `object` | `false` | Lets you specify your auth.
[apikey](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L25) | `array` | `false` | The attributes for API key authentication.
[awsv4](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L33) | `array` | `false` | The attributes for [AWS authentication](http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html).
[basic](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L41) | `array` | `false` | The attributes for [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).
[bearer](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L49) | `array` | `false` | The helper attributes for [bearer token authentication](https://tools.ietf.org/html/rfc6750).
[digest](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L57) | `array` | `false` | The attributes for [digest authentication](https://en.wikipedia.org/wiki/Digest_access_authentication).
[edgegrid](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L65) | `array` | `false` | The attributes for [Akamai EdgeGrid authentication](https://developer.akamai.com/legacy/introduction/Client_Auth.html).
[hawk](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L73) | `array` | `false` | The attributes for [Hawk authentication](https://github.com/hueniverse/hawk).
[ntlm](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L81) | `array` | `false` | The attributes for [NTLM authentication](https://msdn.microsoft.com/en-us/library/cc237488.aspx).
[oauth1](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L89) | `array` | `false` | The attributes for [OAuth2](https://oauth.net/1/).
[oauth2](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/auth.json#L97) | `array` | `false` | Helper attributes for [OAuth2](https://oauth.net/2/).

<br />

#### Reference diagram

![Auth Unit Image](../../../images/auth.jpeg)

<br />

#### Schema

```json
{
  "type": "object",
  "title": "Auth",
  "$id": "#/definitions/auth",
  "description": "Represents authentication helpers provided by Postman",
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "apikey",
        "awsv4",
        "basic",
        "bearer",
        "digest",
        "edgegrid",
        "hawk",
        "noauth",
        "oauth1",
        "oauth2",
        "ntlm"
      ]
    },
    // Allow anything in No auth
    "noauth": {},
    "apikey": {
      "type": "array",
      "title": "API Key Authentication",
      "description": "The attributes for API Key Authentication.",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "awsv4": {
      "type": "array",
      "title": "AWS Signature v4",
      "description": "The attributes for [AWS Auth](http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html).",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "basic": {
      "type": "array",
      "title": "Basic Authentication",
      "description": "The attributes for [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "bearer": {
      "type": "array",
      "title": "Bearer Token Authentication",
      "description": "The helper attributes for [Bearer Token Authentication](https://tools.ietf.org/html/rfc6750)",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "digest": {
      "type": "array",
      "title": "Digest Authentication",
      "description": "The attributes for [Digest Authentication](https://en.wikipedia.org/wiki/Digest_access_authentication).",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "edgegrid": {
      "type": "array",
      "title": "EdgeGrid Authentication",
      "description": "The attributes for [Akamai EdgeGrid Authentication](https://developer.akamai.com/legacy/introduction/Client_Auth.html).",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "hawk": {
      "type": "array",
      "title": "Hawk Authentication",
      "description": "The attributes for [Hawk Authentication](https://github.com/hueniverse/hawk)",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "ntlm": {
      "type": "array",
      "title": "NTLM Authentication",
      "description": "The attributes for [NTLM Authentication](https://msdn.microsoft.com/en-us/library/cc237488.aspx)",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "oauth1": {
      "type": "array",
      "title": "OAuth1",
      "description": "The attributes for [OAuth2](https://oauth.net/1/)",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    },
    "oauth2": {
      "type": "array",
      "title": "OAuth2",
      "description": "Helper attributes for [OAuth2](https://oauth.net/2/)",
      "items": {
        "$ref": "#/definitions/auth-attribute"
      }
    }
  },
  "required": [
    "type"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
