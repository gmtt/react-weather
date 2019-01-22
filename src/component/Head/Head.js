import React from 'react';
import Grid from "@material-ui/core/Grid";
import WeatherTitle from "./WeatherTitle";
import CitySelector from "./CitySelector";

function Head() {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item xs={8}>
                <WeatherTitle/>
            </Grid>
            <Grid item xs={4}>
                <CitySelector/>
            </Grid>
        </Grid>
    )
}

export default Head;