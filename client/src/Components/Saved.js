import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from '@material-ui/core/Link';
import API from '../utils/API';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function Saved() {
    const [savedBooks, setSavedBooks] = useState([])


    function deleteBook(id) {
        axios.delete(`/api/books/${id}`).then(() => {
            window.location.reload();
        })

    }

    useEffect(() => {
        async function getBooks() {
            const spec = await axios.get(`/api/books`)
            console.log(spec);

            setSavedBooks(spec.data);

        }
        getBooks()
    }, [])

    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    return (
        <div>
            {savedBooks.length ? (
                <List>
                    {savedBooks.map(Book => (

                        <ListItem key={Book.id}>
                            {/* <Image src= {Book.volumeInfo.imageLinks.thumbnail}> 
                            </Image> */}
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <img src={Book.image}></img>
                                        <Typography variant="h5">
                                            <Link href={Book.link}>

                                                {Book.title}
                                            </Link>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                className={classes.button}
                                                startIcon={<DeleteIcon />}
                                                onClick={() => {
                                                    deleteBook(Book.id)
                                                    alert("Deleted " + Book.title)
                                                    // handleBookSubmit(Book) 
                                                }}
                                            >
                                                DELETE
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            variant="h6"
                                        >
                                            {Book.author}
                                        </Typography>
                                        <Typography variant="caption">

                                            {Book.synopsis}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Books to Display</h3>
                )}
        </div>
    )
}

export default Saved
