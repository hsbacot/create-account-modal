import React from "react";
import CreateAccountForm from "./CreateAccountForm";
import Modal from "./Modal";
import { validatePassword, validateEmail } from "../utils";

const initialState = {
  email: "",
  password: "",
  showCreateAccount: false,
  showEmailErrors: false,
  passwordValidations: validatePassword(""),
  emailValidations: {
    valid: false,
    errors: []
  }
};

class App extends React.Component {
  state = { ...initialState };

  showModal = () => {
    this.setState({ showCreateAccount: true });
  };

  hideModal = () => {
    this.setState({ showCreateAccount: false });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value,
      passwordValidations: validatePassword(e.target.value)
    });
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value,
      emailValidations: validateEmail(e.target.value)
    });
  };

  handleSubmit = () => {
    this.setState({ ...initialState, userCreated: true });
  };

  displayEmailErrors = () => {
    this.setState({
      showEmailErrors: true
    });
  };

  render() {
    const {
      showCreateAccount,
      emailValidations,
      showEmailErrors,
      passwordValidations,
      password,
      email,
      userCreated
    } = this.state;

    // only show email after passwor
    // password at 8 characters
    const formErrors = [
      ...(showEmailErrors ? emailValidations.errors : []),
      ...passwordValidations.errors
    ];

    return (
      <div>
        {userCreated
          ? <p>Successfully created user</p>
          : <button className="btn btn-default" onClick={this.showModal}>
              Create Account
            </button>}
        {showCreateAccount &&
          <Modal>
            <h2>Create Account</h2>
            <CreateAccountForm
              email={email}
              password={password}
              closeModal={this.hideModal}
              formErrors={formErrors}
              handleEmail={this.handleEmail}
              handlePassword={this.handlePassword}
              handleSubmit={this.handleSubmit}
              displayEmailErrors={this.displayEmailErrors}
            />
            <button
              className="btn btn-default close-modal"
              onClick={this.hideModal}
            >
              Close
            </button>
          </Modal>}
      </div>
    );
  }
}

export default App;
