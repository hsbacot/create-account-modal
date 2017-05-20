import React from "react";
import { shallow } from "enzyme";
import CreateAccountForm from "../../src/components/CreateAccountForm";

const noop = () => null;

const props = {
  email: "test@test.com",
  password: "Pa$$word!",
  handleEmail: noop,
  handlePassword: noop,
  handleSubmit: noop,
  displayEmailErrors: noop,
  formErrors: ["error one", "error two"]
};

describe("<CreateAccountForm />", () => {
  it("should render", () => {
    const component = shallow(<CreateAccountForm {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should render with no errors", () => {
    const component = shallow(<CreateAccountForm {...props} formErrors={[]} />);
    expect(component).toMatchSnapshot();
  });
});
