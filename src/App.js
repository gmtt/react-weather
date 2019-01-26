import React, {Component} from 'react';
import {createMuiTheme, Paper} from "@material-ui/core";
import Head from "./component/Head/Head";
import ScrollList from "./component/ScrollList/ScrollList";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#2196f3',
            main: "#2196f3",
            dark: "#303f9f",
            contrastText: "#fff"
        },
        secondary: {
            light: '#f50057',
            main: "#f50057",
            dark: "#c51162",
            contrastText: "#fff",
        }
    },
    typography: {
        useNextVariants: true,
        body2: {
            color: "inherit"
        }
    },
    overrides: {
        MuiCard: {
            root: {
                width: '100%'
            }
        },
        MuiCardHeader: {
            root: {
                justifyItems: 'center'
            }
        }
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Grid container alignItems='center' justify='center'>
                    <Grid item lg={4} sm={12}>
                        <Paper>
                            <Head/>
                            <ScrollList/>
                        </Paper>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
