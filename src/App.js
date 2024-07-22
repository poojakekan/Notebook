// App.js
import React from 'react';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import { NoteProvider } from './components/NoteContext';

function App() {
  return (
    <NoteProvider>
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Note Book</h1>
        <SearchBar />
        <NoteList />
      </div>
    </NoteProvider>
  );
}

export default App;

