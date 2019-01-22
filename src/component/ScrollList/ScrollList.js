import * as React from "react";
import {GridList, GridListTile, withStyles} from "@material-ui/core";
import * as PropTypes from "prop-types";
import EntryCard from "./EntryCard";
import {connect} from "react-redux";

const styles = theme => ({
   gridList: {
       flexWrap: 'nowrap'
   }
});

class ScrollList extends React.Component{
    render() {
        const {classes} = this.props;
        let cards = [];
        for(let city of this.props.cities){
            if (city.id === this.props.curCity){
                let key = 0;
                for(let info of city.data) {
                    cards.push(
                        <GridListTile key={key++}>
                            <EntryCard
                                description={info.weather_description}
                                iconId={info.weather_icon}
                                temp_min={info.temp_min}
                                temp_max={info.temp_max}
                                time={info.time}
                                pressure={info.pressure}
                                humidity={info.humidity}
                                wind_speed={info.wind_speed}
                                wind_deg={info.wind_deg}
                            />
                        </GridListTile>
                    )
                }
            }
        }

        return(
            <GridList className={classes.gridList} cellHeight='auto'>
                {cards}
            </GridList>
        )
    }
}

ScrollList.propTypes = {
    cities: PropTypes.array.isRequired,
    curCity: PropTypes.number.isRequired
};

const mapStatesToProps = (state) => ({
    cities: state.weather.cities,
    curCity: state.weather.curCity
});

export default connect(mapStatesToProps, null)(
    withStyles(styles)(ScrollList)
);