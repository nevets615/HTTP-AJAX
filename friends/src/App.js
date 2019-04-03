import React from "react";
import axios from "axios";
import DisplayFriends from './DisplayFriends';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friend: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="FriendsList">
        <DisplayFriends friends={this.state.friends} />
      </div>
    );
  }
}

export default App;

