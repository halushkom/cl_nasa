import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import showProduct from './form';
import AppForm from './form';
import { Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Mars exploration
                    </Typography>

                </Toolbar>
            </AppBar>

            <Container>

                <Paper className={classes.pageContent}>
                    <AppForm />
                </Paper>


            </Container>

        </div>
    );
}
