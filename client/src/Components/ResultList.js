import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from 'material-ui-image'
import { Typography, ListItemText } from '@material-ui/core';

export const ResultList = (props) => {
    return (
        <div>
            {props.results.length ? (
                <List>
                    {props.results.map(result => (

                        <ListItem>
                            {/* <Image src= {result.volumeInfo.imageLinks.thumbnail}> 
                            </Image> */}
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography variant= "h5">
                                        {result.volumeInfo.title}
              </Typography>
                                    </React.Fragment>
                            }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            variant="h6"                                           
                                        >
                                            {result.volumeInfo.authors}
              </Typography> 
              <Typography>
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
