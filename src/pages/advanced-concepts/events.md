---
title: "Events"
order: 1
page_id: "events"
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

Events let you declare scripts that you can execute at certain stages in the lifecycle of your requests or collections. The scripts are written in JavaScript and can be executed using the [Postman Sandbox](https://github.com/postmanlabs/postman-sandbox).

<br />

## Contents

- [Event object](#event-object)
- [Scripts](#scripts)
- [Pre-request scripts](#pre-request-scripts)
- [Test scripts](#test-scripts)
  
## Event object

An event object is defined using an event-list, which is an array of event objects.

An event object looks like the following:

```json
{
  "id": "abffrda7-b967-45f5-95dd-8fa73720d34",
  "listen": "test", //  `test` or `prerequest`
  "script": {
    "id": "bdff8da7-b967-45f5-95dd-8fa73720fc27",
    "type": "text/javascript",
    "exec": [
      "const text = 'I am a text';",
      "console.log('Text is: ', text)",
    ],
  },
  "disabled": false
}
```

<br />

### Scripts

When a script is listening to an event and the event fires, the script object defines what code can run.

A script object can have the following fields:

Field | Type | Description
--- | --- | ---
[id](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/script.json#L8) | `string` | A unique, user-defined identifier that you can use to refer to this script from requests.
[type](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/script.json#L12) | `string` | The type of the script. For example, `text/javascript`.
[exec](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/script.json#L16) | `string`, `[ string ]` | A string or an array of strings, where each line represents a single line of code. Separate lines make it possible to track changes made to scripts.
[src](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/script.json#L16) |  [reference-object](/reference/url/)  | Provides a reference for external scripts.
[name](https://github.com/postmanlabs/schemas/blob/develop/schemas/draft-07/v2.1.0/collection/script.json#L33) | `string` | The name of the script.

Scripting allows you to model workflows for your requests. You can model workflows so that the input of one request is dependent on the output of another and make them run in a sequence. For more information, see [Intro to Scripts](https://learning.postman.com/docs/writing-scripts/intro-to-scripts/) in the Postman Learning Center.

> You can use `exec` or `src` to reference the code in the script. If both are used together, `exec` takes precedence over `src`.

#### Pre-request scripts

Scripts that listen to the `prerequest` event are executed right before the request is made. You can write code to change variables and parameters dynamically based on required logic or use case. This helps with data pre-processing and logging. For more information, see [Writing pre-request scripts](https://learning.postman.com/docs/writing-scripts/pre-request-scripts/).

#### Test scripts

Scripts that listen to the `test` event are executed right after a response to the request is received. You can write code that performs certain actions on the response. For example, you can write tests to confirm that your request returns the expected response data.

You can also write assertions to run against the response from each API request so that you know when something isn't working as expected. This can help you automate your debugging. For more information, see [Writing Tests](https://learning.postman.com/docs/writing-scripts/test-scripts/).
