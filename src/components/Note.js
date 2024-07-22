// Note.js
import React, { useContext } from 'react';
import { NoteContext } from './NoteContext';

function Note({ note }) {
  const { deleteNote } = useContext(NoteContext);

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
}

export default Note;
