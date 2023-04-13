import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "./validateForm";

describe("Validate form", () => {
  it("validate username", () => {
    expect(validateUsername("IDevilry")).toBeTruthy();
    expect(validateUsername("ddsh422fsasa")).toBeTruthy();
    expect(validateUsername("ID%%#")).toBeFalsy();
    expect(validateUsername("IDev")).toBeFalsy();
    expect(validateUsername("")).toBeFalsy();
  });
  it("validate email", () => {
    expect(validateEmail("IDevilry")).toBeFalsy();
    expect(validateEmail("IDevilry@id.aa")).toBeTruthy();
    expect(validateEmail("IDevilry@idaa")).toBeFalsy();
    expect(validateEmail("IDevilryid.aa")).toBeFalsy();
    expect(validateEmail("")).toBeFalsy();
  });
  it("validate password", () => {
    expect(validatePassword("IDevilry")).toBeTruthy();
    expect(validatePassword("IDev")).toBeFalsy();
  });
});
