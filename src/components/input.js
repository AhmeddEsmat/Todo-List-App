import "./input.css";
import { useState, useEffect, useRef } from "react";

const Input = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Please enter a task");
      return;
    }
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      value: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="input-text update-input"
            type="text"
            placeholder="Enter a task"
            value={input}
            onChange={handleChange}
            ref={focus}
          />
          <button className="btn update-button" type="submit" onClick={handleSubmit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            className="input-text add-input"
            type="text"
            placeholder="Enter a task"
            value={input}
            onChange={handleChange}
            ref={focus}
          />
          <button className="btn add-button" type="submit" onClick={handleSubmit}>
            Add
          </button>
        </>
      )}
    </form>
  );
};

export default Input;
