import React, {useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Nav from './Components/Nav';
import Search from './Components/Search';
import Saved from './Components/Saved';
import { Paper, Container, Grid } from '@material-ui/core';
import API from './utils/API';




function App() {
  const [books, setBooks] = useState([])

  // const classes = useStyles();
  return (
    <div>
      <Container>

        <Nav />
      <Router>
        <Switch>

          <Route exact path={["/", "/home"]}>
            <Search />
          </Route>
          <Route exact path={["/search"]}>
            <Search />
          </Route>
          <Route exact path={["/saved"]} >
            <Saved results={books}/>
          </Route>


        </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
