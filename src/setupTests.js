import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// MSW Server Setup
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// // JSDOM polyfills
// if (typeof global.TextEncoder === "undefined") {
//   const { TextEncoder, TextDecoder } = require("util");
//   global.TextEncoder = TextEncoder;
//   global.TextDecoder = TextDecoder;
// }
