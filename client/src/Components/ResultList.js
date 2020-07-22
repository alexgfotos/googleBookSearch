import React, { useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, ListItemText } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Link from '@material-ui/core/Link';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export const ResultList = (props) => {
    const [thumbnail, setThumbnail] = useState("https://mineblocks.com/1/wiki/images/f/f3/Book.png")
    const handleBookSubmit = (result) => {

        API.Book.create({
            title: result.volumeInfo.title,
            author: result.volumeInfo.authors[0],
            synopsis: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.selfLink
        })

        // window.location.reload(false)
    }


    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();
    return (
        <div>
            {props.results.length ? (
                <List>
                    {props.results.map(result => (

                        <ListItem key={result.id}>
                            {/* <Image src= {result.volumeInfo.imageLinks.thumbnail}> 
                            </Image> */}
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        {result.volumeInfo.imageLinks ? 
                                        (<img src={result.volumeInfo.imageLinks.thumbnail}></img>) 
                                        : (
                                            <img src={thumbnail}></img>
                                        )}
                                        <Typography variant="h5">
                                            <Link href={result.volumeInfo.previewLink}>

                                                {result.volumeInfo.title}
                                            </Link>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                className={classes.button}
                                                startIcon={<SaveIcon />}
                                                onClick={() => {
                                                    alert("reading is fun! Saved " + result.volumeInfo.title)
                                                    handleBookSubmit(result)
                                                }}
                                            >
                                                SAVE
                                            </Button>
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            variant="h6"
                                        >
                                            {result.volumeInfo.authors}, published {result.volumeInfo.publishedDate}
                                        </Typography>
                                        <Typography variant="caption">

                                            {result.volumeInfo.description}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>
    )
}
