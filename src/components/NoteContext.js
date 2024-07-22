// NoteContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NoteContext = createContext();

const API_URL = 'https://crudcrud.com/api/f4b6576a83924bc3a1ea5920a12e30f3/notes';

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  }, []);

  const addNote = (title, description) => {
    const newNote = { title, description };
    axios.post(API_URL, newNote)
      .then(response => {
        setNotes([...notes, response.data]);
      })
      .catch(error => {
        console.error('Error adding note:', error);
      });
  };

  const deleteNote = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setNotes(notes.filter(note => note._id !== id));
      })
      .catch(error => {
        console.error('Error deleting note:', error);
      });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, handleSearch, searchTerm, filteredNotes }}>
      {children}
    </NoteContext.Provider>
  );
};
