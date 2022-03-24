import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTodo } from '../redux/action/addTodo.action';

const TodoInputField = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1.1rem;
  margin-bottom: 50px;
`


class InputField extends React.Component {

  state = {
    todo:'',
  };

  handleChange = e => this.setState({ todo:e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TodoInputField type='text' name='todo' placeholder='Enter a To-Do' onChange={this.handleChange} />
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo : todo => dispatch(addTodo(todo))
})
export default connect(null, mapDispatchToProps)(InputField);