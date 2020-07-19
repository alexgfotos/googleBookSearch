import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios'


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

    function searchBook(searchTerm) {
        const key = "AIzaSyA309FWjrT_doAim2LjcNuo9dHZi1-F8jE"
        const result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`)
        console.log(result)
    }

    return (
        <Paper >
            <Container >
                <Box >
                    <Grid container spacing={2} direction="column" justify="center" alignItems="center" maxWidth="200">
                        <form className={classes.root} noValidate autoComplete="off">
                            <Grid item xs={12}>
                                <TextField
                                style={{ marginTop: "10px" },{ width: "90%" }}
                                    onChange={(event) => {
                                        setSearchTerm(event.target.value)
                                    }}
                                    id="outlined-basic"
                                    label="Search here..."
                                    variant="outlined" />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    style={{ marginBottom: "10px" },{ width: "90%" }}
                                    size='large'
                                    variant="outlined"
                                    onClick={() => {
                                        searchBook(searchTerm)
                                    }}>
                                    Search!
                    </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant= "h4">
                                    Results:
                                </Typography>
                                
                            </Grid>

                        </form>
                    </Grid>
                </Box>
            </Container>
        </Paper>
    );
}
