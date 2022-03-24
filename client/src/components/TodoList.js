import React from 'react';
import { connect } from 'react-redux';


const TodoList = ({todos}) => {
  return(
    <div>
      <h1>Todo List</h1>
      {
        todos.map((todo, i) => <p>{todo}</p>)
      }
    </div>
    
  )
};
const mapStateToProps = state => ({
  todos: state.todos
})
export default connect(mapStateToProps)(TodoList);