import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function TextArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevvalue) => {
      return {
        ...prevvalue,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }
  return (
    <div className="textArea">
      <form className="textArea-form">
        <input
          name="title"
          className="form-input"
          placeholder="Enter your title"
          onChange={handleChange}
          value={note.title}
        ></input>
        <textarea
          name="content"
          className="form-textArea"
          placeholder="start typing..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        ></textarea>
        <button onClick={handleSubmit} className="form-button">
          <AddCircleIcon />
        </button>
      </form>
    </div>
  );
}
export default TextArea;
