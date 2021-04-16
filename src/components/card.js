import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

/*const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});*/

export default function RenderPhoto(props) {
    //const classes = useStyles();

    return (
        <Card /*className={classes.root}*/>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    src={props.item.img_src}
                />
            </CardActionArea>
        </Card>
    );
}

