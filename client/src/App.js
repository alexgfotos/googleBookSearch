import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Search from './Components/Search';
import { Paper, Container, Grid } from '@material-ui/core';
import API from './utils/API';




function App() {

  // const classes = useStyles();
  return (
    <div>
      <Container>
        
        <Nav />
        <Search />
      </Container>
    </div>
  );
}

export default App;
