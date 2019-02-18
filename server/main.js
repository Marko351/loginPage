import { Meteor } from 'meteor/meteor';
import { UserData } from '../imports/collections/accounts';

Meteor.startup(() => {
  Meteor.publish('users', function () {
    return Meteor.users.find({ _id: this.userId })
  })

  Meteor.publish('userData', function(){
    return UserData.find({})
  })
});
