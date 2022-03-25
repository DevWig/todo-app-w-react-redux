import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';

import { deleteTodo } from '../redux/action/addTodo.action';
import { editTodo } from '../redux/action/addTodo.action';


const TodoItemContainer = styled.div`
  width: 35%;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 5px 15px;
  margin-bottom: 5px;
  cursor: pointer;
`

const DeleteButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #15e6cdff;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 0 10px;
  &:hover {
    border: none;
    background: radial-gradient(var(--color, turquoise), #9198e5);
  }
`


const Todo = ({todo, idx, deleteTodo, editTodo}) => {
  return(
    <TodoItemContainer>
      <p onClick={() => editTodo(idx)}>{todo}</p>
      <DeleteButton onClick={() => deleteTodo(idx)}><FaTrashAlt /></DeleteButton>
    </TodoItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: key => dispatch(deleteTodo(key)),
  editTodo: key => dispatch(editTodo(key)),
});
export default connect(null, mapDispatchToProps)(Todo);