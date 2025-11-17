import React from 'react';
import './App.css';
import PersonList from './components/PersonList';

function App() {
  return (
    <>
      <header className="app-header">
        User List
      </header>

      <PersonList />
    </>
  );
}

export default App;