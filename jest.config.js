module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/AddInput/**/*.js",
    "src/components/Todo/**/*.js",
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // jest.config.js

  testEnvironment: "jest-fixed-jsdom",
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  testEnvironment: "jsdom",
  maxWorkers: "50%",
};
