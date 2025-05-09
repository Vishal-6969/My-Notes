import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // ✅ Chatwoot Integration (Self-hosted)
  useEffect(() => {
    const BASE_URL = "https://my-notes-7hk93d70y-vishals-projects-fd3b947e.vercel.app/"; // 🔁 Replace 'CHANGE' with your actual Heroku app name
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;

    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: "RSr4qmZfmuUd1BfSKuaSxToS", // 🔁 Replace if different
          baseUrl: BASE_URL,
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  // ... your other code (addNote, deleteNote, updateNote, etc.)

  return (
    <div>
      <Header noteCount={notes.length} onClickBell={() => alert(`${notes.length} task remaining.`)} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          priority={noteItem.priority}
          color={noteItem.color}
          onDelete={deleteNote}
          onUpdate={updateNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
