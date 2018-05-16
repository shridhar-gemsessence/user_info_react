import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleEmailChange, handlePasswordChange, handleSubmit }) => (
  <div>
    <div>
      <label htmlFor="email"><b>Email:</b></label>
      <input
        required
        autoComplete="new-email"
        type="email"
        name="email"
        onChange={(e) => handleEmailChange(e)}
        placeholder="Enter Email"
      />
    </div>

    <div>
      <label htmlFor="password"><b>Password:</b></label>
      <input
        required
        autoComplete="nope"
        type="password"
        name="password"
        onChange={(e) => handlePasswordChange(e)}
        placeholder="Enter Password"
      />
    </div>

    <div>
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  </div>
);

LoginForm.propTypes = {
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default LoginForm;
