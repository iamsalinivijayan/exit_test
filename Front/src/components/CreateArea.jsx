import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const submitNote = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });

      if (!response.ok) {
        throw new Error('Failed to add note');
      }

      // Assuming the backend returns the added note
      const addedNote = await response.json();

      // Pass the added note to the parent component
      props.onAdd(addedNote);

      // Clear the form after successfully adding the note
      setNote({
        title: "",
        content: ""
      });
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div style={styles.center} className="body">
      <div style={styles.container}>
        <form>
          <input
            style={styles.input}
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
          <textarea
            style={styles.textarea}
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
          <button style={styles.button} onClick={submitNote}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust as needed
  },
  container: {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: '300px', // Set a fixed width or adjust as needed
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CreateArea;
