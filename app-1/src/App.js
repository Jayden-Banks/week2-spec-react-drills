// ### App #1

// Create a basic react app where you type in a text box and it shows up as text on the DOM.
// * Completed (I also tested manipulating the public mainfest with a js logo)

import React from 'react';
import InputText from './components/InputText';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <InputText />
  );
}

export default App;
