import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../../**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: [
    { from: '../../../explorers/assets', to: '/explorers-assets' },
    { from: '../../../agora/assets', to: '/agora-assets' },
  ],
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
