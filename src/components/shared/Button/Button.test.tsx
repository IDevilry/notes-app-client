import Button from "./Button";
import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";

const clickFn = jest.fn((e) => e.preventDefault());

describe("Button props", () => {
  it("should works correctly", () => {
    render(<Button type="button">Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeEnabled();
  });
  it("should props works", () => {
    render(
      <Button type="button" disabled>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("should onClick func calls", async () => {
    render(
      <Button type="button" handleClick={clickFn}>
        Click me
      </Button>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(clickFn).toHaveBeenCalled();
  });
});
