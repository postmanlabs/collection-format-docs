---
title: "Overview"
order: 1
page_id: "overview"
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
  - type: subtitle
---

A collection is an API specification that provides a format for representing, modeling, and organizing different parts of an API request or workflow. Its format is both human-readable and machine-readable, and it lets you create executable workflows for your APIs.

Collections let you:

* Share and execute API requests seamlessly.
* Define different aspects of your API.
* Create and model workflows for your APIs.
* Work across the lifecycle of your API.
* Document and test your API.

The Collection Format is [open source](https://github.com/postmanlabs/schemas/tree/develop/schemas/draft-07) and is the basis of [Collections in Postman](https://www.postman.com/collection/). The format's portability makes it possible to share in a distributed team and run in different environments without any information loss. A single collection file can contain API requests and their parameters, multiple responses to each request, documentation, tests, execution flows, and metadata. This helps developer teams collaborate, increase productivity, and work faster with APIs in any environment.

> This documentation focuses on [version 2.1.0](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json) of the collection format.

## Advantages of the Collection format

Collections have the following advantages:

### Collections are human-readable and machine-readable

Collections are written in JSON. Each property has an intuitive and understandable name with a relatable structure, making it readable to humans without having to consult a lot of external documentation. Collections are structurally sub-divided into tiny parts called units, and being coupled with JSON structure makes them readable by computers.

### Collections are interoperable

With the help of tooling, collections are interoperable. You can convert a collection to an API definition in a different format and vice versa. In Postman’s API Builder, you can import your API definitions in a variety of formats, such as OpenAPI and GraphQL, and use them to generate collections for different purposes, including mocking, documentation, and testing.

### Collections are highly portable

Collections are portable, which makes it possible to share and use them across multiple environments.

### Everything you need in a single place

Collections include everything you need to work with your API, including documentation, testing, API requests and workflows, and scripting.

### Code and documentation generation

Because collections are machine-readable, they can be used to generate both client and server-side codes for your APIs in any programming language. This means developers can generate SDKs for their APIs, saving time that would have been used to write one from scratch. For example, [Postman code generators](https://github.com/postmanlabs/postman-code-generators) let you generate code from your collections in over 10 programming languages.

Aside from code, documentation is another important aspect of building APIs. Collections support documentation by default, and this documentation can be converted into a more presentable form for better consumption.
