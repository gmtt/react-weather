import React from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {CITY} from "../location";
import {fetchWeather} from "./action";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";

class CitySelector extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchWeather(Object.values(CITY)[0]);
    }

    render() {
        let cities = [];
        for (let key in CITY) {
            cities.push(
                <FormControlLabel
                    control={<Radio/>}
                    label={key}
                    value={CITY[key].toString()}
                    key={key}
                />
            )
        }
        return (
            <FormControl>
                <RadioGroup
                    row
                    value={this.props.curCity.toString()}
                    onChange={(e) => {
                        this.props.fetchWeather(Number(e.target.value))
                    }}>
                    {cities}
                </RadioGroup>
            </FormControl>
        )
    }
}

CitySelector.propTypes = {
    curCity: PropTypes.number.isRequired,
    fetchWeather: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    curCity: state.weather.curCity
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (id) => fetchWeather(id)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(
    CitySelector
);