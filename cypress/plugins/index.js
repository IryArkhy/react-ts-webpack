/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

const defaults = webpackPreprocessor.defaultOptions;

module.exports = (on, config) => {
  delete defaults.webpackOptions.module.rules[0].use[0].options.presets;
  // @ts-expect-error bcs
  const webpackConfig = require('../../webpack.config')(
    { mode: 'development' },
    {
      mode: 'development',
    }
  );

  if (config.testingType === 'component') {
    const { startDevServer } = require('@cypress/webpack-dev-server');

    on('dev-server:start', (options) =>
      startDevServer({ options, webpackConfig })
    );
  } else {
    const opt = {
      webpackOptions: webpackConfig,
    };
    on('file:preprocessor', webpackPreprocessor(opt));
  }
};
