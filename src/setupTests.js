import "@testing-library/jest-dom";
import { server } from "./mocks/server";
// import { afterAll, afterEach, beforeAll } from "@jest/globals";

// ✅ Ensure TextEncoder & TextDecoder are available in JSDOM
// if (typeof global.TextEncoder === "undefined") {
//   global.TextEncoder = require("util").TextEncoder;
// }
// if (typeof global.TextDecoder === "undefined") {
//   global.TextDecoder = require("util").TextDecoder;
// }

// Start the mock server before running tests
beforeAll(() => {
  console.log("🔹 MSW starting...");
  server.listen();
});

// Reset handlers after each test to avoid test pollution
afterEach(() => server.resetHandlers());

// Close the mock server when tests are done
afterAll(() => server.close());
