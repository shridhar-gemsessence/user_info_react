import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import LoginForm from './LoginForm';
import { loginUser } from '../../../actions/user/operations/UserOperations';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    console.log(this.state);
    this.props.actions.loginUser(this.state);
  }

  render() {
    return (
      <div className="container">
        <h3>Please Login</h3>
        <hr />
        <LoginForm
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

Login.propTypes = {
  actions: PropTypes.shape({
    loginUser: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators({
      loginUser,
    }, dispatch),
  }
);

export default connect(null, mapDispatchToProps)(Login);
