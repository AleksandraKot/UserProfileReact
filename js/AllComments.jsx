import React from 'react';

import Comment from './Comment.jsx';
import initialData from '../initial_data';


class AllComments extends React.Component {
 render() {
     let comments = initialData.comments.map((el) => {
        return (
           <Comment />
        )
     });
     return (
        <section className="comments-container">
            <a href="#" className="hide-comments">Hide comments(353)</a>
            {comments}
            <input className="w3-input w3-animate-input" type="text" value="Add a comment"></input>
        </section>
     )
 }
}
module.exports = AllComments;