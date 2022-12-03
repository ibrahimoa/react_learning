import React from "react";

import classes from "./User.module.css";

class User extends React.Component {
  componentWillUnmount() {
    // This function is executed when the component is going to be unamounted.
    console.log("User will unmount");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
