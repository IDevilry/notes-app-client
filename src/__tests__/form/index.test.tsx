import { screen, render } from "@testing-library/react";
import { Form, Input, Button } from "../../components/shared";


describe("form renders correctly", () => {
  it("input with label", () => {
    render(
      <Form handleSubmit={() => {}}>
        <Input
          type="text"
          required
          placeholder="username"
          name="user"
          onChange={() => {}}
        >
          Username
        </Input>
      </Form>
    );
    expect(screen.getByText("Username")).toBeInTheDocument();
  });
  it("input without label", () => {
    render(
      <Form handleSubmit={() => {}}>
        <Input
          type="text"
          required
          placeholder="username"
          name="user"
          onChange={() => {}}
        />
      </Form>
    );
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
  });
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
});
