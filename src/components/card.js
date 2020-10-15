import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AppForm from './form'
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

/*let api_key = "m3F2E4i18nyoXclthel1ChrmRCQ1ajagegTSEb5I"
//let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + initialValue.rover + "/photos?camera=" + initialValue.camera + "sol=" + initialValue.sol + api_key

let fetchBob = (image) => {
    fetch(url).then(function (response) {
        return response.blob();
    }).then(function (blob) {
        // Convert the blob to an object URL — this is basically an temporary internal URL
        // that points to an object stored inside the browser
        let objectURL = URL.createObjectURL(blob);
        // invoke showProduct
        showProduct(objectURL, image);
    });
};*/
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function showProduct() {
    const classes = useStyles();

    return (
        {
            this.props.items.map(item => {
                return (
                    <Card /*className={classes.root}*/>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                src='item.img_src'

                            />
                        </CardActionArea>
                    </Card>
                );
            }
        }
    }
