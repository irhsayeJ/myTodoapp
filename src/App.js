import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TextArea from "./Components/TextArea";
import Note from "./Components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }
  function deleteNote(id) {
    setNotes(() => {
      return notes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <TextArea onAdd={addNote} />
      <div className="div-notes">
        {notes.map((noteitem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteitem.title}
              content={noteitem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
