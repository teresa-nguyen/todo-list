import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [toDoList, setToDoList] = useState(data);
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === id ? {...task, complete: !task.complete } : {...task};
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  };
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id:toDoList.length +1, task:userInput, complete:false}];
    setToDoList(copy);
  }
  return (
    <div className='App'>
      <Header />
      <ToDoList list={toDoList} handleToggle={handleToggle} />
      <button onClick={() => {handleFilter()}}>delete</button>
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;
