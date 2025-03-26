import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";
import userEvent from "@testing-library/user-event";

const mockSetTodos = jest.fn();

describe("Unit Tests for AddInput component - Component Behavior", () => {
  it("Should render the input field", () => {
    render(<AddInput todos={[]} setTodos={{}} />);
    const text = "Add a new task here...";
    const inputElement = screen.getByPlaceholderText(text);
    expect(inputElement).toBeInTheDocument();
  });

  it("Should render the Add button", () => {
    render(<AddInput todos={[]} setTodos={{}} />);
    const btnElement = screen.getByRole("button", { name: "Add" });
    expect(btnElement).toBeInTheDocument();
  });

  it("Should update state on user input", () => {
    render(<AddInput todos={[]} setTodos={{}} />);
    const text = "Add a new task here...";
    const inputElement = screen.getByPlaceholderText(text);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
      target: { value: "Go Grocerry Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocerry Shopping");
  });

  it("Should reset input field after adding a todo", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const text = "Add a new task here...";
    const inputElement = screen.getByPlaceholderText(text);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
      target: { value: "Go Grocerry Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocerry Shopping");
    const buttonElement = screen.getByRole("button", { name: "Add" });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
  //   it("Should disable the Add button if input is empty", () => {
  //     render(<AddInput todos={[]} setTodos={mockSetTodos} />);
  //     const text = "Add a new task here...";
  //     const inputElement = screen.getByPlaceholderText(text);
  //     expect(inputElement).toBeInTheDocument();
  //     const buttonElement = screen.getByRole("button", { name: "Add" });
  //     expect(buttonElement).toBeDisabled();
  //     userEvent.type(inputElement, "Go Grocerry Shopping");
  //     expect(buttonElement).not.toBeDisabled();
  //     userEvent.click(buttonElement);
  //     userEvent.clear(inputElement);
  //     expect(buttonElement).toBeDisabled();
  //   });
});
