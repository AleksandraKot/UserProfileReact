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
        this.setState({ nbOfFollowers: ++this.state.nbOfFollowers })
    }
    handleLikesAdd = () => {
        this.setState({ nbOfLikes: ++this.state.nbOfLikes })
    }
    handleUrlShow = () => {
        prompt("Adres url profilu użytkownika Harvey Specter to: ", window.location.href);
    }

    render() {
        return (
            <section className="user-container">
                <div className="share-icon fa fa-share-square" onClick={this.handleUrlShow}></div>
                <div className="avatar-headline-wrapper">
                    <div className="avatar"></div>
                    <div className="headline">
                        <span className="name">{initialData.userProfile.name}
                            <span className="heart-icon far fa-heart" onClick={this.handleLikesAdd}></span>
                        </span>
                        <span className="country">{initialData.userProfile.address}</span>
                    </div>
                </div>
                <div className="social-button-wrapper">
                    <ul className="social-activity">
                        <li className="likes">{this.state.nbOfLikes}<span>Likes</span></li>
                        <div className="vertical-line"></div>
                        <li className="following">{initialData.userProfile.following}<span>Following</span></li>
                        <div className="vertical-line"></div>
                        <li className="followers">{this.state.nbOfFollowers}<span>Followers</span></li>
                    </ul>
                    <button className="button-follow" onClick={this.handleFollowersAdd}>follow</button>
                </div>
            </section>
        )
    }
}

module.exports = UserInfo;