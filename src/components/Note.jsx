import React from "react";
import axios from "axios";

function Note(props) {
  function handleEditClick() {
    if (!props.isOnEdit) {
      props.onEdit(props.id);
    }
  }

  async function handleDeleteClick() {
    try {
      const id = props._id; // Use the correct _id value from props
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      
      // Call fetchNotes function to update notes after deletion
      props.onDeleteNote(); // Add this line to call the function
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  } 

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {!props.isOnEdit && ( // Render the buttons only when not in edit mode
        <>
          <button className="deleteButton" onClick={handleDeleteClick}>
            DELETE
          </button>
          <button className="editButton" onClick={handleEditClick}>
            EDIT
          </button>
        </>
      )}
    </div>
  );
}

export default Note;
