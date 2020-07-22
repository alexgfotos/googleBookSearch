import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios'
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
    const classes = useStyles();
    const [books, setBooks] = useState([])
    
    

    function searchBook(searchTerm) {
        // const key= process.env.REACT_APP_GOOGLE_API_KEY
        const key = "AIzaSyDbtesBTBQ3r6Y3i01WHeoXqEoYdSO8jOE";
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`).then(result => {
            console.log(result)
            setBooks(result.data.items)
            console.log(books)
        }).catch(err => {
        })
        
    }


    return (
        <Paper >
            <Container >
                <Box >
                    <Grid container spacing={2} direction="column" alignItems="center" >
                        <form className={classes.root} noValidate autoComplete="off" >
                            <Grid item xs={12}>
                                <TextField
                                    style={{ marginTop: "10px" }, { width: "90%" }}
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value)
                                    }}
                                    id="outlined-basic"
                                    label="Search here..."
                                    variant="outlined" 

                                    />
                                    
                            </Grid>

                            <Grid item xs={12 }>
                                <Button
                                    style={{ marginBottom: "10px" }, { width: "90%" }}
                                    size='large'
                                    variant="outlined"
                                    onSubmit={() => {
                                        searchBook(searchTerm)
                                    }}
                                    onClick={() => {
                                        searchBook(searchTerm)
                                    }}>
                                    Search!
                    </Button>
                            </Grid>
                        </form>
                    </Grid>
                    <Typography variant="h4">
                                    Results:
                                </Typography>
                    <ResultList results={books} />
                </Box>
            </Container>
        </Paper>
    );
}
