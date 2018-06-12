import React from 'react';

import Comment from './Comment.jsx';
import initialData from '../initial_data';
import { Scrollbars } from 'react-custom-scrollbars';
import Moment from 'react-moment';

var moment = require('moment');

class AllComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: initialData.comments,
            singleComment: initialData.comments.comment,
            value: '',
            date: moment().fromNow()
        }
        this.handleAddComment = this.handleAddComment.bind(this);
    }
    handleChangeInuput = (e) => {
        e.preventDefault();
        this.setState({ value: e.target.value });
    };
    handleAddComment = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            var newComment = {
                "date": this.state.date,
                "name": "Mike Ross",
                "comment": this.state.value,
            };

            (this.state.comments).push(newComment);
            this.setState({ value: '' });
        }
    };

    render() {
        var yesterday = moment(new Date()).add(-1, 'days');
        let comments = this.state.comments.map((el, index) => {
            return (
                <Comment key={index} name={el.name} date={index < 3 ? yesterday : this.props.date} comment={el.comment} />
            );
        });
        return (
            <section className="comments-container">
                <a href="#" className="hide-comments">Hide comments(353)</a>
                <Scrollbars style={{maxHeight: 900}}>
                    {comments}
                </Scrollbars>
                <section className="add-comment">
                    <input value={this.state.value} type="text" placeholder="Add a comment" onChange={this.handleChangeInuput} onKeyUp={this.handleAddComment}></input>
                </section>
            </section>
        );
    }
}
module.exports = AllComments;