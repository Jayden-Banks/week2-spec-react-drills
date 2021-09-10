import React, { useState } from "react";

const InputText = () => {
  const [inputText, setInputText] = useState(""),
    OnInput = (input) => setInputText(input);

  return (
    <div className="textArea">
      <input
        type="text"
        className="display"
        placeholder="Enter text here"
        onChange={(e) => OnInput(e.target.value)}
      />
      <span id="result">{inputText}</span>
    </div>
  );
};

export default InputText;
