import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputUserName = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleInputPassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  submitCallBack = event => {
    const password = this.state.password;
    const username = this.state.username;
    event.preventDefault()
    if (password && username) {
      this.props.onSubmit({
        password,
        username
      })
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputUserName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleInputPassword} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.submitCallBack}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
