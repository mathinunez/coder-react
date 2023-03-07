import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ListContainer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludos="Aca van a ir todos los items" />
    </div>
  );
}

export default App;
