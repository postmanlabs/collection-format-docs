---
title: "Cookie"
order: 1
page_id: "cookie"
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

The cookie object in collections follows the [Google Chrome Cookie format](https://developer.chrome.com/extensions/cookies).

## Contents

- [Reference table](/docs/reference/cookie/#reference-table)
- [Reference diagram](/docs/reference/cookie/#reference-diagram)
- [Schema](/docs/reference/cookie/#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | --
[domain](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L7) | `string` | `true` | The domain for which this cookie is valid.
[expires](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L11) | `string \| null` | `false` | When the cookie expires.
[maxAge](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#LL18C9-L18C9) | `string` | `false` | The time it'll take for the cookie to expire relative to the current time.
[hostOnly](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#LL21C6-L21C14) | `boolean` | `false` | True if the cookie is a host-only cookie. For example, a request's URL domain must exactly match the domain of the cookie.
[httpOnly](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L25) | `boolean` | `false` | Indicates if this cookie is HTTP-only. If `true`, the cookie is inaccessible to client-side scripts.
[name](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L29) | `string` | `false` | The name of the cookie.
[path](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L33) | `string` | `true` | The path associated with the cookie.
[secure](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L37) | `boolean` | `false` | Indicates if the `secure` flag is set on the cookie, meaning that it's transmitted over secure connections only, such as HTTPS.
[session](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L41) | `boolean` | `false` | True if the cookie is a session cookie.
[value](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#L45) | `string` | `false` | The value of the cookie.
[extensions](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/cookie.json#LL49C6-L49C16) | `array` | `false` | Custom attributes for a cookie, such as the [Priority Field](https://code.google.com/p/chromium/issues/detail?id=232693).

#### Reference diagram

![Cookie Unit Image](../../../images/cookie@2x.jpg)

<br />

#### Schema

```json
{
  "type": "object",
  "title": "Cookie",
  "$id": "#/definitions/cookie",
  "description": "A Cookie, that follows the [Google Chrome format](https://developer.chrome.com/extensions/cookies)",
  "properties": {
    "domain": {
      "type": "string",
      "description": "The domain for which this cookie is valid."
    },
    "expires": {
      "type": [
        "string",
        "null"
      ],
      "description": "When the cookie expires."
    },
    "maxAge": {
      "type": "string"
    },
    "hostOnly": {
      "type": "boolean",
      "description": "True if the cookie is a host-only cookie. (i.e. a request's URL domain must exactly match the domain of the cookie)."
    },
    "httpOnly": {
      "type": "boolean",
      "description": "Indicates if this cookie is HTTP Only. (if True, the cookie is inaccessible to client-side scripts)"
    },
    "name": {
      "type": "string",
      "description": "This is the name of the Cookie."
    },
    "path": {
      "type": "string",
      "description": "The path associated with the Cookie."
    },
    "secure": {
      "type": "boolean",
      "description": "Indicates if the 'secure' flag is set on the Cookie, meaning that it is transmitted over secure connections only. (typically HTTPS)"
    },
    "session": {
      "type": "boolean",
      "description": "True if the cookie is a session cookie."
    },
    "value": {
      "type": "string",
      "description": "The value of the Cookie."
    },
    "extensions": {
      "type": "array",
      "description": "Custom attributes for a cookie go here, such as the [Priority Field](https://code.google.com/p/chromium/issues/detail?id=232693)"
    }
  },
  "required": [
    "domain",
    "path"
  ]
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
