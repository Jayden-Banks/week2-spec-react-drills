import React, { useState } from 'react'


const FilterArray = () => {

  const [marvelArr, setMarvelArr] = useState(['daredevil', 'deadpool', 'ironman', 'spiderman']),
  [dcArr, setDcArr] = useState(['superman', 'batman', 'joker', 'bane']),
  [chars, setChars] = useState(''),
  [marvelInput, setMarvelInput] = useState(''),
  [dcInput, setDcInput] = useState(''),
  
  getChars = arr => {
    const chars = arr.map((ele, index) => {
      return <h3 className="characters" key={index}>{ele}</h3>
    })
    arr === marvelArr ? chars.unshift(<h3 key="marvel" id="chars-title">Marvel Characters</h3>) : chars.unshift(<h3 key="dc" id="chars-title">DC Characters</h3>)
    setChars(chars)
  },

  updateMarvel = input => setMarvelInput(input),
  updateDc = input => setDcInput(input),




  setMarvel = newChar => {
    const newArr = [...marvelArr]
    newArr.push(newChar)
    setMarvelArr(newArr);
    document.querySelector('#marvel-input').value = ''
  },
  setDC = newChar => {
    const newArr = [...dcArr]
    newArr.push(newChar)
    setDcArr(newArr);
    document.querySelector('#dc-input').value = ''
  }


  

  return (
    <div id="div-input">
      <span id="span-characters">{chars}</span>

    <div id="div-get-chars">
      <button className="faction-buttons" id="button-marvel-chars" onClick={() => getChars(marvelArr)}>Get Marvel</button>
      <button className="faction-buttons" id="button-dc-chars" onClick={() => getChars(dcArr)}>Get DC</button>
    </div>

      <div id="div-char-inputs">
        <div className="div-input-label">
          <label htmlFor="marvel-input">Add a Marvel Character</label>
          <input type="text" className="input-char" id="marvel-input" placeholder="Enter Marvel" onChange={(e) => updateMarvel(e.target.value)}/>
          <button id="button-add-marvel" onClick={() => setMarvel(marvelInput)}>Add Marvel</button>
        </div>
        <div className="div-input-label">
          <label htmlFor="dc-input">Add a DC Character</label>
          <input type="text" className="input-char" id="dc-input" placeholder="Enter DC" onChange={(e) => updateDc(e.target.value)}/>
          <button id="button-add-dc" onClick={() => setDC(dcInput)}>Add DC</button>
        </div>
      </div>
    </div>
  
  )
}










export default FilterArray