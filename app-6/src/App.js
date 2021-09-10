import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

/*
Create an app that displays a to-do list. 
You will need two components, the `App` component and a `Todo` component.
The `App` component should be responsible for getting new tasks and storing the list of tasks. 
The `Todo` component should be responsible for displaying the individual tasks from the `App` component. 
The `App` component should create a list of 'Todo' components passing down a `task` into the `Todo` component 
as a prop and display the list.
*/






function App() {
  const [taskArr, setTaskArr] = useState([])
  const [taskCurr, setTaskCurr] = useState('')

  const onChangeHandle = input => setTaskCurr(input)

  const onClickHandle = () => {
    const newArr = [...taskArr]
    newArr.push(taskCurr)
    setTaskArr(newArr)
  }

  const display = taskArr.map((element, index) => { //* You can put index as a second param that lets you access position
    return <Todo key={index} task={element} /> 
  });
  


  return (
    <div className="App">
      <input type="text" id="input-task" onChange={(e) => onChangeHandle(e.target.value)}/>
      <button id="button-task" onClick={() => onClickHandle()}>Add Task</button>
      {display}
    </div>
  );
}

export default App;
