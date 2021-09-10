/*
### App #5
Create an `Image` component that renders an `<img />` element. 
The `src` for the `<img />` should be passed down as a prop from the parent component. 
You can use whatever image URL you would 
like to or you can get a placeholder from <a href="https://placeholder.com/">Click Me!</a>
*/

import React from "react";

const Image = ({color}) => {

  return(
    <img src={color} alt="colorful gif" />
  )
}


export default Image