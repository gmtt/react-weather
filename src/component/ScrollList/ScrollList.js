import * as React from "react";
import {ListItem} from "@material-ui/core";
import * as PropTypes from "prop-types";
import EntryCard from "./EntryCard";
import {connect} from "react-redux";
import List from "@material-ui/core/List";


class ScrollList extends React.Component {
    render() {
        let cards = [];
        for (let city of this.props.cities) {
            if (city.id === this.props.curCity) {
                let key = 0;
                for (let info of city.data) {
                    cards.push(
                        <ListItem key={key++}>
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
                        </ListItem>
                    )
                }
            }
        }

        return (
            <List>
                {cards}
            </List>
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
    ScrollList
);