import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Todo from './Todo';

const TodoListContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`

const TodoList = ({todos}) => {
  return(
    <TodoListContainer>
      <h1>Todo List</h1>
      {
        todos.map((todo, i) => (
          <Todo todo={todo} />
        ))}
    </TodoListContainer>
    
  )
};
const mapStateToProps = state => ({
  todos: state.todos
})
export default connect(mapStateToProps)(TodoList);