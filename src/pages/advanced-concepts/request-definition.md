---
title: "Structure of a request"
order: 1
page_id: "request-definition"
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

Collections let you organize API requests. The most basic form of a collection is shown below.

```json
{
  "item": {
    "name": "Simple API definition",
    "request": "https://postman-echo.com/get"
  }
}
```

<br />
An API sits between an application and a server. An application can make an API call that tells the server to perform an action or request data from the server. This API call is referred to as an API request.

<br />
<br />

## Contents

- [Request object](#request-object)
    - [Request headers](#request-headers)
    - [Request methods](#request-methods)
    - [Authorization](#auth)
        - [Auth attributes](#auth-attributes)
    - [Description](#description)
    - [Request body](#request-body)
        - [mode](#mode)
        - [raw](#raw)
        - [urlencoded](#urlencoded)
        - [formdata](#formdata)
        - [file](#file)
        - [graphql](#graphql)
    - [URLs](#urls)
    - [Configuring proxies](#configuring-proxies)
    - [Certificates](#certificates)

## Request object

In the earlier example, the collection has a single item that has a single request, which is a URL. When the request is a URL string, the request method is `GET`. But a request is much more than a URL. It's an object that represents the different parts of an API request such as the request headers, body, and anything else that's needed to make a successful API request.

The following example shows the basic structure of a request object:

```json
{
  "description": "This is a sample POST request",
  "url": "https://postman-echo.com/post",
  "method": "POST",
  "header": [
    {
      "key": "Content-Type",
      "value": "Application/JSON"
    },
    {
      "key": "host",
      "value": "postman-echo.com"
    }
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
}
```

<br />

Field | Type | Description
--- | --- | ---
[url](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L11) | [reference object](/reference/url/) | If this is an object, contains the complete broken-down URL for this request. If it's a string, contains the literal request URL.
[auth](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L14) | [reference-object](/reference/auth/) | Represents authentication helpers provided by Postman.
[method](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L30) | `string` | The standard HTTP method associated with this request.
[description](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L59) | [reference-object](/reference/description/) | Raw text or an object that holds the description along with its format.
[header](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L62) | [reference-object](/reference/header/) | Represents an HTTP header.
[body](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L72) | `null` \| `object` | The data contained in the request body.
[certificate](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L27) | [reference-object](/reference/certificate/) | Represents an SSL certificate.
[proxy](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L24) | [reference-object](/reference/proxy/) | Configure your custom proxy in Postman for a particular URL match.

<br />

### Request headers

Collections let you specify the headers of your request using the `header` attribute. This can be a [header object](/reference/header/) or an [array of headers](/reference/header-list/). Each of the attributes of a header is represented as a `key-value` pair object.

The following example shows a request header:

```json
  {
    "key": "Content-Type",
    "value": "application/json",
    "disable": false,
    "description": "Your headers descriptions"
  }
```

<br />

- `key`: This is the key of a specific header attribute.
- `value`: This is the corresponding value of a header's `key`.
- `disable`: This is a Boolean that indicates if the header will be included in the current request or not.
- `description`: This is a string or [description object](/reference/description/) that describes this specific header attribute.

For example, if you have the following request header:

```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer 12345",
  "x-api-key": "slknakliwpojpwsnj"
}
```

You can use the earlier request header in a collection request as follows:

```json
  {
    "description": "Header example",
    "url": "https://postman-echo.com/get",
    "method": "GET",
    "header" [
      {
        "key": "Content-Type",
        "value": "application/json"
      },
      {
        "key": "Authorization",
        "value": "Bearer 12345"
      },
      {
        "key": "x-api-key",
        "value": "slknakliwpojpwsnj"
      }
    ]
  }
```

<br />

### Request methods

The following request methods are supported in a collection:

- `GET`
- `PUT`
- `POST`
- `PATCH`
- `DELETE`
- `COPY`
- `HEAD`
- `OPTIONS`
- `LINK`
- `UNLINK`
- `PURGE`
- `LOCK`
- `UNLOCK`
- `PROPFIND`
- `VIEW`

<br />

### Auth

Authorization helps to validate the client side identity using a client-provided credential. Authorization data is transferred in plain text or in an encrypted form to a server, which then validates the provided authorization credentials.

Collections let you specify the following types of authorization headers in your request definitions:

- `apikey`
- `awsv4`
- `basic`
- `bearer`
- `digest`
- `edgegrid`
- `hawk`
- `noauth`
- `oauth1`
- `oauth2`
- `ntlm`

[Authorization](/reference/auth/) is represented using the `auth` attribute and requires the `type` field, which specifies the authorization type. You can use the authorization types listed earlier as fields in the `auth` attribute. The `type` field is an enum and can be any of the types specified above. The type of authorization used depends on the value specified in the `type` field.

The following example shows an authorization type definition:

```json
  {
    "type": "basic",
    "basic": [
      {
        "key": "password",
        "value": "your_secure_password",
        "type": "string"
      },
      {
        "key": "username",
        "value": "your_unique_username",
        "type": "string"
      }
    ],
  }
```

<br />

#### Auth attributes

An [auth attribute](/reference/auth-attribute/) is a JSON representation of the credentials contained in an authorization. In the earlier example, the authorization of type `basic` has a corresponding `basic` property. This property contains an array of objects as its value and is referred to as an `auth attribute`.

The following example shows an object contained in an `auth attribute` array:

```json
  {
    "key": "your_auth_key_name",
    "value": "The corresponding value which could be of any scalar `type`. string, object, boolean, etc",
    "type": "The type of the data in the value attribute."
  }
```

The following example shows the `auth attribute` object as part of a collection request:

```json
  {
    "description": "Header example",
    "url": "https://postman-echo.com/get",
    "method": "GET",
    "header" [
      {
        "key": "Content-Type",
        "value": "application/json"
      },
      {
        "key": "Authorization",
        "value": "Bearer 12345"
      },
    ],
    "auth": {
      "type": "bearer",
      "bearer": [
        {
          "key": "token",
          "value": "Bearer your_authorization_token",
          "type": "String"
        }
      ]
    }
  }
```

<br />

### Description

[Descriptions](/reference/description/) help add more context to your definitions. Descriptions can be either strings or objects and their contents can contain Markdown, HTML, or plain text.

```json
# Request Definition
  {
    "url": "https://postman-echo.com/get",
    "method": "GET",
    "description": {
      "content": "<p>The description you want to provide.</p> ",
      "type": "text/html",
      "version": "Description can have versions associated with it. Use this field to specify a version for your description"
    }
  }
```

<br />

### Request body

Collections support five different request body types:

- `raw`
- `urlencoded`
- `formdata`
- `file`
- `graphql`

A request body in a collection has the following fields, with `mode` being the only required field:

```json
  {
    "mode": "raw | urlencoded | formdata | file | graphql",
    "raw": "raw string",
    "urlencoded": {},
    "formdata": [],
    "file": {},
    "graphql": {},
    "options": {},
    "disabled": {},
  }
```

<br />

Field | Type | Description
--- | --- | ---
[mode](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L78) | `raw`, `urlencoded`, `formdata`, `file`, or `graphql` | Stores the type of data associated with this request in this field.
[raw](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L88) | `string` | A string of a serialized version of the payload.
[urlencoded](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L94) | `object` | The URL-encoded data.
[formdata](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L119) | `object` | Represents a formdata. This can be text, a file, or any kind of data you want to submit over an encoded `multipart/formdata`.
[file](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L190) | `object` | Specifies a file directly as the request body.
[graphql](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L91) | `object` | Represents a GraphQL schema.
[options](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L210) | `object` | Provides any extra constraints or data.
[disabled](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/request.json#L214) | `boolean` | When set to `true`, prevents the request body from being sent.

<br />

#### mode

The mode is how the request payload is to be represented before it is sent to the server. The specified mode must have a corresponding field defined in the request body's object, and the options object can be used to provide any extra constraints or data.

#### raw

Raw is a string or serialized version of the request payload. The serialized data can be JSON, XML, HTML, or plain text.

#### urlencoded

URL-encoded data can be provided in string-value pairs along with the `disabled` property and descriptions.

```json
  {
    "key": "name",
    "value": "John Doe",
    "disabled": false,
    "description": ""
  }
```

#### formdata

Collections let you define formdata in a manner similar to how `urlencoded` is defined. You can define text, files, or any kind of data you want to submit over an encoded `multipart/formdata`.

```json
  {
    "key": "image",
    "value": "data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7",
    "disabled": false,
    "type": "String",
    "contentType": "file",
    "description": "form data image example"
  }
```

> If your form data is a file that uses an absolute or a relative path, use `src` instead of `value`.

```json
  {
    "key": "image",
    "description": "Some text emoji",
    "type": "file",
    "src": "/path/to/emoji.png"
  }
```

<br />

#### file

You can specify files directly as the request body.

```json
  "file": {
    "src": "/path/to/emoji.png"
  }
```

<br />

#### graphql

GraphQL requests are made over HTTP in the same way a `POST` or a `GET` request is made to a RESTful API. Collections provide the `graphql` property in the request body, which lets you specify your GraphQL schema and its corresponding variables.

```json
  {
    "query": `
      {
        query(username: $username){
          name
          email
        }
      }
    `,
    "variables": "{ 'username': 'johndoe' }"
  }
```

<br />

### URLs

A [URL](/reference/url/) in a collection can be as basic as a string, or it can be an object that describes the different parts of that URL. For example, the URL `https://postman-echo.com:443/get/user?username=johndoe&email=john@doe.com` can be represented diagrammatically as shown below.

![Structure of a URL](https://firebasestorage.googleapis.com/v0/b/collection-format-docs.appspot.com/o-images%2FURL%402x%20(1).png?alt=media&token=3f24f4e6-8533-4077-b592-830ff9608b5f)

A URL object has the following fields:

Field | Type | Description
--- | --- | ---
[raw](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L10) | `string` | The string representation of the request [URL](/reference/url/), including the protocol, host, path, hash, query parameters, and path variables.
[protocol](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L14) | `string` | The port number in the URL. An empty value implies 80/443 depending on whether the protocol field contains HTTP or HTTPS.
[host](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L18) | `string`, `array[string]` |  The host for the URL as a string or array of strings. For example, `api.yourdomain.com`, or `['api', 'yourdomain', 'com']`.
[path](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L34) | `string`, `array[string\|object]` | The complete path of the current URL broken down into segments. A segment can be a string or a path variable.
[port](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L63) | `string` | The port number in the URL. An empty value implies 80/443 depending on whether the protocol field contains HTTP or HTTPS.
[query](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L67) | `object` | An array of QueryParams, which is the query string part of the URL.
[hash](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L97) | `string` | Contains the URL fragment, if any. This isn't typically transmitted over the network, but it could be useful to store this in some cases.
[variable](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/url.json#L101), array[[#variable](/reference/variable/)] | Collections support path variables with the syntax `/path/:variableName/to/somewhere`. These variables are stored in this field.

The following example shows how the earlier URL looks in a collection:

```json
{
  "description": "This is a sample GET request",
  "url": {
    "raw": "https://postman-echo.com:443/get/user?username=johndoe&email=john@doe.com",
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
        "value": "johndoe",
        "disabled": false,
        "description": "Username of this user"
      },
      {
        "key": "email",
        "value": "john@doe.com",
        "disabled": false,
        "description": "Email of this user"
      }
    ]
  }
}
```

Representing URLs as JSON gives you more flexibility, as seen in the example above. You can choose to make a specific query parameter inactive, provide more context as a description, or describe every part of your URL.

### Configuring proxies

If you have a proxy set up, you can provide configuration for a proxy for your request.

The `proxy` request property helps you do this with the following properties:

- `match`: The URL match for which the proxy config is defined. Defaults to `http+https://*/*`.
- `host`: The proxy server host.
- `port`: The proxy server port.
- `tunnel`: The tunneling details for the proxy config.
- `disabled`: When set to `true`, ignores this proxy configuration element.

<br />

### Certificates

You can specify an array of [SSL certificates](/reference/certificate-list/) for your request using the `certificate` property. This array contains [certificate objects](docs/reference/certificate/) that describe each certificate in your request.

The `certificate` property contains the following objects:

- `name`: A name for the certificate for user reference.
- `matches`: An array of URL match pattern strings to identify URLs this certificate can be used for.
- `key`: An object containing path to file containing the private key on the file system. For example, `{ key: { src: 'path/to/file' } }`.
- `cert`: An object containing the path to the file certificate on the file system. For example, `{ key: { src: 'path/to/file' } }`.
- `passphrase`: The passphrase for the certificate.
