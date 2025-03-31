module.exports = {
  collectCoverage: true,
  // testMatch: ["**/*.test.js"], // ✅ Only include test files
  // collectCoverageFrom: [
  //   "**/*.test.js", // ✅ Only collect coverage from test files
  // ],
  collectCoverageFrom: [
    "src/components/AddInput/**/*.js",
    "src/components/Todo/**/*.js",
    "src/components/Followers/**/*.js",
    "src/components/FollowersList/**/*.js",
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  coverageDirectory: "coverage",
  coverageReporters: ["json-summary", "text", "lcov"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // jest.config.js

  // testEnvironment: "jest-fixed-jsdom",
  // testEnvironmentOptions: {
  //   customExportConditions: [""],
  // },
  testEnvironment: "jsdom",
};
