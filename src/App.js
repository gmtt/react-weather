import React, {Component} from 'react';
import {Paper} from "@material-ui/core";
import Head from "./component/Head/Head";
import ScrollList from "./component/ScrollList/ScrollList";

class App extends Component {
    render() {
        return (
            <Paper>
                <Head/>
                <ScrollList/>
            </Paper>
        );
    }
}

export default App;
