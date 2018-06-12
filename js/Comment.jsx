import React from 'react';
import Moment from 'react-moment';


class Comment extends React.Component {
    render() {

        return (
            <section className="comment">
                <Moment element="span" fromNow ago className="comment-date">{this.props.date}</Moment>
                <div className="comment-avatar"></div>
                <div className="comment-body">
                    <span className="comment-author">{this.props.name}</span>
                    <p className="comment-text">{this.props.comment}</p>
                </div>
            </section>
        )
    }
}

module.exports = Comment;