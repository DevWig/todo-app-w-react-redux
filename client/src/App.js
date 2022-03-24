import React from 'react';


import InputField from './components/InputField';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Honey Do</h1>
      <InputField />
      <TodoList />
    </div>
  );
}

export default App;
