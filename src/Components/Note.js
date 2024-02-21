import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
function Note(props) {
  const [isDone, setIsDone] = useState(false);
  function handleDelete() {
    props.onDelete(props.id);
  }
  function done() {
    setIsDone(isDone ? false : true);
  }
  return (
    <div
      style={{ textDecoration: isDone ? "line-through" : "none" }}
      className="note"
    >
      <p className="note-p-id">{props.id}.</p>
      <h1 className="note-h1">{props.title}</h1>
      <p className="note-p">{props.content}</p>

      <button className="deleteButton" onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <button onClick={done} className="completed">
        <CheckCircleRoundedIcon />
      </button>
    </div>
  );
}
export default Note;
