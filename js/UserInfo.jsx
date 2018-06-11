import React from 'react';

import initialData from '../initial_data';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nbOfFollowers: parseInt(initialData.userProfile.followers),
            nbOfLikes: parseInt(initialData.userProfile.likes)
        }
    }
    handleFollowersAdd = () => {
        this.setState({nbOfFollowers: ++this.state.nbOfFollowers})
    }
    handleLikesAdd = () => {
        this.setState({nbOfLikes: ++this.state.nbOfLikes})
    }

    render() {
        return (
            <section className="user-container">
                <div className="share-icon"></div>
                <div className="avatar"></div>
                <div className="headline">
                    <span className="name">{initialData.userProfile.name}</span>
                    <span className="country">{initialData.userProfile.address}</span>
                    <div className="heart-icon" onClick={this.handleLikesAdd}></div>
                </div>
                <ul className="social-activity">
                    <li className="likes">{this.state.nbOfLikes}<span>Likes</span></li>
                    <div className="vertical-line"></div>
                    <li className="following">{this.state.nbOfFollowers}<span>Following</span></li>
                    <div className="vertical-line"></div>
                    <li className="followers">{initialData.userProfile.following}<span>Followers</span></li>
                </ul>
                <button className="button-follow" onClick={this.handleFollowersAdd}>follow</button>
            </section>
        )
    }
}

module.exports = UserInfo;