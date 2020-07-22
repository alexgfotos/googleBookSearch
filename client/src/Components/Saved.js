import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, ListItemText} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Saved(props){

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
                                        <img src={result.volumeInfo.imageLinks.thumbnail}></img>
                                        <Typography variant="h5">
                                        <Link href={result.selfLink}>
                                        
                                            {result.volumeInfo.title}
                                            </Link>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                className={classes.button}
                                                startIcon={<SaveIcon />}
                                                onClick={() => { alert('clicked') }}
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
                    <h3>No Saved Books to Display</h3>
                )}
        </div>
    )
}
