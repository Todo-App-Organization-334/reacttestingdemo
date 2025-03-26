module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/AddInput/**/*.js", // Include AddInput component
    "src/components/Todo/**/*.js", // Include Todo component
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/public/"], // Ignore untested files
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
