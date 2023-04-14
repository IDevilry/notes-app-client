import Input from "./Input";
import { render, screen } from "@testing-library/react";

describe("Input props", () => {
  it("input with label", () => {
    render(
      <Input
        type="text"
        required
        placeholder="username"
        htmlForName="user"
        onChange={() => {}}
      >
        Username
      </Input>
    );
    expect(screen.getByText("Username")).toBeInTheDocument();
  });
  it("input without label", () => {
    render(
      <Input
        type="text"
        required
        placeholder="username"
        htmlForName="user"
        onChange={() => {}}
      />
    );
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
  });
});
