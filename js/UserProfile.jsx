import React from 'react';
import initialData from '../initial_data';

class UserProfile extends React.Component {
  render() {
    return (
      <section className="profile-container">
        <div className="profile-container__inner"></div>
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
        <section className="comments-container">
          <a href="#" className="hide-comments">Hide comments(353)</a>
          <section className="comment">
            <span className="comment-date">1d</span>
            <div className="comment-avatar"></div>
            <div className="comment-body">
              <span className="comment-author">Mike Ross</span>
              <p className="comment-text">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellestesque dui, non felis. Maecenas malesuada ulticies. Curabitur et ligula.</p>
            </div>
          </section>
          <section className="comment">
            <span className="comment-date">1d</span>
            <div className="comment-avatar"></div>
            <div className="comment-body">
              <span className="comment-author">Mike Ross</span>
              <p className="comment-text">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellestesque dui, non felis. Maecenas malesuada ulticies. Curabitur et ligula.</p>
            </div>
          </section>
          <input className="w3-input w3-animate-input" type="text" value="Add a comment"></input>
        </section>
      </section>
    )
  }

}

module.exports = UserProfile;
