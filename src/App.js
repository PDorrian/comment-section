import React, { Component } from 'react';
import './App.css';
import { Form, Segment } from 'semantic-ui-react';
import NewComment from './components/comment.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: ''
    }

    this.comments = [
      { id: 1, author: 'Frank', text: 'This is a comement' },
      { id: 2, author: 'James', text: 'this is another comment' }
    ];

    this.valueChange = this.valueChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  valueChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submit() {
    console.log(this.state.username);
    console.log(this.state.comment);

    if (this.state.comment !== '') {
      this.comments.push({ id: this.comments.length + 1, author: this.state.username, text: this.state.comment });
      this.forceUpdate();
      this.setState({
        comment: ''
      });
    } else {
      console.log('Comment field is empty.');
    }
  }

  render() {
    return (
      <div className='App'>
        <Segment className='outer-box'>
          <Form>
            <Form.Input fluid placeholder='Username' name='username' onChange={this.valueChange} />
            <Form.TextArea fluid placeholder='Write a comment...' name='comment' onChange={this.valueChange} value={this.state.comment} />
            <Form.Button onClick={this.submit}>Submit</Form.Button>
          </Form>

          {this.comments.map((item, i) => <NewComment key={i} data={item} />)}
        </Segment>
      </div>
    );
  }
}

export default App;
