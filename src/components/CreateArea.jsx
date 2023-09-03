import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    if (props.editIndex !== null && props.noteToEdit !== null) { // Check for null
      setNote({
        title: props.noteToEdit.title,
        content: props.noteToEdit.content
      });
    } else {
      setNote({
        title: "",
        content: ""
      });
    }
  }, [props.editIndex, props.noteToEdit]);
  

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function cancelNote() {
    props.onCancel();
    setNote({
      title: "",
      content: ""
    });
  }

  async function handleAddNote() {
    try {
      await axios.post("http://localhost:5000/api/notes", note);
      setNote({
        title: "",
        content: ""
      });
  
      // Call the onAddNote prop to fetch notes after adding a new note
      if (typeof props.onAddNote === 'function') {
        props.onAddNote();
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }
  
  
  

  async function handleEditNote() {
    try {
      await axios.put(
        `http://localhost:5000/api/notes/${props.noteToEdit._id}`,
        note
      );
      props.onCancel();
      setNote({
        title: "",
        content: ""
      });
  
      // Fetch the updated notes after editing
      props.onFetchNotes(); 
    } catch (error) {
      console.error("Error editing note:", error);
    }
  }
  

  return (
    <div>
      <form>
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
        {props.editIndex !== null ? (
          <>
            <button className="cancelButton" type="button" onClick={cancelNote}>
              Cancel
            </button>
            <button
              className="addEditButton"
              type="button"
              onClick={handleEditNote}
            >
              Edit
            </button>
          </>
        ) : (
          <button className="addButton" type="button" onClick={handleAddNote}>
            Add
          </button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
