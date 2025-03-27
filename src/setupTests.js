// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { afterAll, afterEach, beforeAll } from "@jest/globals";

// Start the mock server before running tests
beforeAll(() => server.listen());

// Reset handlers after each test (to prevent state leaks)
afterEach(() => server.resetHandlers());

// Close the server when tests are done
afterAll(() => server.close());
