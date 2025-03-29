import "@testing-library/jest-dom";
import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom";
import { rest } from "msw";
// import server from "../../../mocks/server";
import { setupServer } from "msw/node";
import { handlers } from "../../../mocks/handlers";

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("Followers List Component", () => {
  it("should fetch and display a list of followers from an API", async () => {
    render(<MockFollowersList />);
    const elements = await screen.findAllByTestId("follower-name");
    expect(elements).toHaveLength(2);
    expect(elements[0]).toHaveTextContent("John Doe");
    expect(elements[1]).toHaveTextContent("Jane Smith");
  });

  it("should show a loading indicator before followers load", async () => {
    render(<MockFollowersList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      const loadingText = screen.queryByText("Loading...");
      expect(loadingText).not.toBeInTheDocument();
    });
  });

  // it("should display error message when API request fails", async () => {
  //   server.use(
  //     rest.get("https://randomuser.me/api/?results=5", (req, res, ctx) => {
  //       return res(ctx.status(500), ctx.json({ message: "Failed to fetch" }));
  //     })
  //   );
  //   render(<MockFollowersList />);
  //   expect(screen.getByText(/loading/i)).toBeInTheDocument();

  //   await waitFor(() => {
  //     const loadingText = screen.queryByText(/loading/i);
  //     expect(loadingText).not.toBeInTheDocument();
  //   });

  //   await waitFor(() => {
  //     const loadingText = screen.getByText(
  //       "Failed to load followers. Please try again"
  //     );
  //     expect(loadingText).toBeInTheDocument();
  //   });

  //   expect(screen.queryByTestId("follower-name")).not.toBeInTheDocument();
  // });
});
