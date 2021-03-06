import React from 'react';
import * as PropTypes from "prop-types";
import {CITY} from "../location";
import {connect} from "react-redux";
import {Typography, withStyles} from "@material-ui/core";

const styles = theme => ({
    typography: {
        fontSize: '2rem',
        margin: '0'
    }
});

function WeatherTitle(props) {
    const {classes} = props;
    return (
        <Typography gutterBottom align='center'
                    className={classes.typography}
                    color='inherit'
        >
            {props.curLocation}
        </Typography>
    );
}

WeatherTitle.propTypes = {
    curLocation: PropTypes.string.isRequired
};

function getCityName(id) {
    for (let key in CITY) {
        if (CITY[key] === id) {
            return key;
        }
    }
    return 'None'
}

const mapStateToProps = (state) => ({
    curLocation: getCityName(state.weather.curCity)
});

export default connect(mapStateToProps, null)(
    withStyles(styles, {withTheme: true})(
        WeatherTitle
    )
);
