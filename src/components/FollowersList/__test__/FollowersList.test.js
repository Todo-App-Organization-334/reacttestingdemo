import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";
import { render, screen } from "@testing-library/react";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);
describe("Followers List Component Testing", () => {
  it("should render the followerslist component", async () => {
    render(<MockFollowersList />);

    // Wait for follower names to appear
    await waitFor(() =>
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument()
    );

    // Ensure profile images are rendered
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });
});
