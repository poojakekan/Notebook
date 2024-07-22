import React, { useContext } from 'react';
import Note from './Note';
import { NoteContext } from './NoteContext';

function NoteList() {
  const { filteredNotes } = useContext(NoteContext);

  return (
    <div>
      {filteredNotes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
