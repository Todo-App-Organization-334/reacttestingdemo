module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/components/**/__tests__/**/*.test.js",
    "**/*.test.js",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.js",
    "!src/**/__tests__/**", // Exclude test files from coverage calculation
  ],
  coverageThreshold: {
    global: {
      statements: 0, // No global threshold
      branches: 0,
      functions: 0,
      lines: 0,
    },
    // Only enforce coverage for test files
    "./src/**/__tests__/**/*.test.js": {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["node_modules/(?!axios)/"],
};
