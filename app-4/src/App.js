import React from 'react';
import './App.css';
import Login from './components/Login';
/* ### App #4
  * Create a `Login` component that has two text inputs, one for a `username` and one for a `password`, and a button to login the user. 
  * When the login button is clicked, an alert should be showed to the user that displays what the user typed in for the `username` and `password`.
*/



function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
