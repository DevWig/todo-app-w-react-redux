import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/action/addTodo.action';

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
        <input type='text' name='todo' placeholder='Enter a To-Do' onChange={this.handleChange} />
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo : todo => dispatch(addTodo(todo))
})
export default connect(null, mapDispatchToProps)(InputField);