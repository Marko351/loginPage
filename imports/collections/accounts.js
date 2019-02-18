import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'userData.insert': function (name) {
    return UserData.insert({
      userName: name,
    })
  },
  'userData.name': function (id, name) {
    return UserData.update({ _id: id }, { $set: { userName: name } })
  }
})

export const UserData = new Mongo.Collection('userData');