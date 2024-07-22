// SearchBar.js
import React, { useContext, useState } from 'react';
import { NoteContext } from './NoteContext';

function SearchBar() {
  const { handleSearch, addNote, notes, filteredNotes } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description) {
      addNote(title, description);
      setTitle('');
      setDescription('');
    }
  };

  const handleSearchInput = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <input type="text" onChange={handleSearchInput} placeholder="Search by title" />
        <p>Total Notes: {notes.length}</p>
        <p>Showing {filteredNotes.length} results</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '30vw'}}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{margin: '10px'}}/>
        <textarea rows={4} cols={32} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" style={{margin: '10px'}} />
        <button onClick={handleSubmit} style={{margin: '10px'}}>Add Note</button>
      </div>
    </div>
  );
}

export default SearchBar;
