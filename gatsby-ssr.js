const React = require('react');
const bff = require('./bff.json');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  const modifiedComponents = [...headComponents];

  // Transcend is our data privacy and consent manager.
  // It must load first on the page.
  modifiedComponents.push(
    React.createElement('script', {
      key: "airgap",
      src: "https://transcend-cdn.com/cm/1f0cf102-c592-4eb4-834f-e07f2fe68ef1/airgap.js",
      'data-cfasync': false,
      'data-local-sync': "allow-network-observable",
      async: true
    })
  );

  modifiedComponents.push(
    React.createElement('script', {
      key: 'pm',
      dangerouslySetInnerHTML: {
        __html: bff.script,
      },
    }),
  );

  replaceHeadComponents(modifiedComponents);
};
