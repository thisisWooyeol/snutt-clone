import react from '@woohm402/eslint-config-react';

export default [
  {
    ignores: ['.yarn', '*.js', 'knip.config.ts', 'dist/**'],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
    envAllowedFiles: ['src/main.tsx'],
  }),
];
