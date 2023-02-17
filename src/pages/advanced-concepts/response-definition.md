---
title: "Structure of a response"
order: 1
page_id: "response-definition"
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

For every API request made over HTTP, there is a corresponding HTTP response. The HTTP response you get from a request might vary from endpoint to endpoint. The `response` object in a collection provides a way for you to represent any type of response you might get from an HTTP request.

## Contents

- [Response object](/docs/advanced-concepts/response-definition/#concepts)
  - [Original request](/docs/advanced-concepts/response-definition/#original-request)
  - [Headers](/docs/advanced-concepts/response-definition/#headers)
  - [Body](/docs/advanced-concepts/response-definition/#body)

<br />
<br />

## Response object

The response object lets you specify different parts of an HTTP response such as the status, response headers, response body, and the request that originated that response.

A response object has the following fields in a collection:

Field | Type | Description
--- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#LL7C2-L7C2) | `string` | A unique, user-defined identifier that can be used to refer to this response from requests.
[original request](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L11) | [request-object](/docs/reference/request/) | A clone of the request object that originated this response.
[response time](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L14) | `null`, `string`, `number` | The time taken by the request to complete. If a number, the unit is milliseconds. If the response is manually created, this can be set to `null`.
[timings](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L23) | `null`, `object` | Set of timing information related to request and response in milliseconds.
[headers](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L31) | `string`, array[[#header](/docs/reference/header/)] | An array or string of response headers.
[cookie](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L58) | array[[#cookie](/docs/reference/cookie/)] | An array of cookie objects.
[body](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L64) | `null`, `string` | The body of the response.
[status](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L71) | `string` | The response status. For example, `200 OK`.
[code](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/response.json#L75) | `integer` | The numerical response code. For example, `200`, `201`, or `404`.

In a collection, a response object looks like the following:

<br />

```json
{
  "response": [
    {
      "id": "d3b045fe-6109-4cdf-b583-7db892d67781",
      "name": "login",
      "originalRequest": {
        "description": "This is a sample POST request",
        "url": "https://postman-echo.com/post",
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "Application/JSON"
          },
        ],
        "body": {
          "mode": "urlencoded",
          "urlencoded": [
            {
              "key": "some-variable",
              "value": "Something awesome!"
            }
          ]
        }
      },
      "status": "OK",
      "code": 200,
      "header": [
        {
          "key": "Date",
          "value": "Sat, 05 Nov 2022 11:35:06 GMT"
        },
        {
          "key": "Content-Type",
          "value": "application/json; charset=utf-8"
        },
        {
          "key": "Content-Length",
          "value": "584"
        },
        {
          "key": "Connection",
          "value": "keep-alive"
        },
      ],
      "cookie": [],
      "responseTime": 100,
      "body": "{\n    \"token\": \"dkhb.jlsjkvasbjlksjlksnblks,mns,ms\"\n}"
    }
  ]
}
```

The following example shows the response object included in a complete collection definition:

```json
{
  "item": {
    "name": "Simple API definition",
    "request": {
      "description": "This is a sample POST request",
      "url": "https://postman-echo.com/post",
      "method": "POST",
      "header": [
        {
          "key": "Content-Type",
          "value": "Application/JSON"
        },
      ],
      "body": {
        "mode": "urlencoded",
        "urlencoded": [
          {
            "key": "some-variable",
            "value": "Something awesome!"
          }
        ]
      }
    },
    "response": [
      {
        "id": "d3b045fe-6109-4cdf-b583-7db892d67781",
        "name": "login",
        "originalRequest": {
          "description": "This is a sample POST request",
          "url": "https://postman-echo.com/post",
          "method": "POST",
          "header": [
            {
              "key": "Content-Type",
              "value": "Application/JSON"
            },
          ],
          "body": {
            "mode": "urlencoded",
            "urlencoded": [
              {
                "key": "some-variable",
                "value": "Something awesome!"
              }
            ]
          }
        },
        "status": "OK",
        "code": 200,
        "header": [
          {
            "key": "Date",
            "value": "Sat, 05 Nov 2022 11:35:06 GMT"
          },
          {
            "key": "Content-Type",
            "value": "application/json; charset=utf-8"
          },
          {
            "key": "Content-Length",
            "value": "584"
          },
          {
            "key": "Connection",
            "value": "keep-alive"
          },
        ],
        "cookie": [],
        "responseTime": 100,
        "body": "{\n    \"token\": \"dkhb.jlsjkvasbjlksjlksnblks,mns,ms\"\n}"
      }
    ]
  }
}
```

<br />

### Original request

The original request has a definition of the request that initiated this response. It matches the request definition so that you can map a response to its originating request.

### Headers

Response headers can be different and independent of the request headers. They're added by the server and can indicate different things about the HTTP response returned.

### Body

The response body is a serialized string of the response data. This can be JSON, HTML, XML, plain text, and others.
