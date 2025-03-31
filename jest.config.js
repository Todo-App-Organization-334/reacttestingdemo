module.exports = {
  testEnvironment: "jsdom",
  // Expanded test matching patterns
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.test.js", // More flexible path
    "**/*.test.js", // Fallback pattern
  ],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  collectCoverage: true,
  // More inclusive coverage collection
  collectCoverageFrom: [
    "src/components/**/*.js", // All components
    "!src/**/__tests__/**", // Exclude test files
  ],

  // Modified coverage thresholds
  coverageThreshold: {
    global: {
      statements: 0, // Disable global thresholds
      branches: 0,
      functions: 0,
      lines: 0,
    },
    // Only enforce for components
    "./src/components/**/*.js": {
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

  // Add verbose output for debugging
  verbose: true,
};
