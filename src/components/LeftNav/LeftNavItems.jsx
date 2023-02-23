/*
  use this file to create the left nav information architecture.

  Example code for parent, child, second level parent, second level child:

  {
    name: 'Title of Parent drawer: Getting started',
    parentSlug: 'Parent path: getting-started',
    url: 'This is the page that the user should land on when clicking on the parent drawer. Can be any url: /docs/getting-started/introduction/',
    subMenuItems1: [
      {
        name: 'first level child: Introduction',
        url: 'path to the first level child: /docs/getting-started/introduction/',
      },
      {
        name: 'This is a first level child that is also the second level parent drawer title: Capturing Request Data',
        subParentSlug: 'second parent path: capturing-request-data',
        slug: 'Page that user should land on when clicking on second level parent. Can be any url: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
        subMenuItems2: [
          {
            name: 'second level child: Capturing HTTP requests',
            url: 'path to second level child: /docs/sending-requests/capturing-request-data/capturing-http-requests/',
          },
        ],
      },
    ],
  }
*/


export const leftNavItems = [
  {
    name: 'Getting Started',
    parentSlug: 'getting-started',
    url: '/getting-started/overview/',
    subMenuItems1: [
      {
        name: 'Overview',
        url: '/getting-started/overview/',
      },
      {
        name: 'Structure of a collection',
        url: '/getting-started/structure-of-a-collection/',
      },
      {
        name: 'Defining a simple API',
        url: '/getting-started/defining-a-simple-api/',
      },
    ],
  },
  {
    name: 'Concepts',
    parentSlug: 'advanced-concepts',
    url: '/advanced-concepts/request-definition/',
    subMenuItems1: [
      {
        name: 'Structure of a request',
        url: '/advanced-concepts/request-definition/',
      },
      {
        name: 'Structure of a response',
        url: '/advanced-concepts/response-definition/',
      },
      {
        name: 'Variables',
        url: '/advanced-concepts/variables/',
      },
      {
        name: 'Events',
        url: '/advanced-concepts/events/',
      },
      {
        name: 'Documentation',
        url: '/advanced-concepts/documentation/',
      },
      {
        name: 'Extending collections',
        url: '/advanced-concepts/extending-collections/',
      },
      {
        name: "Differences between the collection format and Postman Collections",
        url: "/advanced-concepts/collection-format-vs-collection-in-postman/"
      }
    ],
  },
  {
    name: 'Reference',
    parentSlug: 'reference',
    url: '/reference/collection/',
    subMenuItems1: [
      {
        name: "Collection",
        url: "/reference/collection/"
      },
      {
        name: "Authorization",
        url: "/reference/auth/"
      },
      {
        name: "Auth attribute",
        url: "/reference/auth-attribute/"
      },
      {
        name: "Certificate",
        url: "/reference/certificate/"
      },
      {
        name: "Certificate list",
        url: "/reference/certificate-list/"
      },
      {
        name: "Cookie",
        url: "/reference/cookie/"
      },
      {
        name: "Cookie list",
        url: "/reference/cookie-list/"
      },
      {
        name: "Description",
        url: "/reference/description/"
      },
      {
        name: "Event",
        url: "/reference/event/"
      },
      {
        name: "Event list",
        url: "/reference/event-list/"
      },
      {
        name: "Header",
        url: "/reference/header/"
      },
      {
        name: "Header list",
        url: "/reference/header-list/"
      },
      {
        name: "Info",
        url: "/reference/info/"
      },
      {
        name: "Item",
        url: "/reference/item/"
      },
      {
        name: "Item group",
        url: "/reference/item-group/"
      },
      {
        name: "Request",
        url: "/reference/request/"
      },
      {
        name: "Response",
        url: "/reference/response/"
      },
      {
        name: "Script",
        url: "/reference/script/"
      },
      {
        name: "URL",
        url: "/reference/url/"
      },
      {
        name: "Variable",
        url: "/reference/variable/"
      },
      {
        name: "Variable list",
        url: "/reference/variable-list/"
      },
      {
        name: "Version",
        url: "/reference/version/"
      },
      {
        name: "Proxy",
        url: "/reference/proxy/"
      },
      {
        name: "Protocol profile behavior",
        url: "/reference/protocol-profile-behavior/"
      }
    ]
  },
  // {
  //   name: 'Tooling',
  //   parentSlug: 'tooling',
  //   url: '/tooling/collection-sdk/installation/',
  //   subMenuItems1: [
  //     {
  //       name: 'Collection SDK',
  //       subParentSlug: 'collection-sdk',
  //       slug: '/tooling/collection-sdk/installation/',
  //       subMenuItems2: [
  //         {
  //           name: "Installation",
  //           url: "/tooling/collection-sdk/installation/"
  //         }
  //       ]
  //     }
  //   ]
  // }
];

// export default parentSlugItems;
