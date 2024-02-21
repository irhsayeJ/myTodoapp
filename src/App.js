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

  return (
    <div className="app-container">
      <Header />
      <TextArea onAdd={addNote} />
      <div className="div-notes">
        {notes.map((noteitem, index) => (
          <Note key={index} title={noteitem.title} content={noteitem.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
