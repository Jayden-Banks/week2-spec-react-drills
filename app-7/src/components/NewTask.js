import React from "react"

const NewTask = ({taskArr, setTaskArr, taskCurr}) => {
  const newArr = [...taskArr]
  newArr.push(taskCurr)
  setTaskArr(newArr)
}

export default NewTask