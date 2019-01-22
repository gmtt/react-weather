import React from 'react';
import Grid from "@material-ui/core/Grid";
import WeatherTitle from "./WeatherTitle";
import CitySelector from "./CitySelector";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        backgroundColor: '#ede7f6',
        padding: '4px'
    }
});

function Head(props) {
    let {classes} = props;
    return(
        <Grid container direction="row"
              justify="space-between" alignItems="center"
              className={classes.root}
        >
            <Grid item xs={8}>
                <WeatherTitle/>
            </Grid>
            <Grid item xs={4}>
                <CitySelector/>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Head);