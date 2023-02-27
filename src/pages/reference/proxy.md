---
title: "Proxy"
order: 1
page_id: "proxy"
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

Using the proxy object, you can configure a custom proxy into Postman for a particular URL match.

## Contents

- [Reference table](#reference-table)
- [Reference diagram](#reference-diagram)
- [Schema](#schema)

<br />

### Reference table

Field Name | Type&nbsp;&nbsp; | Required | Description
--- | --- | --- | ---
[match](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/proxy-config.json#L8) | `string` | `false` | The URL match the proxy config is defined for.
[host](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/proxy-config.json#L13) | `string` | `false` | The proxy server host.
[port](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/proxy-config.json#L17) | `integer` | `false` | The proxy server port.
[tunnel](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/proxy-config.json#L23) | `boolean` | `false` | The tunneling details for the proxy config.
[disabled](https://github.com/postmanlabs/schemas/blob/da7578c2d71c46de2d39d04fbeebc26570591a44/schemas/draft-07/v2.1.0/collection/proxy-config.json#L28) | `boolean` | `false` | When set to `true`, ignores this proxy configuration element.

<br />

#### Reference diagram

![Proxy Object Diagram](../../../images/proxy-config@2x.jpg)

<br />

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "#/definitions/proxy-config",
  "title": "Proxy Config",
  "description": "Using the Proxy, you can configure your custom proxy into the postman for particular url match",
  "type": "object",
  "properties": {
    "match": {
      "default": "http+https://*/*",
      "description": "The Url match for which the proxy config is defined",
      "type": "string"
    },
    "host": {
      "type": "string",
      "description": "The proxy server host"
    },
    "port": {
      "type": "integer",
      "minimum": 0,
      "default": 8080,
      "description": "The proxy server port"
    },
    "tunnel": {
      "description": "The tunneling details for the proxy config",
      "default": false,
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean",
      "default": false,
      "description": "When set to true, ignores this proxy configuration entity"
    }
  }
}
```

<br /><br />

> For more information, see the [complete schema](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).
