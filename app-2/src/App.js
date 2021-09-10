/* //* App #2
 * Create an app where there is an array of data on state that is then shown on the DOM as a list. 
 * The array of data can be as simple as an array of strings. 
 * The list can be as simple as a list of `<h2>` elements.
*/

import React from 'react';
import './App.css';
import ArrayData from './components/ArrayData';



function App() {
  return (
    <>
    <h2 id="display">Displaying array of data</h2>
    <ArrayData />
    </>
  );
}

export default App;
