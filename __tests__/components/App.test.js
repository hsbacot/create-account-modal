import React from "react";
import { shallow } from "enzyme";
import App from "../../src/components/App";

const validEmailInput = {
  target: {
    value: "test@test.com"
  }
};

const validPasswordInput = {
  target: {
    value: "Pa$$word!"
  }
};

describe("<App />", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it("should show and hide the modal", () => {
    let component = shallow(<App />).instance();
    component.showModal();
    expect(component).toMatchSnapshot();
    component.hideModal();
    expect(component).toMatchSnapshot();
  });

  it("should handle email input", () => {
    let component = shallow(<App />).instance();
    component.handleEmail(validEmailInput);
    expect(component).toMatchSnapshot();
  });

  it("should handle password input", () => {
    let component = shallow(<App />).instance();
    component.handlePassword(validPasswordInput);
    expect(component).toMatchSnapshot();
  });

  it("should know when to display email errors", () => {
    let component = shallow(<App />).instance();
    component.displayEmailErrors();
    expect(component).toMatchSnapshot();
  });

  it("should handle the form submit", () => {
    let component = shallow(<App />).instance();
    component.handleSubmit();
    expect(component).toMatchSnapshot();
  });
});
