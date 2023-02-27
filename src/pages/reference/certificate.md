---
title: "Certificate"
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

The certificate object lets you represent an SSL certificate in a collection.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[name](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/certificate.json#L7) | `string` | `false` | A name for the certificate for user reference.
[matches](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/certificate.json#L11) | `array` | `false` | A list of URL match pattern strings to identify URLs this certificate can be used for.
[key](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/certificate.json#L19) | `object` | `false` | An object containing the path to the file that has private key.
[cert](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/certificate.json#LL28C6-L28C10) | `object` | `false` | An object containing the path to the certificate file.
[passphrase](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/certificate.json#LL37C6-L37C16) | `string` | `false` | The passphrase for the certificate.

<br />

#### Reference diagram

![Certificate Unit diagram](../../../images/certificate@2x.jpg)

<br />

#### Schema

```json
{
  "$id": "#/definitions/certificate",
  "title": "Certificate",
  "description": "A representation of an ssl certificate",
  "type": "object",
  "properties": {
    "name": {
      "description": "A name for the certificate for user reference",
      "type": "string"
    },
    "matches": {
      "description": "A list of Url match pattern strings, to identify Urls this certificate can be used for.",
      "type": "array",
      "items": {
        "type": "string",
        "description": "An Url match pattern string"
      }
    },
    "key": {
      "description": "An object containing path to file containing private key, on the file system",
      "type": "object",
      "properties": {
        "src": {
          "description": "The path to file containing key for certificate, on the file system"
        }
      }
    },
    "cert": {
      "description": "An object containing path to file certificate, on the file system",
      "type": "object",
      "properties": {
        "src": {
          "description": "The path to file containing key for certificate, on the file system"
        }
      }
    },
    "passphrase": {
      "description": "The passphrase for the certificate",
      "type": "string"
    }
  }
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
