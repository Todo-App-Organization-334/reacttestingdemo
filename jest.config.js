module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  collectCoverage: true,
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
  coverageReporters: ["json", "lcov", "text", "clover"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  transformIgnorePatterns: ["node_modules/(?!axios)/"],
};
