module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.test.[jt]s?(x)", // Match test files inside __tests__
    "**/?(*.)+(test|spec).[jt]s?(x)", // Standard test file detection
  ],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],

  // Enable coverage but only for files that have tests
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.js", // Include component files
    "!src/**/*.test.js", // Exclude test files
    "!src/**/__tests__/**/*.js", // Exclude __tests__ folder explicitly
    "!src/index.js", // Exclude main entry files
    "!src/reportWebVitals.js", // Exclude boilerplate files
  ],

  // Ensure 90%+ coverage only for components that have tests
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },

  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],

  // Module handling
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  transformIgnorePatterns: ["node_modules/(?!axios)/"],
};
