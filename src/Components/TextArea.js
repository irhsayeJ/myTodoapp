import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function TextArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);
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
  function expand() {
    setExpanded(true);
  }
  return (
    <div className="textArea">
      <form className="textArea-form">
        {isExpanded && (
          <input
            name="title"
            className="form-input"
            placeholder="Enter your title"
            onChange={handleChange}
            value={note.title}
          ></input>
        )}
        <textarea
          name="content"
          className="form-textArea"
          placeholder="start typing..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={note.content}
          onClick={expand}
        ></textarea>
        <button onClick={handleSubmit} className="form-button">
          <AddCircleIcon />
        </button>
      </form>
    </div>
  );
}
export default TextArea;
