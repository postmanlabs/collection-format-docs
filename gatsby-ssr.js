const React = require('react');
const bff = require('./bff.json');

const getEnvironment = () => process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'production';
const transcendEnv = getEnvironment() === 'production' ? 'cm' : 'cm-test';

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  const modifiedComponents = [...headComponents];

  modifiedComponents.push(
    React.createElement('script', {
      key: 'pm',
      dangerouslySetInnerHTML: {
        __html: bff.script,
      },
    }),
    React.createElement('script', {
      key: 'transcend',
      'data-px': '<!-- Transcend -->',
      dnt: true,
      src: `https://transcend-cdn.com/${transcendEnv}/1f0cf102-c592-4eb4-834f-e07f2fe68ef1/airgap.js`,
      'data-cfasync': false,
      'data-local-sync': 'allow-network-observable',
    }),
  );

  replaceHeadComponents(modifiedComponents);
};
