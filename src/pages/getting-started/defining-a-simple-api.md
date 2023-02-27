---
title: "Defining a simple API"
order: 1
page_id: "defining-a-simple-api"
warning: false
updated: 2022-12-07
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

- [Basic API structure](#basic-api-structure)
- [APIs with multiple requests](#defining-an-api-with-multiple-requests)
- [Nesting folders](#nesting-folders)

## Basic API structure

A collection has two mandatory units that must be provided when defining an API: `info` and `item`.

The following is an API definition in its most basic form:

```json
{
  "info": {
    "name": "My first collection",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/"
  },
  "item": {
    "name": "This is a request",
    "request": "http://myapi.com/api"
  }
}
```

The request above is a URL and defaults to a `GET` request. For a more complete guide on working with the request object in collections, see [Request definition](/docs/advanced-concepts/request-definition/).

## Defining an API with multiple requests

You can define multiple requests in an API by using an item group, which can be represented as an array of items.

The following example shows an API definition that includes multiple requests:

```json
{
  "info": {
    "name": "My collection with multiple requests",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/"
  },
  "item": [
    {
      "name": "This is request one",
      "request": "http://myapi.com/api/1"
    },
    {
      "name": "This is request two",
      "request": "http://myapi.com/api/2"
    }
  ]
}
```

<br />

## Nesting folders

Item groups, or folders, can be nested inside other folders. This way, you can further group related API requests together. Depending on your use case and how your API is structured, you can also create sub-groups for each of those API groups.

The following example shows an API definition with nested requests:

```json
{
  "info": {
    "name": "My collection with multiple requests",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/"
  },
  "item": [
    {
      "item": [
        {
          "name": "Request 1a",
          "request": "https://postman-echo.com/get",
          "description": "This request is in a Folder nested inside another folder"
        },
        {
          "name": "Request 1b",
          "request": "https://postman-echo.com/get",
          "description": "This request is in a Folder nested inside another folder"
        }
      ]
    },
    {
      "name": "Request 2",
      "request": "https://postman-echo.com/get",
      "description": "This request is in a single folder"
    }
  ]
}
```
