import React from 'react';

import initialData from '../initial_data';

class UserInfo extends React.Component {
    render() {
      return (
        <section className="user-container">
        <div className="share-icon"></div>
        <div className="avatar"></div>
        <div className="headline">
          <span className="name">{initialData.userProfile.name}</span>
          <span className="country">{initialData.userProfile.address}</span>
          <div className="heart-icon"></div>
        </div>
        <ul className="social-activity">
          <li className="likes">{initialData.userProfile.likes}<span>Likes</span></li>
          <div className="vertical-line"></div>
          <li className="following">{initialData.userProfile.followers}<span>Following</span></li>
          <div className="vertical-line"></div>
          <li className="followers">{initialData.userProfile.following}<span>Followers</span></li>
        </ul>
        <button className="button-follow">follow</button>
      </section>
      )
    }
}

module.exports = UserInfo;