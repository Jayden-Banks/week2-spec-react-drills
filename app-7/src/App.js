import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import List from './components/List';
import NewTask from './components/NewTask';

/*
Create an app similiar to app #6, 
except this time add a new third component called `NewTask`. 
`NewTask` should be responsible for adding a new task to a `
task array` on the `App` component. Also add a new fourth component called `List`. 
`List` should be responsible for displaying the tasks inside of a `task array` on the `App` 
component in a list-like fashion.
*/

function App() {
  const [taskArr, setTaskArr] = useState([])
  const [taskCurr, setTaskCurr] = useState('')
  const onChangeHandle = input => setTaskCurr(input)

  //? Is there a cleaner way to send these props/states in?
  return (
    <div className="App">
      <input type="text" id="input-task" onChange={(e) => onChangeHandle(e.target.value)}/>
      <button id="button-task" onClick={() => NewTask({taskArr, setTaskArr, taskCurr})}>Add Task</button> 
      <List Todo={Todo} taskArr={taskArr} />
    </div>
  );
}

export default App;
