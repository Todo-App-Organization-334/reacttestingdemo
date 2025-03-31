const glob = require("glob");
const fs = require("fs");

// Get all test files in __tests__ directories
const testFiles = glob.sync("src/components/**/__tests__/*.test.js");

// Extract corresponding source files (without __tests__ and .test.js)
const sourceFiles = testFiles
  .map((testFile) => {
    const componentPath = testFile
      .replace("/__tests__/", "/") // Remove __tests__ folder
      .replace(".test.js", ".js"); // Convert test filename to source filename
    return fs.existsSync(componentPath) ? componentPath : null;
  })
  .filter(Boolean);

module.exports = {
  // Test configuration
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.?(test|spec).[jt]s?(x)",
    "**/?(*.)+(test|spec).[jt]s?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // Coverage configuration
  collectCoverage: true,
  collectCoverageFrom: sourceFiles, // Only include tested files
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/public/",
    "\\.(css|less|scss|sass)$",
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
  coverageReporters: ["json", "lcov", "text", "clover"],

  // Module handling
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["node_modules/(?!axios)/"],
};
