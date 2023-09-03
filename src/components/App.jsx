import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import GenerateText from "./GenerateText";

function App() {
  const [notes, setNotes] = useState([]);
  const [isOnEdit, setMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function cancelNote() {
    setMode(false);
    setEditIndex(null);
  }

  function startEditMode(id) {
    setMode(true);
    setEditIndex(id);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      console.log("Fetching notes...");
      const response = await axios.get("http://localhost:5000/api/notes");
      console.log("Response:", response.data);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }
  

  return (
    <div>
      <Header />
      <CreateArea
        onCancel={cancelNote}
        editIndex={editIndex}
        noteToEdit={isOnEdit ? notes[editIndex] : null}
        onAddNote={fetchNotes} // Pass the fetchNotes function as a prop
        onFetchNotes={fetchNotes} // Pass the fetchNotes function as a prop
      />
      <GenerateText  
        onSummarize={fetchNotes}
        notesText={notes.map((noteItem) => noteItem.content).join("\n")}
      />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            _id={noteItem._id} // Pass the _id value to the Note component
            onEdit={startEditMode}
            isOnEdit={isOnEdit}
            onDeleteNote={fetchNotes} // Pass the fetchNotes function as a prop
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
