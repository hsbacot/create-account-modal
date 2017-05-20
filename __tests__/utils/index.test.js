import { validateEmail, validatePassword } from "../../src/utils";

describe("validateEmail()", () => {
  it("should not return any errors on a valid email", () => {
    const validatedEmail = validateEmail("test@test.com");
    expect(validatedEmail.valid).toBe(true);
  });

  it("should not allow an empty string as an email", () => {
    const validatedEmail = validateEmail("");
    expect(validatedEmail.valid).toBe(false);
    expect(validatedEmail.errors.length).toBe(2);
  });

  it("should require an @ symbol", () => {
    const validatedEmail = validateEmail("testin.test.co");
    expect(validatedEmail.valid).toBe(false);
    expect(validatedEmail.errors.length).toBe(2);
  });

  it("should require a valid domain", () => {
    const validatedEmail = validateEmail("testin@test.");
    expect(validatedEmail.valid).toBe(false);
    expect(validatedEmail.errors.length).toBe(1);
  });
});

describe("validatePassword()", () => {
  it("should not return any errors on a valid password", () => {
    const validatedPassword = validatePassword("Pa$$word!");
    expect(validatedPassword.valid).toBe(true);
  });

  it("should not accept a password with fewer than 8 characters", () => {
    const validatedPassword = validatePassword("Passwo");
    expect(validatedPassword.valid).toBe(false);
    expect(validatedPassword.errors.length).toBe(2);
  });

  it("should not accept a password without a symbol", () => {
    const validatedPassword = validatePassword("Password");
    expect(validatedPassword.valid).toBe(false);
    expect(validatedPassword.errors.length).toBe(1);
  });
});
