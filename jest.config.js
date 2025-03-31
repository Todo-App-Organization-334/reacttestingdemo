module.exports = {
  // Test configuration
  testEnvironment: "jsdom",
  testMatch: [
    "**/__test__/**/*.js", // Matches test files in __test__ folders
    "**/*.test.js", // Fallback for standard test files
  ],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Coverage configuration
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.js", // All component files
    "!src/**/__test__/**/*.js", // Exclude test files from coverage calculation
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/public/",
    "\\.(css|less|scss|sass)$",
  ],
  coverageThreshold: {
    global: {
      statements: 0, // No global threshold
      branches: 0,
      functions: 0,
      lines: 0,
    },
    // Only enforce coverage thresholds for test files
    "./src/**/__test__/**/*.js": {
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
