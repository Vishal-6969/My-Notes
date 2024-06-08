import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      // Find the index where the new note should be inserted based on priority
      const insertIndex = prevNotes.findIndex((note) => note.priority > newNote.priority);
      // If insertIndex is -1, it means the new note has the highest priority
      const updatedNotes = [...prevNotes];
      if (insertIndex === -1) {
        updatedNotes.push(newNote);
      } else {
        updatedNotes.splice(insertIndex, 0, newNote);
      }
      return updatedNotes;
    });
  }
  

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function updateNote(id, newTitle, newContent) {
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, index) => {
        if (index === id) {
          return {
            ...noteItem,
            title: newTitle,
            content: newContent,
          };
        }
        return noteItem;
      });
    });
  }

  const noteCount = notes.length; // Calculate the count of notes

  const onClickBell = () => {
    // Show the notification pop-up with the task count
    alert(`${noteCount} task remaining.`);
  };

  return (
    <div>
      <Header noteCount={noteCount} onClickBell={onClickBell} /> {/* Pass onClickBell as a prop */}
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            priority={noteItem.priority}
            color={noteItem.color} // Pass the color prop
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
