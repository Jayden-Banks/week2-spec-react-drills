import React from 'react';
import './App.css';
import Image from './components/Image';
import color from './color-stream.gif';

/*
### App #5
Create an `Image` component that renders an `<img />` element. 
The `src` for the `<img />` should be passed down as a prop from the parent component. 
You can use whatever image URL you would 
like to or you can get a placeholder from <a href="https://placeholder.com/">Click Me!</a>
*/





function App() {
  return (
    <div className="App">
      <Image color={color}/>
    </div>
  );
}

export default App;
