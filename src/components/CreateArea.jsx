import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "red" // Set default color here
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    // Check if both title and content are not empty
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
        color: "red" // Reset color after adding note
      });
      alert("Note added successfully!");
    } else {
      alert("Nothing to add. Please enter a title and content for the note.");
    }
    event.preventDefault(); // Prevent default form submission
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <select
          name="color"
          onChange={handleChange}
          value={note.color}
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <button type="submit">
          <box-icon name="plus" rotate="90" color="#ffffff"></box-icon>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
