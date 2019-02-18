import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import HeaderUser from './headerUser.js';

class UserPage extends Component {

  render() {
    if (!this.props.user) { return <div>Loading...</div> }
    return (
      <React.Fragment>
        <HeaderUser/>
        <div className="jumbotron">
          <h2>Hello {this.props.user.username}</h2>
        </div>
      </React.Fragment>
    )
  }
}
export default withTracker((props) => {
  Meteor.subscribe('users')

  // console.log(props)

  return { user: Meteor.users.findOne({ _id: props.match.params.id }) }
})(UserPage);

