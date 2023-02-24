---
title: "Extending collections"
order: 1
page_id: "extending-collections"
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

Collections consist of multiple sub-structural parts called units. Each unit defines a certain part of your API.

Extensions allow you to extend these units and provide meta information, along with any other desired fields or data. Extensions are user-defined and you can place them anywhere in a collection. They include a preceding underscore (_) and can contain any data type such as strings, objects, integers, and others.

The following example shows a cookie being added to a request object using an extension:

```json
{
  "request": {
    "url": "https://postman-echo.com/get",
    "method": "GET",
    "headers": [],
    "_cookies": "sails.sid=s%3AniBCE5lER3oAaOHz8cALlkPTkFx4RT9p.XfGCKnUJ87PJjtupGSxfLwddXaFoAN2ADKk%2BM5c1RPU; Path=/; HttpOnly"
  }
}
```

Because extensions can be used anywhere in a collection, there is no limit to how they can be used to store or retrieve data.

> Extensions can be given any name, but extensions starting with `_postman` are reserved.
