import {Grid, makeStyles, FormControl, Button, InputLabel} from '@material-ui/core';
import React, {useState} from 'react';
import {GET_ROVER, GET_SOL, GET_CAMERA} from "../redux/action";
import {connect} from 'react-redux'
import {Fetch} from "../other/fetch";
import { listSelector} from "../redux/selectors";
import PhotoesList from "./PhotoesList";

const mapStateToProps = (state) => {
    return {
        list: listSelector(state)
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }


    },
}));


const AppForm = ({dispatch, list}) => {


    const [rover, setRover] = useState('')
    const [sol, setSol] = useState('')
    const [camera, setCamera] = useState('');
    const classes = useStyles();
    const onRoverChange = e => setRover(e.target.value);
    const onCameraChange = e => setCamera(e.target.value);
    const onSolChange = e => setSol(e.target.value);
    let handleSubmit = e => {
        if (rover) {
            dispatch(
                GET_ROVER({
                    rover
                })
            );
            setRover('');
        }
        if (camera){
            dispatch(
            GET_CAMERA({
                camera
            })
        );
            setCamera('');
        }
        if (sol){
            dispatch(
                GET_SOL({
                    sol
                })
            );
            setSol('');
        }
        Fetch(rover, camera, sol, dispatch)
    };

    return (
        <>
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <FormControl>
                        <InputLabel>Camera</InputLabel>
                        <select
                            variant="outlined"
                            name="camera"
                            label="Choose camera view"
                            value={camera}
                            onChange={onCameraChange}
                        >
                            <option selected value={' '}> </option>
                            <option value={'fhaz'}>Front Hazard Avoidance Camera</option>
                            <option value={'rhaz'}>Rear Hazard Avoidance Camera</option>
                        </select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Rover</InputLabel>
                        <select
                            variant="outlined"
                            name="rover"
                            label="Rover"
                            value={rover}
                            onChange={onRoverChange}
                        >
                            <option selected value={' '}> </option>
                            <option value={'curiosity'}>Curiosity</option>
                            <option value={'opportunity'}>Opportunity</option>
                            <option value={'spirit'}>Spirit</option>
                        </select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <input
                        variant="outlined"
                        name="sol"
                        label="Sol(Mars day)"
                        value={sol}
                        onChange={onSolChange}
                    />

                </Grid>
            </Grid>
        </form>
            <div><Button color="primary" type="submit" onClick={handleSubmit}>Discover</Button></div>
            <PhotoesList list={list} />
        </>
    )
}
export default connect(mapStateToProps)(AppForm)
