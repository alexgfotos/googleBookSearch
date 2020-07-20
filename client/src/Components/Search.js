import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios'
import Image from 'material-ui-image'
import { ResultList } from './ResultList';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



export default function BasicTextFields() {
    const [searchTerm, setSearchTerm] = useState("")
    const [displayState, setDisplayState] = useState(false)
    const classes = useStyles();
    const books = []

    function renderResults() {
        const renderedResults = `<img src=${books[0].volumeInfo.imageLinks.thumbnail}></img>`
    }

    function searchBook(searchTerm) {
        const key = "AIzaSyA309FWjrT_doAim2LjcNuo9dHZi1-F8jE"
        const result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`).then(result => {
            console.log(result)
            books.push(result.data.items)
            console.log(books)
            renderResults()
        }).catch(err => {
        })
        // console.log(result)
        // book.push(result.data.items)
        // console.log(book)
    }

    // useEffect(() => {
    //     setDisplayState(true)
    // }, [books])

    return (
        <Paper >
            <Container >
                <Box >
                    <Grid container spacing={2} direction="column" justify="center" alignItems="center" maxWidth="200">
                        <form className={classes.root} noValidate autoComplete="off">
                            <Grid item xs={12}>
                                <TextField
                                    style={{ marginTop: "10px" }, { width: "90%" }}
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value)
                                    }}
                                    id="outlined-basic"
                                    label="Search here..."
                                    variant="outlined" />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    style={{ marginBottom: "10px" }, { width: "90%" }}
                                    size='large'
                                    variant="outlined"
                                    onClick={() => {
                                        searchBook(searchTerm)
                                    }}>
                                    Search!
                    </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4">
                                    Results:
                                </Typography>
                                <ResultList results={books} />
                            </Grid>

                        </form>
                    </Grid>
                </Box>
            </Container>
        </Paper>
    );
}
