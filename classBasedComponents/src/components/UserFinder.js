import { Component } from "react";

import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  // The way useContext() is implemented with this approach.
  static contextType = UsersContext;

  constructor() {
    super();
    // The way useState() is implemented with this approach.
    this.state = { filteredUsers: [], searchTerm: "" };
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  componentDidMount() {
    // Send http request -> this will run only when the component is initialized.
    this.setState({ filteredUsers: this.context.users });
  }

  // The way useEffect() is implemented with this approach.
  componentDidUpdate(_, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm.trim())
        ),
      });
    }
  }

  render() {
    return (
      <div className={classes.finder}>
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default UserFinder;
