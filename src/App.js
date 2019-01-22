import React, {Component} from 'react';
import {createMuiTheme, Paper} from "@material-ui/core";
import Head from "./component/Head/Head";
import ScrollList from "./component/ScrollList/ScrollList";
import {MuiThemeProviderOld} from "@material-ui/core/es/styles/MuiThemeProvider";

const theme = createMuiTheme({
    palette: {
        type: "light"
    },
    typography: {
      useNextVariants:true
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProviderOld theme={theme}>
                <Paper>
                    <Head/>
                    <ScrollList/>
                </Paper>
            </MuiThemeProviderOld>
        );
    }
}

export default App;
