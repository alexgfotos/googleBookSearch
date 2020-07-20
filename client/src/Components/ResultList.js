import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';

export const ResultList = (props) => {
    return (
        <div>
            {props.results.length ? (
                <List>
                    {props.results.map(result => (
                        <ListItem>
                            <Typography >
                                {result.volumeInfo.title}
                                </Typography>
                        </ListItem>
                    ))}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </div>
    )
}
