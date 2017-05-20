import React from "react";
import { shallow } from "enzyme";
import Modal from "../../src/components/Modal";

describe("<Modal />", () => {
  it("should render", () => {
    const component = shallow(<Modal />);
    expect(component).toMatchSnapshot();
  });

  it("should render children", () => {
    const component = shallow(
      <Modal>
        <h1>children</h1>
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });
});
