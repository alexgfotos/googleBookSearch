import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


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

    return (
        <Box>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    id="outlined-basic"
                    label="Search here..."
                    variant="outlined" />
                <Button
                    variant="outlined"
                    onClick={() => {
                        alert('clicked')
                    }}>
                    Search!
                    </Button>

            </form>
        </Box>
    );
}
