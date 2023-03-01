---
title: "Documentation"
order: 1
page_id: "documentation"
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


Modeling workflows and representing your APIs in a human-readable and machine-readable format is one part of building and working with your APIs. Another key aspect is ensuring that anyone who is going to consume or work with this API in the future has all the information and context they need to get started. Documentation is a key part of developing APIs because it helps you start working with your API and understanding what each request in your API does.

<br />

## Contents

- [Documenting collections](#documenting-collections)
- [Description object](#description-object)

## Documenting collections

Collections have different units or parts that each describe a specific aspect of a group of API requests. These different parts often need more details or information that give more context to anyone who interacts with the collection. These extra details are provided using the [description](/reference/description/) object. When the description object added to different parts of a collection, it becomes documentation for that collection.

## Description object

The description object is a powerful tool for describing different parts of a collection. Almost every collection unit has a description property, and each of these descriptions provide usage context for the collection.

Descriptions can be either strings or objects and can contain plain text, Markdown, HTML, or other MIME types.

A description object looks like the following:

```json
{
  "description": {
    "content": "<p>The description you want to provide.</p> ",
    "type": "text/html",
    "version": "A description can have versions associated with it. Use this field to specify a version for your description."
  }
}
```

<br />

An example of a collection with documentation using the description object is shown below. This example makes use of modified excerpts from the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

```json
{
  "info": {
    "name": "Collection showing documentation example",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": {
    "name": "Create a collection",
    "description": {
      "type": "text/markdown",
      "content": "## Postman API\n        The Postman API lets you to programmatically access data stored in your Postman account with ease.\n\n        ## Overview\n        1. You must use a valid API Key to send requests to the API endpoints. You can get your API key from Postman's integrations dashboard.\n        2. The API has access rate limits.\n        3. The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.\n\n        ## ID and UID\n        All items in Postman, such as collections, mocks, workspaces, and APIs, have ID and UIDs:\n\n        - An ID is the unique ID assigned to a Postman item. For example, ec29121c-5203-409f-9e84-e83ffc10f226.\n        - The UID is the full ID of a Postman item. This value is the item's unique ID concatenated with the user ID. For example, in the 12345678-ec29121c-5203-409f-9e84-e83ffc10f226 UID:\n          - 12345678 is the user's ID.\n          - ec29121c-5203-409f-9e84-e83ffc10f226 is the item's ID."
    },
    "request": {
      "description": {
        "type": "text/markdown",
        "content":  "### Create a collection\n      \n                Creates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). Include a collection object in the request body that contains the following required properties:\n                - `info` -- An *object* that contains the following properties:\n                  - `name` -- A *string* value that contains the collection's name.\n                  - `schema` -- A string that contains a URL to the collection's schema. For example, the `https://schema.getpostman.com/collection/v1` URL.\n                - `item` -- An *object* that contains the HTTP request and response information.\n                  - `request` --  An *object* that contains the collection's request information. For a complete list of values, refer to the `definitions.request` entry in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). If you pass an empty object for this value, the system defaults to an untitled GET request."
      },
      "url": "https://api.getpostman.com/collections",
      "method": "POST",
       "header": [
        {
          "key": "Content-Type",
          "value": "Application/JSON"
        }
      ],
      "body": {
        "mode": "raw",
        "raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Sample Collection\",\n            \"schema\": \"https://schema.postman.com/json/collection/v2.1.0/collection.json\"\n        },\n        \"item\": [\n            {\n                \"request\": \"https://postman-echo.com/get\"\n            }\n        ]\n    }\n}",
        "options": {
          "raw": {
            "language": "json"
          }
        }
      }
    }
  }
}
```

<br />

The documentation for the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) is a good example of how documentation can be presented using collections.
