import React from "react";
import PropTypes from "prop-types";

export const CreateAccountForm = props => {
  const {
    email,
    password,
    handleEmail,
    handlePassword,
    handleSubmit,
    displayEmailErrors,
    formErrors
  } = props;
  const errors = formErrors.map(error => <li key={error}>{error}</li>);
  const submitEnabled = formErrors.length;
  const submitClasses = submitEnabled ? "" : "btn-default";
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-section">
        <label>Email Address</label>
        <input
          name="email"
          type="text"
          value={email}
          onBlur={displayEmailErrors}
          onChange={handleEmail}
        />
      </div>
      <div className="form-section">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      {errors && <ul className="form-errors">{errors}</ul>}
      <input
        type="submit"
        value="Create Account"
        disabled={submitEnabled}
        className={`btn ${submitClasses}`}
      />
    </form>
  );
};

CreateAccountForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  displayEmailErrors: PropTypes.func.isRequired,
  formErrors: PropTypes.arrayOf(PropTypes.string)
};

export default CreateAccountForm;
