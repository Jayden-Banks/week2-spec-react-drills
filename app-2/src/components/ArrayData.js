import React, { Component } from "react";

/* //* App #2
 * Create an app where there is an array of data on state that is then shown on the DOM as a list.
 * The array of data can be as simple as an array of strings.
 * The list can be as simple as a list of `<h2>` elements.
 */

class ArrayData extends Component {
  constructor() {
    super();

    this.state = {
      arrData: ["white", "green", "blue", "black", "pink", "yellow", "red"],
    };
  }

  //? Is it bad practice to put this here?
  displayList = () => {
    const list = this.state.arrData.map((ele, index) => {
      return <h2 className="list-items" key={index}>{ele}</h2>; // Give keys like this when iterating the index comes from the optional 2 param of map
    })
    return list
  }



  render() {
    const list = this.displayList()
    return (
    <div id="div-list">
      <h2 id="title">List</h2>  
        {list}
    </div>
    )
  }
}

export default ArrayData;
