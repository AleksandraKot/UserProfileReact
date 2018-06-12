import React from 'react';


class Comment extends React.Component {
    render() {
        return (
            <section className="comment">
                <span className="comment-date">1d</span>
                <div className="comment-avatar"></div>
                <div className="comment-body">
                    {/* <span className="comment-author">{initialData.comments[0].name}</span> */}
                    <span className="comment-author">{this.props.name}</span>
                    {/* <p className="comment-text">Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellestesque dui, non felis. Maecenas malesuada ulticies. Curabitur et ligula.</p> */}
                    <p className="comment-text">{this.props.comment}</p>
                </div>
            </section>
        )
    }
}

module.exports = Comment;