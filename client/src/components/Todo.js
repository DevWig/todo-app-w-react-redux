import React from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';


const TodoItemContainer = styled.div`
  width: 35%;
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center
  font-size: 1.1rem;
  font-weight: 600;
  padding: 5px 15px;
  margin-bottom: 5px;

`

const DeleteButton = styled.button`

`


const Todo = ({todo}) => {
  return(
    <TodoItemContainer>
      <p>{todo}</p>
      <DeleteButton><FaTrashAlt /></DeleteButton>
    </TodoItemContainer>
  )
}

export default Todo;