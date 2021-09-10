import React, { Component } from 'react';
import './App.css';

import { Link } from "react-router-dom";
import router from "./router"

/*
Create an app that has three routes (using `react-router-dom`):

- Component name: `Home`, Component route: `'/'`
- Component name: `Signup`, Component route: `'/signup'`
- Component name: `details`, Component route: `'/details'`

Each of these components only need a very basic template:

```js
<div>
  <h1>This is the Home/Signup/Details page.</h1>
</div>
```

The `App` component should render a `<nav>` element that provides links to all three routes. The `router` should be rendered underneath the `nav` element.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/details">Details</Link>
          </ul>
        </nav>
        
        <br />

        {router}
      </div>
    )
  }
}

export default App;





// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

