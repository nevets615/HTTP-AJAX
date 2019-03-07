import { render } from 'react-dom';
import React, { Component } from 'react';
import axios from 'axios'
import Displayfriends from './components/Displayfriends';

class App extends React.Component {
    
    constructor() {
      super();
      this.state = {
       friends: [],
       error: ''
      };
    }

componentDidMount() {
    axios
    .get('http://localhost:3000/friends')
    .then(res => {
       console.log(res)
        this.setState({ friend: res.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {

  return (
<div className="FriendsList">
<Displayfriends friends={this.state.friends}/>

</div>
  );
  }
}

export default Displayfriends;
