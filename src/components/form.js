
import { Grid, TextField, makeStyles, FormControl, Button, Select, InputLabel, MenuItem, Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const initialValue = {
    rover: 'Curiosity',
    camera: 'front',
    sol: '',
};
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }


    },
}));



export default function AppForm() {


    const [values, setValues] = useState(initialValue);
    const classes = useStyles();
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        e.preventDefault();
        let api_key = "&api_key=m3F2E4i18nyoXclthel1ChrmRCQ1ajagegTSEb5I"
        let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + values.rover + "/photos?camera=" + values.camera + "sol=" + values.sol + api_key

        fetch(url).then(function (response) {
            console.log(response)
            return response.blob();
        }).then(function (blob) {
            // Convert the blob to an object URL — this is basically an temporary internal URL
            // that points to an object stored inside the browser
            let objectURL = URL.createObjectURL(blob);
            // invoke showProduct


        }).catch(function (response) {
            // FAILURE RESPONSE
            console.log('Error! Please try again');
        });
    };



    return (
        <>
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControl >
                            <InputLabel >Camera</InputLabel>
                            <Select
                                variant="outlined"
                                name="camera"
                                labal="Choose camera view"
                                value={values.camera}
                                onChange={handleInputChange}
                            >
                                <MenuItem value={1}>Front Hazard Avoidance Camera</MenuItem>
                                <MenuItem value={2}>Rear Hazard Avoidance Camera</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Rover</InputLabel>
                            <Select
                                variant="outlined"
                                name="rover"
                                labal="Rover"
                                value={values.rover}
                                onChange={handleInputChange}
                            >
                                <MenuItem value={1}>Curiosity</MenuItem>
                                <MenuItem value={2}>Opportunity</MenuItem>
                                <MenuItem value={3}>Spirit</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            name="sol"
                            label="Sol(Mars day)"
                            value={values.sol}
                            onChange={handleInputChange}
                            className={classes.inputPadding} />
                        <div><Button color="primary" type="submit" /*onClick={handleSubmit}*/>Discover</Button></div>
                    </Grid>

                </Grid>
            </form >

            <div>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="200"
                            src='objectURL'
                        />
                    </CardActionArea>
                </Card>
            </div>
        </>

    )
}
