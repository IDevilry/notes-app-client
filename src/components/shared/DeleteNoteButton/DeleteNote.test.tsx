import DeleteNoteButton from "./DeleteNote";

import { screen, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

describe("Delete note button test", () => {
  it("should correctly rendering", () => {
    render(
      <MockedProvider>
        <DeleteNoteButton id="1" />
      </MockedProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();

    expect(screen.getByText("X")).toBeInTheDocument();
  });

  it("should throw error if id is not passed", () => {
    expect(() =>
      render(
        <MockedProvider>
          <DeleteNoteButton id="" />
        </MockedProvider>
      )
    ).toThrowError("ID not found");
  });
});
