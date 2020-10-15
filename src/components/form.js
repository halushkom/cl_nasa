
import { Grid, TextField, makeStyles, FormControl, Button, Select, InputLabel, MenuItem } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
//import showProduct from './card'
import axios from 'axios';

const initialValue = {
    rover: '',
    camera: '',
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

    const [data, setData] = useState({ hits: [] })
    const [values, setValues] = useState(initialValue);
    const classes = useStyles();
    let handleInputChange = e => {
        let { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    };
    let api_key = "&api_key=3PpDIZvDSX9JMIaRTRTydkZYGEQiNT4Dx5AzH5Mw"
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + values.rover + "/photos?camera=" + values.camera + "&sol=" + values.sol + api_key
    /*async function fetchData() {
        const result = await axios(url,);
        setData(result.data);
        //fetch(url)/*.then(function (response) {
        //return response.json();*/
    //setData(result.data);
    /*})*//*.then(function (data) {
                setData(result.data)
            })
};
useEffect(() => {
    fetchData()
}, []);
*/
    let handleSubmit = e => {
        e.preventDefault()
        fetchData()
        useEffect(() => {
            const fetchData = async () => {
                let result = fetch(url).then(function (response) {
                    response.json();
                }).then(function (data) {
                    setData(result.data);
                    //console.log(data)
                })
                /*.then(function (json) {
                   let images = json();*/

            };/*.catch(function (response) {
                // FAILURE RESPONSE
                console.log('Error! Please try again');
            });*/

            fetchData();
        }, []);




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
                                    <MenuItem value={'fhaz'}>Front Hazard Avoidance Camera</MenuItem>
                                    <MenuItem value={'rhaz'}>Rear Hazard Avoidance Camera</MenuItem>
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
                                    <MenuItem value={'curiosity'}>Curiosity</MenuItem>
                                    <MenuItem value={'opportunity'}>Opportunity</MenuItem>
                                    <MenuItem value={'spirit'}>Spirit</MenuItem>
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
                            <div><Button color="primary" type="submit" onClick={handleSubmit}>Discover</Button></div>
                        </Grid>

                    </Grid>
                </form >

                <div>
                    {data.hits.map(item => (
                        /*<showProduct items={item.img_src} />*/
                        <Card /*className={classes.root}*/>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    src={item.img_src}

                                />
                            </CardActionArea>
                        </Card>))
                    }
                </div>
            </>

        )
    }
