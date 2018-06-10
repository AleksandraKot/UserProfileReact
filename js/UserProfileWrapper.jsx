import React from 'react';
import initialData from '../initial_data';
import AllComments from './AllComments.jsx';
import UserInfo from './UserInfo.jsx';

class UserProfileWrapper extends React.Component {
  render() {
    return (
      <section className="profile-container">
        <div className="profile-container__inner"></div>
        <UserInfo />
        <AllComments />
      </section>
    )
  }

}

module.exports = UserProfileWrapper;
