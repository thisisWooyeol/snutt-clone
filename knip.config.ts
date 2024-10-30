import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/**/*.{js,jsx,ts,tsx}', '*.config.{js, ts}'],
  project: ['**/*.{js,jsx,ts,tsx}', '*.config.{js, ts}'],
  ignore: ['**/node_modules/**'],
  ignoreExportsUsedInFile: true,
  rules: {
    dependencies: 'error',
    devDependencies: 'error',
    exports: 'error',
    files: 'error',
    types: 'error',
    unlisted: 'error',
  },
};

export default config;
