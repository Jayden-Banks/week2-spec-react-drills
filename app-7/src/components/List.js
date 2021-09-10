import React from "react"

const List = ({Todo, taskArr}) => {

  const display = taskArr.map((element, index) => { 
    return <Todo key={index} task={element} /> 
  });

  return(
    <>
      {display}
    </>
  )
}

export default List