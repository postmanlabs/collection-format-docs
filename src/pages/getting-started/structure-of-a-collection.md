---
title: "Structure of a collection"
order: 1
page_id: "structure-of-a-collection"
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

## Contents

- [Structure of a collection](/docs/getting-started/concepts/#structure)
    - [Info](docs/getting-started/concepts/#info)
    - [Item](/docs/getting-started/concepts/#item)
    - [ItemGroup](/docs/getting-started/concepts/#item-groups)
    - [Request](/docs/getting-started/concepts/#request)
    - [Events](/docs/getting-started/concepts/#events)

Collections consist of a set of reusable parts called units. These units can be nested within each other and used in different parts of a collection.

## Structure

At a very high level, collections are organized as shown in the following image.

![Collection Structure Image](../../../images/collection-format-overview.jpg)

A collection has a single information block and can contain a number of items and item groups.

In its most basic form, a collection looks like the following:

```json
{
  "info": {
      "name": "My Collection",
      "version": "v2.1.0",
      "description": "This is a demo collection.",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/"
  },
  "item": []
}
```

| Property | Description   |
| ---      | ---           |
| `info`   | Contains general metadata about the collection. |
| `item`   | An object or array that contains an API request, response, and metadata. |

### Info

At minimum, the `info` property contains the collection name and schema. You can also [define a version](/docs/reference/version) or provide a [description](/docs/reference/description) of your collection in the `info` property.

### Item

An item is the basic building block for a collection. It represents an HTTP request, along with the associated metadata.

```json
{
  "id": "my-first-item",
  "name": "My First Item",
  "description": "This is an Item that contains a single HTTP GET request. It doesn't really do much yet!",
  "request": "http://postman-echo.com/get",
  "response": []
}
```

An item can have multiple saved responses, which are stored in the response array.

### Item groups

An item group is a container for items. You can think of it as a folder for items. The folder has its own `name`, `id`, and `description`. A collection is an item group with a special `info` block.

```json
{
  "id": "my-first-itemgroup",
  "name": "First Folder",
  "description": "This ItemGroup contains two Items.",
  "item": [
    {
      "id": "1",
      "name": "Item A",
      "request": "http://postman-echo.com/get"
    },
    {
      "id": "2",
      "name": "Item B",
      "request": "http://postman-echo.com/headers"
    }
  ]
}
```

The item array above contains the items in this item group.

### Request

A request represents an HTTP request. A request can be found within an item. Requests can be specified as a string, as shown in the earlier example, or as a JSON object. If specified as a string, it's assumed to be a `GET` request.

```json
{
  "description": "This is a sample POST request",
  "url": "https://echo.getpostman.com/post",
  "method": "POST",
  "header": [
    {
      "key": "Content-Type",
      "value": "application/json"
    },
    {
      "key": "Host",
      "value": "echo.getpostman.com"
    }
  ],
  "body": {
    "mode": "urlencoded",
    "urlencoded": [
      {
        "key": "my-body-variable",
        "value": "Something Awesome!"
      }
    ]
  }
}
```

<br />

### Events

Events let you declare scripts that can run at certain stages in the lifecycle of your request or collection. The scripts are written in JavaScript and can be run using the [Postman Sandbox](https://github.com/postmanlabs/postman-sandbox).

There are two main event types:

1) **Test script**: You can associate a test script with an item. The test script is executed after the actual HTTP request is sent and the response is received.

2) **Pre-request script**: Pre-request scripts are executed before the HTTP request is sent.

```json
{
  "id": "evented-item",
  "name": "Item with Events",
  "description": "This is an Item that contains `test and `prerequest` events.",
  "request": "http://echo.getpostman.com/get",
  "event": [
    {
      "listen": "prerequest",
      "script": {
        "type": "text/javascript",
        "exec": "console.log('We are in the pre-request script, the request has not run yet!')"
      }
    },
    {
      "listen": "test",
      "script": {
        "type": "text/javascript",
        "exec": "console.log('We are using the test script now, and the request was already sent!')"
      }
    }
  ]
}
```
