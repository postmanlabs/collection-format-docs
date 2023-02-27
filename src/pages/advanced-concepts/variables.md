---
title: "Variables"
order: 1
page_id: "variables"
warning: false
updated: 2023-01-10
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

Variables in collections let you declare a value once and re-use it in multiple places in your definition. For example, if multiple requests in your definition use the same base URL, you can store this URL in a variable and call that variable in the URL definition of your various requests.  

## Contents

- [Variable definition and usage](#variable-definition-and-usage)

- [Collection variables](#collection-variables)

- [Unit variables](#unit-variables)
    - [Item scope](#item-scope)
    - [URL scope](#url-scope)

- [Use cases](#use-cases)
    - [Variables in query params](#variables-in-query-params)
    - [Variables in request body](#variables-in-request-body)
    - [Variables in GraphQL](#variables-in-graphql)

## Variable definition and usage

A variable is defined using a [variable-list](/docs/reference/variable-list/), which is an array of [variable objects](/docs/reference/variable/). Each object has a key-value pair and some metadata that represents different parts of your variable.

A variable definition looks like the following:

```json
{
  "id": "26b4f3b6-042e-4ca3-899a-fb709e3efa9f",
  "key": "baseUrl",
  "value": "https://postman-echo.com/get",
  "type": "string",
  "name": "Base URL",
  "disabled": false,
  "description": "Description of your variable",
  "system": false // When set to true, indicates that this variable has been set by Postman
}
```

<br />

Field | Type | Description
--- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L8) | `string` | A unique user-defined value that identifies the variable within a collection.
[key](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L12) | `string` | A human-friendly value that identifies the variable within a collection. In traditional terms, this is a variable name.
[value](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L16) | `string` | The value that a variable holds in this collection. The variables is replaced by this value when you run a set of requests from a collection.
[type](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L19) | `string`, `boolean`, `any`, `number` | A variable can have multiple types. This field specifies the type of the variable.
[name](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L29) | `string` | The name of the variable.
[disabled](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L41) | `boolean` | When set to `true`, the variable is ignored.
[description](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L33) | [reference-object](/docs/reference/description/) | A description of the variable.
[system](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/variable.json#L36) | `boolean` | When set to `true`, this indicates that the variable is set by Postman.

<br />

To use a variable, place the key in between double curly braces. For example, `{{variable-key}}`. Variables can be used in URLs, request bodies, and headers.

If you save a URL path as a variable, call the variable by using columns to precede the variable key in the URL path, as shown in the following example.

```json
{
  "item": {
    "name": "Collection Variable Example",
    "request": "https://postman-echo.com/get/customer/:customerId",
  },
  "variable": [
    {
      "id": "e5b2bde6-15e5-4081-92c9-4ae767433032",
      "key": "customerId",
      "value": "123abc",
      "type": "string",
      "disabled": false,
    }
  ],
}
```

Similar to variables in programming languages, you can scope variables in collections. They can be global to the collection itself or scoped to a specific unit of that collection.

## Collection variables

Collection variables are declared in the upper scope of the collection object. You can access them from anywhere you can use a variable within a collection. They're referred to as collection variables because they're scoped to an entire collection.

The following is an example of a collection variable:

```json
{
  "item": {
    "name": "Collection Variable Example",
    "request": "https://postman-echo.com/get?id={{customerId}}",
  },
  "variable": [
    {
      "id": "e5b2bde6-15e5-4081-92c9-4ae767433032",
      "key": "customerId",
      "value": "123abc",
      "type": "string",
      "disabled": false,
    }
  ],
}
```

In the example, the `customerId` variable was declared in the collection scope and was used in the query parameter of the request URL. This same variable can also be used in the request headers, authorization, or anywhere else a variable can be used within a collection.

## Unit variables

Collections consist of a set of reusable sub-structural parts called units. A unit can be nested within another unit.

A variable is an example of a collection unit that can be nested in other units. When a variable is nested in another unit, it's referred to as a unit variable. Unit variables are scoped to the unit in which they have been declared and can't be called outside that unit. Collections have two unit variable scopes: item and URL.

### Item scope

Item-scoped variables are scoped to the [item](/docs/reference/item/) unit of a collection.

The following is an example of an item-scoped variable:

```json
{
  "item": {
    "name": "Item Scoped Variable Example",
    "request": {
      "url": "https://postman-echo.com/post",
      "method": "POST",
      "body": {
        "mode": "raw",
        "raw": "{{customerData}}",
        "options": {
          "raw": {
            "language": "json"
          }
        }
      }
    },
    "variable": [
      {
        "id": "e5b2bde6-15e5-4081-92c9-4ae767433032",
        "key": "customerData",
        "value": "{'name':'John Doe','email':'johndoe@email.com'}",
        "type": "string",
        "disabled": false,
      }
    ],
  },
}
```

The example shows the variable `customerData` declared in the item scope. This variable is being used in the body of the request. The variable is scoped to this item and can't be called from any other item. Variables in an item group can be called by any item in that item group.

#### URL scope

Variables scoped to a particular URL can only be called or used from within that URL object. You'll often find variables stored in URLs being used as path variables.

The following is an example of a URL-scoped variable:

```json
{
  "url": {
    "raw": "https://postman-echo.com:443/get/user?username={{username}}&email={{email}}",
    "protocol": "https",
    "host": [
      "postman-echo",
      "com"
    ],
    "port": "443",
    "path": [
      "get",
      "user"
    ],
    "query": [
      {
        "key": "username",
        "value": "{{username}}",
        "disabled": false,
        "description": "Username of this user"
      },
      {
        "key": "email",
        "value": "{{email}}",
        "disabled": false,
        "description": "Email of this user"
      }
    ],
    "variable": [
      {
        "id": "e5b2bde6-15e5-4081-92c9-4ae767433032",
        "key": "username",
        "value": "johndoe",
      },
      {
        "id": "e3t5b2bde6-15e5-4081-92c9-4ae7674332w23",
        "key": "email",
        "value": "john@doe.com",
      }
    ]
  }
}
```

<br />

> If a variable with the same name is declared in two different scopes, the value stored in the variable with narrowest scope is used. For example, if there is a collection variable named `username` and a unit variable named `username`, the unit value is used.

## Use cases

Variables can be used in different parts or units of a collection. Some examples of where variables can be used are highlighted in this section.

### Variables in query params

```json
{
  "url": {
    "raw": "https://postman-echo.com:443/get/user?username={{username}}&email={{email}}",
    "protocol": "https",
    "host": [
      "postman-echo",
      "com"
    ],
    "port": "443",
    "path": [
      "get",
      "user"
    ],
    "query": [
      {
        "key": "username",
        "value": "{{username}}",
        "disabled": false,
        "description": "Username of this user"
      },
      {
        "key": "email",
        "value": "{{email}}",
        "disabled": false,
        "description": "Email of this user"
      }
    ],
    "variable": [
      {
        "id": "e5b2bde6-15e5-4081-92c9-4ae767433032",
        "key": "username",
        "value": "johndoe",
      },
      {
        "id": "e3t5b2bde6-15e5-4081-92c9-4ae7674332w23",
        "key": "email",
        "value": "john@doe.com",
      }
    ]
  }
}
```

<br />

### Variables in request body

```json
{
  "item": {
    "name": "Item Scoped Variable Example",
    "request": {
      "url": "https://postman-echo.com/post",
      "method": "POST",
      "body": {
        "mode": "raw",
        "raw": "{{customerData}}",
        "options": {
          "raw": {
            "language": "json"
          }
        }
      }
    },
    "variable": [
      {
        "id": "e5b2bde6-15e5-4081-92c9-4ae767433032",
        "key": "customerData",
        "value": "{'name':'John Doe','email':'johndoe@email.com'}",
        "type": "string",
        "disabled": false,
      }
    ],
  },
}
```

<br />

### Variables in GraphQL

```json

{
  "item": {
    "name": "Item Scoped Variable Example",
    "request": {
      "url": "https://postman-echo.com/post",
      "method": "POST",
      "body": {
        "mode": "graphql",
        "graphql": {
          "query": `
            {
              query(username: $gql_username){
                name
                email
              }
            }
          `,
          "variables": "{ 'gql_username': '{{username}}' }" // Collection variable being used inside graphql variables
        },
      }
    },
  },
  "variable": [
    {
      "id": "e5b2bde6-15e5-4081-92c9-4ae767433032",
      "key": "username",
      "value": "johndoe",
      "type": "string"
    }
  ],
}
```

<br />

> In the Postman app, there are a some parts of a collection where variables can be used that aren't supported by the spec. For example, authorization and request headers don't support variables.
> Variables can also be programmatically declared and called in events or scripts. For more information, see [Defining variables in scripts](https://learning.postman.com/docs/sending-requests/variables/#defining-variables-in-scripts) in the Postman Learning Center.
