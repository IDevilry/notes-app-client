import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

const clickFn = jest.fn(e => e.preventDefault());

describe("Button props", () => {
  it("button works correctly", () => {
    render(<Button type="button">Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeEnabled();
  });
  it("button props works", () => {
    render(
      <Button type="button" disabled>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("button onClick func calls", async () => {
    render(<Button type="button" handleClick={clickFn}>Click me</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(clickFn).toHaveBeenCalled();
  });
});
