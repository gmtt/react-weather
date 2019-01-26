import React from 'react';
import Grid from "@material-ui/core/Grid";
import WeatherTitle from "./WeatherTitle";
import CitySelector from "./CitySelector";
import {AppBar} from "@material-ui/core";

function Head(props) {
    return (
        <AppBar position='static' color='primary'>
            <Grid container direction="row"
                  justify="space-between" alignItems="center"
            >
                <Grid item xs={8}>
                    <WeatherTitle/>
                </Grid>
                <Grid item xs={4}>
                    <CitySelector/>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Head;