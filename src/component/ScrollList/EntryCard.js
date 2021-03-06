import * as React from "react";
import Card from "@material-ui/core/Card";
import {
    Avatar,
    Button,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {KeyboardArrowDown, KeyboardArrowUp} from "@material-ui/icons";

const WEATHER_ICON = {
    '01': 'static/sunny.svg',
    '02': 'static/partly.svg',
    '03': 'static/cloudy.svg',
    '04': 'static/cloudy.svg',
    '09': 'static/rainy.svg',
    '10': 'static/pourin.svg',
    '11': 'static/lightn.svg',
    '13': 'static/snowy.svg',
    '50': 'static/fog.svg'
};

const styles = theme => ({});

class EntryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
    }

    handleExpandClick = () => {
        this.setState(state => ({
            expanded: !state.expanded
        }))
    };

    render() {
        return (
            <Card elevation={6}>
                <CardHeader
                    title={this.props.description}
                    subheader={this.props.time}
                    avatar={<Avatar alt="weatherIcon" src={WEATHER_ICON[this.props.iconId.slice(0, 2)]}/>}
                />
                <CardContent>
                    <Typography variant="subtitle1"
                                gutterBottom
                                align='center'
                    >
                        {this.props.temp_min}°C ~ {this.props.temp_max}°C
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={this.handleExpandClick} fullWidth={true}>
                        <Grid container alignItems='center' justify='center'>
                            {this.state.expanded ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                            {this.state.expanded ? 'Hide' : 'Show Details'}
                        </Grid>
                    </Button>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto">
                    <List>
                        <ListItem>
                            <ListItemText
                                primary='Pressure'
                                secondary={this.props.pressure + 'hPa'}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='humidity'
                                secondary={this.props.humidity + '%'}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Wind Speed'
                                secondary={this.props.wind_speed + 'm/s'}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Wind Deg'
                                secondary={this.props.wind_deg + '°'}
                            />
                        </ListItem>
                    </List>
                </Collapse>
            </Card>
        )
    }


}

EntryCard.propTypes = {
    description: PropTypes.string.isRequired,
    iconId: PropTypes.string.isRequired,
    temp_min: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
    wind_deg: PropTypes.number.isRequired
};

export default EntryCard;