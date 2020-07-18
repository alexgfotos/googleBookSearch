import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Search from './Components/Search';
import { Paper } from '@material-ui/core';




function App() {

  // const classes = useStyles();
  return (
    <div>
      <Nav /> 
        <Search />
    </div>
  );
}

export default App;
