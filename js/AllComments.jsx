import React from 'react';

import Comment from './Comment.jsx';
import initialData from '../initial_data';
import { Scrollbars } from 'react-custom-scrollbars';


class AllComments extends React.Component {
    render() {
        let comments = initialData.comments.map((el, index) => {
            return (
                <Comment key={index} name={el.name} comment={el.comment} />
            )
        });
        return (
            <section className="comments-container">
                <a href="#" className="hide-comments">Hide comments(353)</a>
                <Scrollbars autoHeight>
                    {comments}
                </Scrollbars>
                <section className="add-comment">
               <input className="w3-input w3-animate-input" type="text" value="Add a comment"></input>
           </section>
            </section>

        )
    }
}
module.exports = AllComments;