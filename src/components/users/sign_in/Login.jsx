import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Please Login</h3>
        <hr />
        <LoginForm />
      </div>
    );
  }
}

export default Login;