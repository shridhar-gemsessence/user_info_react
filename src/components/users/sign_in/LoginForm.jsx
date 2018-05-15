import React from 'react';

const LoginForm = () => (
  <div>
    <div>
      <label htmlFor="email"><b>Email:</b></label>
      <input type="email" placeholder="Enter Email" name="email" required />
    </div>

    <div>
      <label htmlFor="password"><b>Password:</b></label>
      <input type="password" placeholder="Enter Password" name="password" required />
    </div>

    <div>
      <input type="button" value="Submit" />
    </div>
  </div>
);

export default LoginForm;