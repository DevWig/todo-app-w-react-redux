import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTodo, addText, editAddTodo } from '../redux/action/addTodo.action';

const TodoInputField = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1.1rem;
  margin-bottom: 50px;
  width: 35%;
`


class InputField extends React.Component {

  state = {
    todo:'',
  };

  handleChange = e => this.props.addText(e.target.value);
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.selected || this.props.selected === 0)
      this.props.editAddTodo({value: this.props.text, selected: this.props.selected})
    else
      this.props.addTodo(this.props.text);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TodoInputField
          type='text'
          name='todo'
          value={this.props.text}
          placeholder='Enter a To-Do'
          onChange={this.handleChange} />
      </form>
    );
  }
};

const mapStateToProps = state => ({
  text: state.text,
  selected: state.selected
})

const mapDispatchToProps = dispatch => ({
  addTodo : todo => dispatch(addTodo(todo)),
  addText: value => dispatch(addText(value)),
  editAddTodo: obj => dispatch(editAddTodo(obj)),
})
export default connect(mapStateToProps, mapDispatchToProps)(InputField);