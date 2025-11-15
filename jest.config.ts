import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'junit.xml' }],
    [
      'jest-html-reporters',
      {
        publicPath: './reports/html',
        filename: 'index.html',
        expand: true
      }
    ]
  ]
};

export default config;
