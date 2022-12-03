import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { inError: false };
  }
  componentDidCatch(err) {
    // This function is triggered when a child component raises an Error.
    console.log(err);
    this.setState({ inError: true });
  }

  render() {
    if (this.state.inError) {
      return <p>Something went wrong</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
