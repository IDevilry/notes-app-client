import { screen, render } from "@testing-library/react";
import { Form, Input, Button } from "./../";

import userEvent from "@testing-library/user-event";

describe("Form works correctly", () => {
  const submitFn = jest.fn((e) => e.preventDefault());
  const onChangeFn = jest.fn((e) => e.preventDefault());
  it("submit with two inputs", async () => {
    render(
      <Form handleSubmit={submitFn}>
        <Input
          onChange={onChangeFn}
          placeholder="user"
          type="text"
          htmlForName="user"
        >
          Username
        </Input>
        <Input
          onChange={onChangeFn}
          placeholder="pass"
          type="text"
          htmlForName="pass"
        >
          Password
        </Input>
        <Button type="submit">Submit</Button>
      </Form>
    );
    await userEvent.type(screen.getByPlaceholderText("user"), "IDevilry");
    await userEvent.type(screen.getByPlaceholderText("pass"), "IDevilry");
    expect(onChangeFn).toHaveBeenCalledTimes(16);
    await userEvent.click(screen.getByRole("button"));
    expect(submitFn).toHaveBeenCalled();
  });
});
