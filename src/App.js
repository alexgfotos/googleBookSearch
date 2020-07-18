import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import { Paper } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       width: "75%",
//       alignContent: "center"
//     },
// },
// }));

function App() {

  // const classes = useStyles();
  return (
    <div>
      <Nav>
      <Paper> 
      </Paper>
      </Nav>
    </div>
  );
}

export default App;
