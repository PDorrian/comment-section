import React, { Component } from 'react';
import { Comment, CommentGroup } from 'semantic-ui-react';

class NewComment extends Component {
    render() {
        console.log(this.props.data);
        return (
            <CommentGroup>
                <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>{this.props.data.author}</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>{this.props.data.text}</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </CommentGroup>
        );
    }
}

export default NewComment;