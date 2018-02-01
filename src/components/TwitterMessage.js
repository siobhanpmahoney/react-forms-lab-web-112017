import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleTweet = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleTweet}
        />
      <i>   {this.props.maxChars - this.state.value.length}</i>
      </div>
    );
  }
}

export default TwitterMessage;
