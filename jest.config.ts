export default {
  testEnvironment: 'jest-environment-jsdom', // Same name of the lib you installed
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
};
