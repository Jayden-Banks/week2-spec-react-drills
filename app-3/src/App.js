import React from 'react';
import './App.css';
import FilterArray from './components/FilterArray';

/* //* ### App #3

 * Create an app where there is an array of data on state that is then shown on the DOM as a list. 
 * There should also be a way for the user to filter what's shown in the list. 
 * The array of data can be as simple as an array of strings. 
 * The list can be as simple as a list of `<h2>` elements.
*/




function App() {
  return (
    <>
      <h2 id="title">Click button to see Marvel or DC characters or add 1 yourself!</h2>
      <FilterArray />
    </>
  );
}

export default App;
